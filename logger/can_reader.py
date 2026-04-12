import time
from dataclasses import dataclass
import can

# class for each can frame which includes the time, an id, and the data
@dataclass
class CanFrame:
    wall_time: float
    arb_id: int
    dlc: int
    data: bytes

# can reader class instanciated above
class CanReader:
    # constructor to set the bus interface to socketcan
    def __init__(self, channel: str):
        self.bus = can.interface.Bus(channel=channel, interface="socketcan")
    # when the function recieves frames then return a can frame
    def recv(self, timeout: float = 1.0) -> CanFrame | None:
        msg = self.bus.recv(timeout=timeout)
        if msg is None:
            return None
        # return a can frame with all the params
        return CanFrame(wall_time=time.time(), arb_id=msg.arbitration_id, dlc=msg.dlc, data=bytes(msg.data))
