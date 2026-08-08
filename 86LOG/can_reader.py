import time
from dataclasses import dataclass
import can


@dataclass
class CanFrame:
    monotonic_time: float
    arb_id: int
    dlc: int
    data: bytes


class CanReader:
    # init the socketcan interface
    def __init__(self, channel):
        self.bus = can.interface.Bus(channel=channel, interface="socketcan")

    # receive CAN frame from the bus
    def recv(self, timeout=1.0):
        message = self.bus.recv(timeout=timeout)

        if message is None:
            return None

        # construct CAN frame
        return CanFrame(
            monotonic_time=time.monotonic(),
            arb_id=message.arbitration_id,
            dlc=message.dlc,
            data=bytes(message.data),
        )

    # shutdown when done
    def close(self):
        self.bus.shutdown()