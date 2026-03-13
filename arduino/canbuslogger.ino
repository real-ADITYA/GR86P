#include <SPI.h>
#include <mcp_can.h>

const int SPI_CS_PIN = 10;
MCP_CAN CAN(SPI_CS_PIN);

void setup() {
  Serial.begin(115200);

  // Wait for serial (helps debugging on some boards)
  while (!Serial);

  // Initialize CAN bus
  if (CAN.begin(MCP_ANY, CAN_500KBPS, MCP_8MHZ) == CAN_OK) {
    Serial.println("CAN INIT OK");
  } else {
    Serial.println("CAN INIT FAIL");
    while (1);
  }

  // start listening to the bus
  CAN.setMode(MCP_NORMAL);
}

void loop() {

  if (CAN_MSGAVAIL == CAN.checkReceive()) {

    unsigned long canId;
    unsigned char len;
    unsigned char buf[8];

    CAN.readMsgBuf(&canId, &len, buf);

    // Print CAN ID
    Serial.print(canId);
    Serial.print(",");

    // Print DLC
    Serial.print(len);

    // Print data bytes
    for (int i = 0; i < len; i++) {
      Serial.print(",");

      if (buf[i] < 0x10) Serial.print("0");
      Serial.print(buf[i], HEX);
    }

    Serial.println();
  }
}