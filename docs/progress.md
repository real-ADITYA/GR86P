# GR86P — Project Evolution

## 1. Arduino CAN Prototype

I began with an **Arduino and 8 MHz MCP2515**, connected to the GR86 through the unused DCM connector. After solving wiring, COM-port, library, clock, and 500 kbps bitrate issues, I captured real CAN frames.

**Learned:** SPI wiring, Arduino uploads, CAN basics, and hardware-first troubleshooting.

## 2. Moving to Raspberry Pi

The successful prototype gave me confidence to buy a **Raspberry Pi** and turn the experiment into an onboard logger using SocketCAN and Python.

**Learned:** Linux, `can0`, Python dependencies, boot services, permissions, and persistent session logging.

## 3. Learning Remote Access

Direct Ethernet SSH caused “network unreachable” problems until I understood addresses, subnets, and how the Mac and Pi must share a small local network.

**Learned:** SSH, static IPs, network interfaces, and remote Pi administration.

## 4. Adding GNSS

I added a **GNSS receiver** so every drive could include position, speed, heading, and reliable UTC date/time. Saving raw NMEA proved valuable because information I had not initially parsed could still be recovered later.

**Learned:** serial devices, NMEA messages, timestamps, and the value of preserving raw data.

## 5. Adding the Display

I added a **1280×400 in-car display** for live speed, RPM, gear, temperatures, fuel, G-forces, and mapping. Blank/static screens, incorrect units, noisy signals, startup behavior, and limited power exposed the difference between a prototype and a dependable in-car system.

**Learned:** live UI updates, signal smoothing, unit conversion, automatic startup, and power budgeting.

## 6. Refactoring GR86P

The project evolved into a simple parent structure:

- **86LOG** records raw CAN and GNSS.
- **86DASH** presents live information.
- Processing, history, AI, and cloud features remain separate future consumers.

**Core lesson:** keep collection boring and reliable. Record first, interpret later, and never make display, processing, or cloud features part of the logging critical path.
