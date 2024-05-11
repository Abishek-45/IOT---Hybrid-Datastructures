import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function addIoTForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  deviceFormData,
  setDeviceFormData,
}) {
  return (
    <Dialog open={controlVariable} onClose={handleCloseFunction} className="">
          <div className="bg-[#CADCFC] ">
            <DialogTitle className="p-5  px-14">Add Device</DialogTitle>
            <DialogContent className="my-2">
              <DialogContentText className="pr-14 pl-8">
                <div className="flex flex-col gap-3">
                  <div>
                    <label for="DeviceName">Device Name</label>
                    <br></br>
                    <input
                      type="text"
                      id="DeviceName"
                      name="DeviceName"
                      value={deviceFormData.deviceName}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          deviceName: e.target.value,
                        }))
                      }
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>
                  <div>
                    <label for="floorNo" className="">
                      Floor Number
                    </label>
                    <br></br>
                    <input
                      type="number"
                      id="floorNo"
                      name="floorNo"
                      value={deviceFormData.floorNo}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          floorNo: e.target.value,
                        }))
                      }
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="roomName" className="">
                      Room Name
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="roomName"
                      name="roomName"
                      value={deviceFormData.roomName}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          roomName: e.target.value,
                        }))
                      }
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="SSID" className="">
                      SSID
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="SSID"
                      name="SSID"
                      value={deviceFormData.SSID}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          SSID: e.target.value,
                        }))
                      }
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="passwd" className="">
                      PassWord
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="passwd"
                      name="passwd"
                      value={deviceFormData.passwd}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          passwd: e.target.value,
                        }))
                      }
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="parentname">Parent Name</label>
                    <br></br>
                    <input
                      type="text"
                      id="parentname"
                      name="parentname"
                      required
                      value={deviceFormData.parentName}
                      onChange={(e) =>
                        setDeviceFormData((prevState) => ({
                          ...prevState,
                          parentName: e.target.value,
                        }))
                      }
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-4 mt-5">
                  <button onClick={handleSubmitFunction}>Submit</button>
                  <button onClick={handleCloseFunction}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
  );
}
