// tools/summarize_sessions.c
// Build:
//   gcc -O3 -fopenmp tools/summarize_sessions.c -lm -o tools/summarize_sessions
//
// Run:
//   ./tools/summarize_sessions /home/aditya/GR86P/sessions

#define _GNU_SOURCE

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <dirent.h>
#include <sys/stat.h>
#include <math.h>
#include <omp.h>

#ifndef PATH_MAX
#define PATH_MAX 4096
#endif

typedef struct {
    char path[PATH_MAX];
    char name[512];
} SessionPath;

typedef struct {
    unsigned long long can_frame_count;
    unsigned long long gnss_record_count;
    unsigned long long gnss_fix_count;

    double can_start_time;
    double can_end_time;
    double gnss_start_time;
    double gnss_end_time;

    int has_can;
    int has_gnss;

    double max_rpm;
    double max_speed_mph;
    double avg_speed_sum;
    unsigned long long speed_samples;
    unsigned long long moving_samples;

    double max_accel_pct;
    double accel_sum;
    unsigned long long accel_samples;

    unsigned long long brake_light_events;
    int last_brake_light;

    double max_brake_position_pct;

    double max_abs_steering_deg;
    double steering_abs_sum;
    unsigned long long steering_samples;

    double max_oil_temp_c;
    double max_coolant_temp_c;
    double max_air_temp_c;
    double min_air_temp_c;

    double start_fuel_pct;
    double end_fuel_pct;
    int has_fuel;

    unsigned long long gear_samples[7]; // 0=N, 1-6 gears
    unsigned long long clutch_depressed_samples;

    double gnss_distance_miles;
    double max_gnss_speed_mph;
    double gnss_speed_sum;
    unsigned long long gnss_speed_samples;

    double min_lat, max_lat, min_lon, max_lon;
    double start_lat, start_lon;
    double end_lat, end_lon;
    int has_prev_gnss_point;
    double prev_lat, prev_lon;
} Summary;

static int starts_with(const char *s, const char *prefix) {
    return strncmp(s, prefix, strlen(prefix)) == 0;
}

static int is_directory(const char *path) {
    struct stat st;
    if (stat(path, &st) != 0) return 0;
    return S_ISDIR(st.st_mode);
}

static int file_exists(const char *path) {
    struct stat st;
    return stat(path, &st) == 0 && S_ISREG(st.st_mode);
}

static uint32_t bits_to_uint_le(const uint8_t *raw, int start_bit, int length) {
    uint32_t value = 0;

    for (int i = 0; i < length; i++) {
        int bit_index = start_bit + i;
        int byte_index = bit_index / 8;
        int bit_in_byte = bit_index % 8;

        if (raw[byte_index] & (1u << bit_in_byte)) {
            value |= (1u << i);
        }
    }

    return value;
}

static int16_t bytes_to_int16_le(const uint8_t *raw, int start_byte) {
    return (int16_t)((uint16_t)raw[start_byte] | ((uint16_t)raw[start_byte + 1] << 8));
}

static double haversine_miles(double lat1, double lon1, double lat2, double lon2) {
    const double R = 3958.7613; // Earth radius in miles
    const double deg_to_rad = M_PI / 180.0;

    double p1 = lat1 * deg_to_rad;
    double p2 = lat2 * deg_to_rad;
    double dp = (lat2 - lat1) * deg_to_rad;
    double dl = (lon2 - lon1) * deg_to_rad;

    double a = sin(dp / 2.0) * sin(dp / 2.0) +
               cos(p1) * cos(p2) *
               sin(dl / 2.0) * sin(dl / 2.0);

    double c = 2.0 * atan2(sqrt(a), sqrt(1.0 - a));
    return R * c;
}

static void init_summary(Summary *s) {
    memset(s, 0, sizeof(Summary));

    s->can_start_time = 0.0;
    s->can_end_time = 0.0;
    s->gnss_start_time = 0.0;
    s->gnss_end_time = 0.0;

    s->max_air_temp_c = -9999.0;
    s->min_air_temp_c = 9999.0;

    s->min_lat = 9999.0;
    s->max_lat = -9999.0;
    s->min_lon = 9999.0;
    s->max_lon = -9999.0;

    s->last_brake_light = 0;
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

    if (n < 4) return;

    unsigned int arb_id = 0;
    sscanf(id_str, "%x", &arb_id);

    uint8_t raw[8] = {0};
    for (int i = 0; i < dlc && i < 8; i++) {
        raw[i] = (uint8_t)b[i];
    }

    if (!s->has_can) {
        s->can_start_time = ts;
        s->has_can = 1;
    }

    s->can_end_time = ts;
    s->can_frame_count++;

    switch (arb_id) {
        case 0x040: {
            // Engine RPM: bitsToUIntLe(raw, 16, 14)
            double rpm = (double)bits_to_uint_le(raw, 16, 14);
            if (rpm > s->max_rpm) s->max_rpm = rpm;

            // Accelerator position: byte E / 2.55
            // In RaceChrono naming A-H, E is raw[4].
            double accel = raw[4] / 2.55;
            if (accel > s->max_accel_pct) s->max_accel_pct = accel;
            s->accel_sum += accel;
            s->accel_samples++;
            break;
        }

        case 0x138: {
            // Steering angle: bytesToIntLe(raw, 2, 2) * -0.1
            double steering = bytes_to_int16_le(raw, 2) * -0.1;
            double abs_steering = fabs(steering);

            if (abs_steering > s->max_abs_steering_deg) {
                s->max_abs_steering_deg = abs_steering;
            }

            s->steering_abs_sum += abs_steering;
            s->steering_samples++;
            break;
        }

        case 0x139: {
            // Speed: bitsToUIntLe(raw, 16, 13) * 0.015694
            double speed = bits_to_uint_le(raw, 16, 13) * 0.015694;

            if (speed > s->max_speed_mph) s->max_speed_mph = speed;

            s->avg_speed_sum += speed;
            s->speed_samples++;

            if (speed > 1.0) {
                s->moving_samples++;
            }

            // Brake lights switch: E & 0x4
            // E is raw[4].
            int brake_light = (raw[4] & 0x04) ? 1 : 0;

            if (brake_light && !s->last_brake_light) {
                s->brake_light_events++;
            }

            s->last_brake_light = brake_light;

            // Brake position approximation: min(F / 0.7, 100)
            // F is raw[5].
            double brake_pos = raw[5] / 0.7;
            if (brake_pos > 100.0) brake_pos = 100.0;
            if (brake_pos > s->max_brake_position_pct) {
                s->max_brake_position_pct = brake_pos;
            }

            break;
        }

        case 0x241: {
            // Gear: bitsToUIntLe(raw, 35, 3)
            // 0=N, 1-6 gears
            unsigned int gear = bits_to_uint_le(raw, 35, 3);
            if (gear <= 6) {
                s->gear_samples[gear]++;
            }

            // Clutch position: (F & 0x80) / 1.28
            // F is raw[5]. If high bit set, clutch is depressed.
            if (raw[5] & 0x80) {
                s->clutch_depressed_samples++;
            }

            break;
        }

        case 0x345: {
            // Engine oil temperature: D - 40
            // Coolant temperature: E - 40
            // D=raw[3], E=raw[4]
            double oil_c = raw[3] - 40.0;
            double coolant_c = raw[4] - 40.0;

            if (oil_c > s->max_oil_temp_c) s->max_oil_temp_c = oil_c;
            if (coolant_c > s->max_coolant_temp_c) s->max_coolant_temp_c = coolant_c;
            break;
        }

        case 0x390: {
            // Air temperature: E / 2 - 40
            double air_c = raw[4] / 2.0 - 40.0;

            if (air_c > s->max_air_temp_c) s->max_air_temp_c = air_c;
            if (air_c < s->min_air_temp_c) s->min_air_temp_c = air_c;
            break;
        }

        case 0x393: {
            // Fuel level: 100 - (bitsToUIntLe(raw, 32, 10) / 10.23)
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
    if (!fp) return;

    char line[512];

    while (fgets(line, sizeof(line), fp)) {
        parse_can_line(line, s);
    }

    fclose(fp);
}

static int extract_json_double(const char *line, const char *key, double *out) {
    char pattern[64];
    snprintf(pattern, sizeof(pattern), "\"%s\":", key);

    char *p = strstr((char *)line, pattern);
    if (!p) return 0;

    p += strlen(pattern);

    while (*p == ' ' || *p == '\t') p++;

    if (strncmp(p, "null", 4) == 0) return 0;

    char *end = NULL;
    double val = strtod(p, &end);

    if (end == p) return 0;

    *out = val;
    return 1;
}

static int extract_json_bool_true(const char *line, const char *key) {
    char pattern[64];
    snprintf(pattern, sizeof(pattern), "\"%s\": true", key);
    return strstr(line, pattern) != NULL;
}

static void parse_gnss_line(const char *line, Summary *s) {
    double wall_time;
    if (!extract_json_double(line, "wall_time", &wall_time)) {
        return;
    }

    s->gnss_record_count++;

    if (!s->has_gnss) {
        s->gnss_start_time = wall_time;
        s->has_gnss = 1;
    }

    s->gnss_end_time = wall_time;

    // Only count records with parsed lat/lon.
    double lat, lon;
    int has_lat = extract_json_double(line, "lat", &lat);
    int has_lon = extract_json_double(line, "lon", &lon);

    if (!has_lat || !has_lon) {
        return;
    }

    // Your logger writes both RMC and GGA records.
    // Some may be repeated at similar timestamps, but this is fine for a first summary.
    s->gnss_fix_count++;

    if (s->gnss_fix_count == 1) {
        s->start_lat = lat;
        s->start_lon = lon;
    }

    s->end_lat = lat;
    s->end_lon = lon;

    if (lat < s->min_lat) s->min_lat = lat;
    if (lat > s->max_lat) s->max_lat = lat;
    if (lon < s->min_lon) s->min_lon = lon;
    if (lon > s->max_lon) s->max_lon = lon;

    if (s->has_prev_gnss_point) {
        double step = haversine_miles(s->prev_lat, s->prev_lon, lat, lon);

        // Basic sanity filter to ignore GPS jumps.
        // If a single GNSS step is over 0.25 miles, skip it.
        if (step >= 0.0 && step < 0.25) {
            s->gnss_distance_miles += step;
        }
    }

    s->prev_lat = lat;
    s->prev_lon = lon;
    s->has_prev_gnss_point = 1;

    double gps_speed;
    if (extract_json_double(line, "speed_mph", &gps_speed)) {
        if (gps_speed > s->max_gnss_speed_mph) {
            s->max_gnss_speed_mph = gps_speed;
        }

        s->gnss_speed_sum += gps_speed;
        s->gnss_speed_samples++;
    }
}

static void parse_gnss_file(const char *path, Summary *s) {
    FILE *fp = fopen(path, "r");
    if (!fp) return;

    char line[2048];

    while (fgets(line, sizeof(line), fp)) {
        parse_gnss_line(line, s);
    }

    fclose(fp);
}

static double safe_avg(double sum, unsigned long long count) {
    if (count == 0) return 0.0;
    return sum / (double)count;
}

static void write_summary_json(const char *session_dir, const char *session_name, const Summary *s) {
    char out_path[PATH_MAX];
    snprintf(out_path, sizeof(out_path), "%s/summary.json", session_dir);

    FILE *fp = fopen(out_path, "w");
    if (!fp) {
        fprintf(stderr, "Failed to write %s\n", out_path);
        return;
    }

    double duration_sec = 0.0;
    if (s->has_can && s->can_end_time >= s->can_start_time) {
        duration_sec = s->can_end_time - s->can_start_time;
    }

    double moving_ratio = 0.0;
    if (s->speed_samples > 0) {
        moving_ratio = (double)s->moving_samples / (double)s->speed_samples;
    }

    double avg_speed = safe_avg(s->avg_speed_sum, s->speed_samples);
    double avg_accel = safe_avg(s->accel_sum, s->accel_samples);
    double avg_abs_steering = safe_avg(s->steering_abs_sum, s->steering_samples);
    double avg_gnss_speed = safe_avg(s->gnss_speed_sum, s->gnss_speed_samples);

    const char *season = s->has_gnss ? "season_1" : "preseason";

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
    fprintf(fp, "    \"duration_sec\": %.3f\n", duration_sec);
    fprintf(fp, "  },\n");

    fprintf(fp, "  \"can\": {\n");
    fprintf(fp, "    \"frame_count\": %llu,\n", s->can_frame_count);
    fprintf(fp, "    \"max_rpm\": %.1f,\n", s->max_rpm);
    fprintf(fp, "    \"max_speed_mph\": %.3f,\n", s->max_speed_mph);
    fprintf(fp, "    \"avg_speed_mph\": %.3f,\n", avg_speed);
    fprintf(fp, "    \"moving_ratio\": %.4f,\n", moving_ratio);
    fprintf(fp, "    \"max_accelerator_pct\": %.3f,\n", s->max_accel_pct);
    fprintf(fp, "    \"avg_accelerator_pct\": %.3f,\n", avg_accel);
    fprintf(fp, "    \"brake_light_events\": %llu,\n", s->brake_light_events);
    fprintf(fp, "    \"max_brake_position_pct\": %.3f,\n", s->max_brake_position_pct);
    fprintf(fp, "    \"max_abs_steering_deg\": %.3f,\n", s->max_abs_steering_deg);
    fprintf(fp, "    \"avg_abs_steering_deg\": %.3f,\n", avg_abs_steering);
    fprintf(fp, "    \"max_oil_temp_c\": %.3f,\n", s->max_oil_temp_c);
    fprintf(fp, "    \"max_coolant_temp_c\": %.3f,\n", s->max_coolant_temp_c);

    if (s->max_air_temp_c > -9000.0) {
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
    fprintf(fp, "    \"available\": %s,\n", s->has_gnss ? "true" : "false");
    fprintf(fp, "    \"record_count\": %llu,\n", s->gnss_record_count);
    fprintf(fp, "    \"fix_count\": %llu,\n", s->gnss_fix_count);

    if (s->has_gnss && s->gnss_fix_count > 0) {
        fprintf(fp, "    \"distance_miles\": %.6f,\n", s->gnss_distance_miles);
        fprintf(fp, "    \"max_speed_mph\": %.3f,\n", s->max_gnss_speed_mph);
        fprintf(fp, "    \"avg_speed_mph\": %.3f,\n", avg_gnss_speed);

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

    snprintf(raw_path, sizeof(raw_path), "%s/raw_can.log", sp->path);
    snprintf(gnss_path, sizeof(gnss_path), "%s/gnss.log", sp->path);

    if (!file_exists(raw_path)) {
        fprintf(stderr, "Skipping %s: no raw_can.log\n", sp->name);
        return;
    }

    Summary s;
    init_summary(&s);

    parse_raw_can_file(raw_path, &s);

    if (file_exists(gnss_path)) {
        parse_gnss_file(gnss_path, &s);
    }

    write_summary_json(sp->path, sp->name, &s);

    printf("Processed %-32s CAN=%llu GNSS=%s fixes=%llu\n",
           sp->name,
           s.can_frame_count,
           s.has_gnss ? "yes" : "no",
           s.gnss_fix_count);
}

static int collect_sessions(const char *base_dir, SessionPath **out_sessions) {
    DIR *dir = opendir(base_dir);
    if (!dir) {
        fprintf(stderr, "Could not open sessions directory: %s\n", base_dir);
        return 0;
    }

    int capacity = 128;
    int count = 0;

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

        if (!is_directory(full_path)) {
            continue;
        }

        if (count >= capacity) {
            capacity *= 2;
            SessionPath *new_sessions = realloc(sessions, sizeof(SessionPath) * capacity);
            if (!new_sessions) {
                free(sessions);
                closedir(dir);
                return 0;
            }
            sessions = new_sessions;
        }

        snprintf(sessions[count].path, sizeof(sessions[count].path), "%s", full_path);
        snprintf(sessions[count].name, sizeof(sessions[count].name), "%s", entry->d_name);
        count++;
    }

    closedir(dir);

    *out_sessions = sessions;
    return count;
}

int main(int argc, char **argv) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s /path/to/sessions\n", argv[0]);
        return 1;
    }

    const char *base_dir = argv[1];

    SessionPath *sessions = NULL;
    int session_count = collect_sessions(base_dir, &sessions);

    if (session_count <= 0) {
        fprintf(stderr, "No session_* directories found in %s\n", base_dir);
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
