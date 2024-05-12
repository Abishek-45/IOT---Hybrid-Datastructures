import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function addIoTForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  deviceFormData,
  setDeviceFormData,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!deviceFormData.deviceName) {
      newErrors.deviceName = "Device Name is required";
    }
    if (!deviceFormData.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    if (!deviceFormData.SSID) {
      newErrors.SSID = "SSID is required";
    }

    if (!deviceFormData.passwd) {
      newErrors.passwd = "passwd is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      handleSubmitFunction();
    }
  };
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
                      className="border-[1px] border-[#08134e] rounded-md block pl-2"
                    />
                    {errors.deviceName && (
                  <span className="text-red-500 text-[14px]">
                    {errors.deviceName}
                  </span>
                )}
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
                      className="border-[1px] border-[#08134e] rounded-md block pl-2"
                    />
                    {errors.SSID && (
                  <span className="text-red-500 text-[14px]">
                    {errors.SSID}
                  </span>
                )}
                  </div>

                  <div>
                    <label for="passwd" className="">
                      Password
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
                      className="border-[1px] border-[#08134e] rounded-md block pl-2"
                    />
                    {errors.passwd && (
                  <span className="text-red-500 text-[14px]">
                    {errors.passwd}
                  </span>
                )}
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
                      className="border-[1px] border-[#08134e] rounded-md block pl-2"
                    />
                    {errors.parentName && (
                  <span className="text-red-500 text-[14px]">
                    {errors.parentName}
                  </span>
                )}
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-4 mt-5">
                  <button onClick={handleFormSubmit} className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] transition duration-300 hover:scale-105 active:opacity-60 text-white h-[30px] w-[80px] rounded-2xl">Submit</button>
                  <button onClick={handleCloseFunction} className="bg-[#9FBEF7] h-[30px] w-[80px] border-2 border-[#03379e] transition duration-300 hover:scale-105 active:opacity-60 text-[#03379e] rounded-2xl">Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
  );
}
