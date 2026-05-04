// summarize/summarize.c
//
// Build:
//   gcc -O3 -fopenmp summarize.c -lm -o summary
//
// Run:
//   ./summary /home/aditya/GR86P/sessions
//
// Behavior:
//   - Parses every session_* folder in parallel with OpenMP.
//   - Creates summary.json for useful sessions.
//   - Deletes useless/idle session folders.
//   - If GNSS has valid fixes, session must move >= 1 mile from start.
//   - If GNSS has no valid fixes, falls back to CAN movement:
//       keep only if CAN speed or wheel speed goes over 1 mph.
//
// Important speed fix:
//   Raw CAN speed scale appears to be m/s:
//       raw_value * 0.015694
//   Convert to mph:
//       raw_value * 0.015694 * 2.23694

#define _GNU_SOURCE

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>
#include <math.h>
#include <omp.h>

#ifndef PATH_MAX
#define PATH_MAX 4096
#endif

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

#define RAW_LOG_NAME "raw_can.log"
#define GNSS_LOG_NAME "gnss.log"
#define SUMMARY_NAME "summary.json"

#define SPEED_RAW_TO_MPS 0.015694
#define MPS_TO_MPH 2.23694
#define SPEED_RAW_TO_MPH (SPEED_RAW_TO_MPS * MPS_TO_MPH)

#define MAX_SANE_DT_SEC 1.0
#define MIN_MOVING_SPEED_MPH 1.0
#define MIN_GNSS_DISTANCE_MILES 1.0

typedef struct {
    char path[PATH_MAX];
    char name[512];
} SessionPath;

typedef struct {
    unsigned long long can_frames;

    int has_can;
    double can_start_time;
    double can_end_time;
    double can_duration_sec;

    double max_rpm;
    double max_speed_mph;
    double max_wheel_speed_mph;
    double can_distance_miles;
    double moving_time_sec;

    double speed_sum;
    unsigned long long speed_samples;

    double max_accel_pct;
    double accel_sum;
    unsigned long long accel_samples;

    unsigned long long brake_events;
    int last_brake_light;
    double max_brake_pct;

    double max_abs_steering_deg;
    double steering_abs_sum;
    unsigned long long steering_samples;

    double max_oil_temp_c;
    double max_coolant_temp_c;

    int has_air_temp;
    double min_air_temp_c;
    double max_air_temp_c;

    int has_fuel;
    double start_fuel_pct;
    double end_fuel_pct;

    unsigned long long gear_samples[7];
    unsigned long long clutch_depressed_samples;

    int has_last_can_time;
    double last_can_time;

    int has_last_speed_time;
    double last_speed_time;

    unsigned long long gnss_records;
    unsigned long long gnss_fixes;

    int has_gnss;
    double gnss_start_time;
    double gnss_end_time;

    double start_lat;
    double start_lon;
    double end_lat;
    double end_lon;

    double min_lat;
    double max_lat;
    double min_lon;
    double max_lon;

    int has_prev_gnss;
    double prev_lat;
    double prev_lon;

    double gnss_distance_miles;
    double max_gnss_speed_mph;
    double gnss_speed_sum;
    unsigned long long gnss_speed_samples;

    double max_gnss_distance_from_start_miles;
} Summary;

static int starts_with(const char *s, const char *prefix) {
    return strncmp(s, prefix, strlen(prefix)) == 0;
}

static int is_dir(const char *path) {
    struct stat st;
    return stat(path, &st) == 0 && S_ISDIR(st.st_mode);
}

static int is_file(const char *path) {
    struct stat st;
    return stat(path, &st) == 0 && S_ISREG(st.st_mode);
}

static int remove_tree(const char *path) {
    DIR *dir = opendir(path);

    if (!dir) {
        return remove(path);
    }

    struct dirent *entry;
    char child[PATH_MAX];

    while ((entry = readdir(dir)) != NULL) {
        if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
            continue;
        }

        snprintf(child, sizeof(child), "%s/%s", path, entry->d_name);

        struct stat st;
        if (lstat(child, &st) != 0) {
            continue;
        }

        if (S_ISDIR(st.st_mode)) {
            remove_tree(child);
        } else {
            remove(child);
        }
    }

    closedir(dir);
    return rmdir(path);
}

static uint32_t bits_to_uint_le(const uint8_t *raw, int start_bit, int length) {
    uint32_t value = 0;

    for (int i = 0; i < length; i++) {
        int bit_index = start_bit + i;
        int byte_index = bit_index / 8;
        int bit_in_byte = bit_index % 8;

        if (byte_index >= 8) {
            break;
        }

        if (raw[byte_index] & (1u << bit_in_byte)) {
            value |= (1u << i);
        }
    }

    return value;
}

static int16_t int16_le(const uint8_t *raw, int start_byte) {
    return (int16_t)((uint16_t)raw[start_byte] | ((uint16_t)raw[start_byte + 1] << 8));
}

static double haversine_miles(double lat1, double lon1, double lat2, double lon2) {
    const double earth_radius_miles = 3958.7613;

    double p1 = lat1 * M_PI / 180.0;
    double p2 = lat2 * M_PI / 180.0;
    double dp = (lat2 - lat1) * M_PI / 180.0;
    double dl = (lon2 - lon1) * M_PI / 180.0;

    double a =
        sin(dp / 2.0) * sin(dp / 2.0) +
        cos(p1) * cos(p2) * sin(dl / 2.0) * sin(dl / 2.0);

    return earth_radius_miles * 2.0 * atan2(sqrt(a), sqrt(1.0 - a));
}

static double avg(double sum, unsigned long long count) {
    return count ? sum / (double)count : 0.0;
}

static void init_summary(Summary *s) {
    memset(s, 0, sizeof(*s));

    s->min_air_temp_c = 9999.0;
    s->max_air_temp_c = -9999.0;

    s->min_lat = 9999.0;
    s->max_lat = -9999.0;
    s->min_lon = 9999.0;
    s->max_lon = -9999.0;
}

static void update_can_time(Summary *s, double ts) {
    if (!s->has_can) {
        s->has_can = 1;
        s->can_start_time = ts;
    }

    s->can_end_time = ts;

    if (s->has_last_can_time) {
        double dt = ts - s->last_can_time;

        if (dt > 0.0 && dt < MAX_SANE_DT_SEC) {
            s->can_duration_sec += dt;
        }
    }

    s->last_can_time = ts;
    s->has_last_can_time = 1;
}

static void update_can_distance(Summary *s, double ts, double speed_mph) {
    if (s->has_last_speed_time) {
        double dt = ts - s->last_speed_time;

        if (dt > 0.0 && dt < MAX_SANE_DT_SEC) {
            s->can_distance_miles += speed_mph * (dt / 3600.0);

            if (speed_mph > MIN_MOVING_SPEED_MPH) {
                s->moving_time_sec += dt;
            }
        }
    }

    s->last_speed_time = ts;
    s->has_last_speed_time = 1;
}

static void parse_can_line(const char *line, Summary *s) {
    double ts;
    char id_str[16];
    int dlc;
    unsigned int b[8] = {0};

    int n = sscanf(
        line,
        "%lf %15s %d %x %x %x %x %x %x %x %x",
        &ts,
        id_str,
        &dlc,
        &b[0], &b[1], &b[2], &b[3],
        &b[4], &b[5], &b[6], &b[7]
    );

    if (n < 3 || dlc <= 0) {
        return;
    }

    int byte_count = dlc > 8 ? 8 : dlc;

    if (n < 3 + byte_count) {
        return;
    }

    unsigned int id = 0;
    if (sscanf(id_str, "%x", &id) != 1) {
        return;
    }

    uint8_t raw[8] = {0};
    for (int i = 0; i < byte_count; i++) {
        raw[i] = (uint8_t)b[i];
    }

    s->can_frames++;
    update_can_time(s, ts);

    switch (id) {
        case 0x040: {
            if (byte_count < 5) break;

            double rpm = bits_to_uint_le(raw, 16, 14);
            double accel = raw[4] / 2.55;

            if (rpm > s->max_rpm) {
                s->max_rpm = rpm;
            }

            if (accel > s->max_accel_pct) {
                s->max_accel_pct = accel;
            }

            s->accel_sum += accel;
            s->accel_samples++;
            break;
        }

        case 0x138: {
            if (byte_count < 6) break;

            double steering = int16_le(raw, 2) * -0.1;
            double abs_steering = fabs(steering);

            if (abs_steering > s->max_abs_steering_deg) {
                s->max_abs_steering_deg = abs_steering;
            }

            s->steering_abs_sum += abs_steering;
            s->steering_samples++;
            break;
        }

        case 0x139: {
            if (byte_count < 6) break;

            double speed_mph = bits_to_uint_le(raw, 16, 13) * SPEED_RAW_TO_MPH;

            if (speed_mph > s->max_speed_mph) {
                s->max_speed_mph = speed_mph;
            }

            s->speed_sum += speed_mph;
            s->speed_samples++;

            update_can_distance(s, ts, speed_mph);

            int brake_light = (raw[4] & 0x04) ? 1 : 0;

            if (brake_light && !s->last_brake_light) {
                s->brake_events++;
            }

            s->last_brake_light = brake_light;

            double brake_pct = raw[5] / 0.7;
            if (brake_pct > 100.0) {
                brake_pct = 100.0;
            }

            if (brake_pct > s->max_brake_pct) {
                s->max_brake_pct = brake_pct;
            }

            break;
        }

        case 0x13A: {
            if (byte_count < 8) break;

            double fl = bits_to_uint_le(raw, 12, 13) * SPEED_RAW_TO_MPH;
            double fr = bits_to_uint_le(raw, 25, 13) * SPEED_RAW_TO_MPH;
            double rl = bits_to_uint_le(raw, 38, 13) * SPEED_RAW_TO_MPH;
            double rr = bits_to_uint_le(raw, 51, 13) * SPEED_RAW_TO_MPH;

            if (fl > s->max_wheel_speed_mph) s->max_wheel_speed_mph = fl;
            if (fr > s->max_wheel_speed_mph) s->max_wheel_speed_mph = fr;
            if (rl > s->max_wheel_speed_mph) s->max_wheel_speed_mph = rl;
            if (rr > s->max_wheel_speed_mph) s->max_wheel_speed_mph = rr;

            break;
        }

        case 0x241: {
            if (byte_count < 6) break;

            unsigned int gear = bits_to_uint_le(raw, 35, 3);

            if (gear <= 6) {
                s->gear_samples[gear]++;
            }

            if (raw[5] & 0x80) {
                s->clutch_depressed_samples++;
            }

            break;
        }

        case 0x345: {
            if (byte_count < 5) break;

            double oil = raw[3] - 40.0;
            double coolant = raw[4] - 40.0;

            if (oil > s->max_oil_temp_c) {
                s->max_oil_temp_c = oil;
            }

            if (coolant > s->max_coolant_temp_c) {
                s->max_coolant_temp_c = coolant;
            }

            break;
        }

        case 0x390: {
            if (byte_count < 5) break;

            double air = raw[4] / 2.0 - 40.0;

            if (!s->has_air_temp || air < s->min_air_temp_c) {
                s->min_air_temp_c = air;
            }

            if (!s->has_air_temp || air > s->max_air_temp_c) {
                s->max_air_temp_c = air;
            }

            s->has_air_temp = 1;
            break;
        }

        case 0x393: {
            if (byte_count < 6) break;

            double fuel = 100.0 - (bits_to_uint_le(raw, 32, 10) / 10.23);

            if (!s->has_fuel) {
                s->start_fuel_pct = fuel;
                s->has_fuel = 1;
            }

            s->end_fuel_pct = fuel;
            break;
        }

        default:
            break;
    }
}

static void parse_raw_can_file(const char *path, Summary *s) {
    FILE *fp = fopen(path, "r");

    if (!fp) {
        return;
    }

    char line[512];

    while (fgets(line, sizeof(line), fp)) {
        parse_can_line(line, s);
    }

    fclose(fp);
}

static int json_double(const char *line, const char *key, double *out) {
    char pattern[64];
    snprintf(pattern, sizeof(pattern), "\"%s\":", key);

    char *p = strstr((char *)line, pattern);

    if (!p) {
        return 0;
    }

    p += strlen(pattern);

    while (*p == ' ' || *p == '\t') {
        p++;
    }

    if (strncmp(p, "null", 4) == 0) {
        return 0;
    }

    char *end = NULL;
    double value = strtod(p, &end);

    if (end == p) {
        return 0;
    }

    *out = value;
    return 1;
}

static void parse_gnss_line(const char *line, Summary *s) {
    double wall_time;

    if (!json_double(line, "wall_time", &wall_time)) {
        return;
    }

    s->gnss_records++;

    if (!s->has_gnss) {
        s->has_gnss = 1;
        s->gnss_start_time = wall_time;
    }

    s->gnss_end_time = wall_time;

    double lat;
    double lon;

    if (!json_double(line, "lat", &lat) || !json_double(line, "lon", &lon)) {
        return;
    }

    if (lat < -90.0 || lat > 90.0 || lon < -180.0 || lon > 180.0) {
        return;
    }

    if (s->gnss_fixes == 0) {
        s->start_lat = lat;
        s->start_lon = lon;

        s->min_lat = lat;
        s->max_lat = lat;
        s->min_lon = lon;
        s->max_lon = lon;
    }

    s->gnss_fixes++;

    s->end_lat = lat;
    s->end_lon = lon;

    if (lat < s->min_lat) s->min_lat = lat;
    if (lat > s->max_lat) s->max_lat = lat;
    if (lon < s->min_lon) s->min_lon = lon;
    if (lon > s->max_lon) s->max_lon = lon;

    double from_start = haversine_miles(s->start_lat, s->start_lon, lat, lon);

    if (from_start > s->max_gnss_distance_from_start_miles) {
        s->max_gnss_distance_from_start_miles = from_start;
    }

    if (s->has_prev_gnss) {
        double step = haversine_miles(s->prev_lat, s->prev_lon, lat, lon);

        if (step >= 0.0 && step < 0.25) {
            s->gnss_distance_miles += step;
        }
    }

    s->prev_lat = lat;
    s->prev_lon = lon;
    s->has_prev_gnss = 1;

    double speed;

    if (json_double(line, "speed_mph", &speed)) {
        if (speed > s->max_gnss_speed_mph) {
            s->max_gnss_speed_mph = speed;
        }

        s->gnss_speed_sum += speed;
        s->gnss_speed_samples++;
    }
}

static void parse_gnss_file(const char *path, Summary *s) {
    FILE *fp = fopen(path, "r");

    if (!fp) {
        return;
    }

    char line[2048];

    while (fgets(line, sizeof(line), fp)) {
        parse_gnss_line(line, s);
    }

    fclose(fp);
}

static int session_is_useful(const Summary *s) {
    if (s->gnss_fixes > 0) {
        return s->max_gnss_distance_from_start_miles >= MIN_GNSS_DISTANCE_MILES;
    }

    return
        s->max_speed_mph > MIN_MOVING_SPEED_MPH ||
        s->max_wheel_speed_mph > MIN_MOVING_SPEED_MPH;
}

static void write_summary_json(const char *session_dir, const char *session_name, const Summary *s) {
    char path[PATH_MAX];
    snprintf(path, sizeof(path), "%s/%s", session_dir, SUMMARY_NAME);

    FILE *fp = fopen(path, "w");

    if (!fp) {
        fprintf(stderr, "Failed to write %s\n", path);
        return;
    }

    double moving_ratio = s->can_duration_sec > 0.0
        ? s->moving_time_sec / s->can_duration_sec
        : 0.0;

    const char *season = s->gnss_fixes > 0 ? "season_1" : "preseason";

    fprintf(fp, "{\n");
    fprintf(fp, "  \"session_id\": \"%s\",\n", session_name);
    fprintf(fp, "  \"season\": \"%s\",\n", season);

    fprintf(fp, "  \"files\": {\n");
    fprintf(fp, "    \"raw_can\": true,\n");
    fprintf(fp, "    \"gnss\": %s\n", s->has_gnss ? "true" : "false");
    fprintf(fp, "  },\n");

    fprintf(fp, "  \"time\": {\n");
    fprintf(fp, "    \"start_wall_time\": %.6f,\n", s->has_can ? s->can_start_time : 0.0);
    fprintf(fp, "    \"end_wall_time\": %.6f,\n", s->has_can ? s->can_end_time : 0.0);
    fprintf(fp, "    \"duration_sec\": %.3f,\n", s->can_duration_sec);
    fprintf(fp, "    \"moving_time_sec\": %.3f\n", s->moving_time_sec);
    fprintf(fp, "  },\n");

    fprintf(fp, "  \"can\": {\n");
    fprintf(fp, "    \"frame_count\": %llu,\n", s->can_frames);
    fprintf(fp, "    \"max_rpm\": %.1f,\n", s->max_rpm);
    fprintf(fp, "    \"max_speed_mph\": %.3f,\n", s->max_speed_mph);
    fprintf(fp, "    \"max_wheel_speed_mph\": %.3f,\n", s->max_wheel_speed_mph);
    fprintf(fp, "    \"estimated_distance_miles_can\": %.6f,\n", s->can_distance_miles);
    fprintf(fp, "    \"avg_speed_mph\": %.3f,\n", avg(s->speed_sum, s->speed_samples));
    fprintf(fp, "    \"moving_ratio\": %.4f,\n", moving_ratio);
    fprintf(fp, "    \"max_accelerator_pct\": %.3f,\n", s->max_accel_pct);
    fprintf(fp, "    \"avg_accelerator_pct\": %.3f,\n", avg(s->accel_sum, s->accel_samples));
    fprintf(fp, "    \"brake_light_events\": %llu,\n", s->brake_events);
    fprintf(fp, "    \"max_brake_position_pct\": %.3f,\n", s->max_brake_pct);
    fprintf(fp, "    \"max_abs_steering_deg\": %.3f,\n", s->max_abs_steering_deg);
    fprintf(fp, "    \"avg_abs_steering_deg\": %.3f,\n", avg(s->steering_abs_sum, s->steering_samples));
    fprintf(fp, "    \"max_oil_temp_c\": %.3f,\n", s->max_oil_temp_c);
    fprintf(fp, "    \"max_coolant_temp_c\": %.3f,\n", s->max_coolant_temp_c);

    if (s->has_air_temp) {
        fprintf(fp, "    \"max_air_temp_c\": %.3f,\n", s->max_air_temp_c);
        fprintf(fp, "    \"min_air_temp_c\": %.3f,\n", s->min_air_temp_c);
    } else {
        fprintf(fp, "    \"max_air_temp_c\": null,\n");
        fprintf(fp, "    \"min_air_temp_c\": null,\n");
    }

    if (s->has_fuel) {
        fprintf(fp, "    \"start_fuel_pct\": %.3f,\n", s->start_fuel_pct);
        fprintf(fp, "    \"end_fuel_pct\": %.3f,\n", s->end_fuel_pct);
        fprintf(fp, "    \"fuel_delta_pct\": %.3f,\n", s->start_fuel_pct - s->end_fuel_pct);
    } else {
        fprintf(fp, "    \"start_fuel_pct\": null,\n");
        fprintf(fp, "    \"end_fuel_pct\": null,\n");
        fprintf(fp, "    \"fuel_delta_pct\": null,\n");
    }

    fprintf(fp, "    \"gear_samples\": {\n");
    fprintf(fp, "      \"neutral\": %llu,\n", s->gear_samples[0]);
    fprintf(fp, "      \"1\": %llu,\n", s->gear_samples[1]);
    fprintf(fp, "      \"2\": %llu,\n", s->gear_samples[2]);
    fprintf(fp, "      \"3\": %llu,\n", s->gear_samples[3]);
    fprintf(fp, "      \"4\": %llu,\n", s->gear_samples[4]);
    fprintf(fp, "      \"5\": %llu,\n", s->gear_samples[5]);
    fprintf(fp, "      \"6\": %llu\n", s->gear_samples[6]);
    fprintf(fp, "    },\n");

    fprintf(fp, "    \"clutch_depressed_samples\": %llu\n", s->clutch_depressed_samples);
    fprintf(fp, "  },\n");

    fprintf(fp, "  \"gnss\": {\n");
    fprintf(fp, "    \"available\": %s,\n", s->gnss_fixes > 0 ? "true" : "false");
    fprintf(fp, "    \"record_count\": %llu,\n", s->gnss_records);
    fprintf(fp, "    \"fix_count\": %llu,\n", s->gnss_fixes);

    if (s->gnss_fixes > 0) {
        fprintf(fp, "    \"distance_miles\": %.6f,\n", s->gnss_distance_miles);
        fprintf(fp, "    \"max_speed_mph\": %.3f,\n", s->max_gnss_speed_mph);
        fprintf(fp, "    \"avg_speed_mph\": %.3f,\n", avg(s->gnss_speed_sum, s->gnss_speed_samples));
        fprintf(fp, "    \"max_distance_from_start_miles\": %.6f,\n", s->max_gnss_distance_from_start_miles);
        fprintf(fp, "    \"start\": {\"lat\": %.8f, \"lon\": %.8f},\n", s->start_lat, s->start_lon);
        fprintf(fp, "    \"end\": {\"lat\": %.8f, \"lon\": %.8f},\n", s->end_lat, s->end_lon);
        fprintf(fp, "    \"bounds\": {\n");
        fprintf(fp, "      \"min_lat\": %.8f,\n", s->min_lat);
        fprintf(fp, "      \"max_lat\": %.8f,\n", s->max_lat);
        fprintf(fp, "      \"min_lon\": %.8f,\n", s->min_lon);
        fprintf(fp, "      \"max_lon\": %.8f\n", s->max_lon);
        fprintf(fp, "    }\n");
    } else {
        fprintf(fp, "    \"distance_miles\": null,\n");
        fprintf(fp, "    \"max_speed_mph\": null,\n");
        fprintf(fp, "    \"avg_speed_mph\": null,\n");
        fprintf(fp, "    \"max_distance_from_start_miles\": null,\n");
        fprintf(fp, "    \"start\": null,\n");
        fprintf(fp, "    \"end\": null,\n");
        fprintf(fp, "    \"bounds\": null\n");
    }

    fprintf(fp, "  }\n");
    fprintf(fp, "}\n");

    fclose(fp);
}

static void process_session(const SessionPath *sp) {
    char raw_path[PATH_MAX];
    char gnss_path[PATH_MAX];

    snprintf(raw_path, sizeof(raw_path), "%s/%s", sp->path, RAW_LOG_NAME);
    snprintf(gnss_path, sizeof(gnss_path), "%s/%s", sp->path, GNSS_LOG_NAME);

    if (!is_file(raw_path)) {
        #pragma omp critical
        {
            printf("Deleting  %-32s no raw_can.log\n", sp->name);
        }

        remove_tree(sp->path);
        return;
    }

    Summary s;
    init_summary(&s);

    parse_raw_can_file(raw_path, &s);

    if (is_file(gnss_path)) {
        parse_gnss_file(gnss_path, &s);
    }

    if (!session_is_useful(&s)) {
        #pragma omp critical
        {
            printf(
                "Deleting  %-32s useless | max_can=%.2f mph max_wheel=%.2f mph gnss_from_start=%.3f mi fixes=%llu\n",
                sp->name,
                s.max_speed_mph,
                s.max_wheel_speed_mph,
                s.max_gnss_distance_from_start_miles,
                s.gnss_fixes
            );
        }

        if (remove_tree(sp->path) != 0) {
            #pragma omp critical
            {
                fprintf(stderr, "Failed to delete %s\n", sp->path);
            }
        }

        return;
    }

    write_summary_json(sp->path, sp->name, &s);

    #pragma omp critical
    {
        printf(
            "Processed %-32s frames=%llu gnss=%s fixes=%llu max_can=%.2f mph gnss_from_start=%.2f mi\n",
            sp->name,
            s.can_frames,
            s.gnss_fixes > 0 ? "yes" : "no",
            s.gnss_fixes,
            s.max_speed_mph,
            s.max_gnss_distance_from_start_miles
        );
    }
}

static int collect_sessions(const char *base_dir, SessionPath **out) {
    DIR *dir = opendir(base_dir);

    if (!dir) {
        fprintf(stderr, "Could not open sessions directory: %s\n", base_dir);
        return 0;
    }

    int count = 0;
    int capacity = 128;

    SessionPath *sessions = malloc(sizeof(SessionPath) * capacity);

    if (!sessions) {
        closedir(dir);
        return 0;
    }

    struct dirent *entry;

    while ((entry = readdir(dir)) != NULL) {
        if (!starts_with(entry->d_name, "session_")) {
            continue;
        }

        char full_path[PATH_MAX];
        snprintf(full_path, sizeof(full_path), "%s/%s", base_dir, entry->d_name);

        if (!is_dir(full_path)) {
            continue;
        }

        if (count == capacity) {
            capacity *= 2;

            SessionPath *grown = realloc(sessions, sizeof(SessionPath) * capacity);

            if (!grown) {
                free(sessions);
                closedir(dir);
                return 0;
            }

            sessions = grown;
        }

        snprintf(sessions[count].path, sizeof(sessions[count].path), "%s", full_path);
        snprintf(sessions[count].name, sizeof(sessions[count].name), "%s", entry->d_name);

        count++;
    }

    closedir(dir);

    *out = sessions;
    return count;
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s /path/to/sessions\n", argv[0]);
        return 1;
    }

    SessionPath *sessions = NULL;
    int session_count = collect_sessions(argv[1], &sessions);

    if (session_count <= 0) {
        fprintf(stderr, "No session_* directories found in %s\n", argv[1]);
        free(sessions);
        return 1;
    }

    printf("Found %d sessions\n", session_count);
    printf("Using up to %d OpenMP threads\n", omp_get_max_threads());

    #pragma omp parallel for schedule(dynamic)
    for (int i = 0; i < session_count; i++) {
        process_session(&sessions[i]);
    }

    free(sessions);

    printf("Done.\n");
    return 0;
}