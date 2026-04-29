# GR86P

GR86P is my personal vehicle telemetry project built around my 2026 Toyota GR86. The goal is to turn real CAN bus and GNSS data into a system that can log, replay, analyze, and eventually gamify my drives.

This project is split into two major parts:

- **Part 1:** live data capture on a Raspberry Pi in the car
- **Part 2:** post-drive analysis, replay, dashboards, scoring, and progression

---

## Project Goals

I wanted to build something that combines several things I care about:

- cars and driving
- low-level systems work
- data analysis
- UI and dashboard design
- parallel computing
- rule-based intelligence

Instead of making just a logger, the long-term goal is to build a full driving intelligence system that can:

- record CAN bus sessions
- record GNSS route data
- replay drives
- summarize each drive
- score driving behavior
- track progress over time
- eventually support seasons, objectives, badges, and road discovery

---

## What I Have Built So Far

### Part 1: Session Logger

The Raspberry Pi powers on with the car and loses power immediately when the car turns off, so the logger is designed around **sessions** rather than traditional graceful trip shutdown.

Each time the car powers on, the Pi creates a new session folder and logs:

- raw CAN data
- periodic checkpoint data
- GNSS data when available

Current Part 1 components include:

- CAN reader for live SocketCAN frames
- per-session folder creation
- append-only raw CAN logging
- periodic checkpoint saving
- GNSS logging support
- startup automation with a shell script and systemd service

This gives me durable telemetry capture even though the Pi does not shut down cleanly.

---

### Replay and Visualization Tools

I also added replay tools that take logged session data and turn it into something more usable.

So far, I have worked on:

- CAN decoding for selected signals
- replay tools for reviewing logged sessions
- map-based replay using GNSS
- HTML-based replay output

This moves the project beyond raw logging and toward actual drive playback and review.

---

### Session Summarization

I started building an offline summarization pipeline that processes saved sessions and creates a cleaner summary for each drive.

The summarizer is meant to extract useful per-session metrics such as:

- frame counts
- max RPM
- max speed
- average GNSS speed
- distance from GNSS
- gear and clutch-related stats
- session metadata

This is the foundation for the analytics and scoring side of the project.

---

## Current Project Structure

The repo is currently organized around a few main components:

- `logger/` — live session logging on the Raspberry Pi
- `replaytools/` — replay and visualization tools
- `summarize/` — offline session analysis and summary generation
- startup scripts and service files for boot-time logging

---

## Design Philosophy

A big part of this project has been keeping things modular and practical.

### Session-based logging
Because the Pi loses power instantly with the car, each ignition cycle is treated as a session.

### Raw data first
The raw CAN log is the source of truth. Everything else is derived from it.

### Build in layers
The project is being built in this order:

1. reliable data capture
2. replay and inspection
3. summary metrics
4. dashboards and scoring
5. progression and gamification

---

## Planned Part 2

Part 2 is where GR86P becomes a true post-drive intelligence system.

The main plan is to load all session folders, decode the usable CAN data, and generate per-drive summaries and dashboards.

### Planned Part 2 features

- session browser
- per-drive summary pages
- replay views
- trend charts across many drives
- scoring and feedback
- badges and progression
- eventually seasons and objectives

### Example per-drive stats I want

- average speed
- max speed
- average RPM
- max RPM
- idle time
- moving time
- smoothness of speed
- throttle smoothness
- brake smoothness
- shift count
- shift quality
- rev-match quality
- drive personality classification

For the manual-transmission side, I especially want to analyze:

- upshifts
- downshifts
- clutch timing
- rev-match accuracy
- rough vs smooth re-engagement

That is one of the most interesting parts of the project to me.

---

## GNSS Plans

GNSS is being added as an important extension to the project.

With GNSS, I want to support:

- live map display during replay or live viewing
- route history per drive
- route visualization in Part 2
- road discovery tracking
- future exploration-based progression

I did not have GNSS for the first ~10,000 miles of the car, so I currently think of that period as a kind of **pre-season**. GNSS-based progression would begin after that point.

---

## Planned Seasons / Gamification

A major long-term goal is to make the data fun, not just technical.

I want Part 2 to eventually behave like a driving progression system, with things like:

- XP per drive
- badges
- objectives
- drive classifications
- streaks
- season progress
- road discovery progression once GNSS is fully integrated

Example ideas include:

- rewarding new roads driven
- rewarding clean or smooth drives
- tracking best rev-matched shifts
- tracking drive quality over time
- building “Season 1” starting at 10,000 miles

---

## How My Classes Connect to This Project

This project also serves as a way to combine what I have learned across several computer science courses.

### CMSC416 — Parallel Computing
Used for offline session summarization and high-speed batch analysis of raw telemetry data.

### CMSC434 — HCI
Used for the live viewer, replay UI, and post-drive dashboard design.

### CMSC320 — Intro to Data Science
Used for per-drive metrics, trends, analysis, charts, and conclusions from vehicle data.

### CMSC335 — Web Application Development
Used for the dashboard, replay pages, session browser, and progression interface.

### CMSC414 — Computer and Network Security
Used for secure telemetry handling, log integrity, privacy, and eventual cloud sync/access control.

### CMSC421 — GOFAI
Used for rule-based drive classification, scoring, shift analysis, badges, and objective logic.

---

## Long-Term Vision

The long-term vision for GR86P is:

- a Raspberry Pi in-car session logger
- a replayable drive archive
- an analysis engine that turns raw telemetry into usable summaries
- a dashboard that explains each drive
- a progression system built around real ownership and real driving

In short, I want this project to become a personal driving intelligence system built specifically around my GR86.

---

## Status

This project is actively evolving. The current focus is on:

- stable session logging
- improving replay
- improving decoding coverage
- generating better summaries
- preparing for a more complete Part 2 dashboard and scoring system
