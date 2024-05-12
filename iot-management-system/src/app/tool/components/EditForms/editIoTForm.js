import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function EditIoTForm({
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
      newErrors.passwd = "Password is required";
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
      <div className="bg-[#CADCFC]">
        <DialogTitle className="p-5  px-14">Edit Device</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="deviceName">Current Device Name</label>
                <br />
                <input
                  type="text"
                  id="deviceName"
                  name="deviceName"
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
                <label htmlFor="parentName">Parent Name</label>
                <br />
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
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
              <div>
                <label htmlFor="newDeviceName">New Device Name</label>
                <br />
                <input
                  type="text"
                  id="newDeviceName"
                  name="newDeviceName"
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
                <label htmlFor="SSID" className="">
                  New SSID
                </label>
                <br />
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
                <label htmlFor="passwd" className="">
                  Password
                </label>
                <br />
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
            </div>
            <div className="flex flex-row justify-end gap-4 mt-5">
              <button onClick={handleFormSubmit}>Submit</button>
              <button onClick={handleCloseFunction}>Cancel</button>
            </div>
          </DialogContentText>
        </DialogContent>
      </div>
    </Dialog>
  );
}
