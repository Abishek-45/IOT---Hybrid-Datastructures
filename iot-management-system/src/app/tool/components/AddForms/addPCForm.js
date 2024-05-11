import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function addPCForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  pcFormData,
  setPCFormData,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
 
    if (!pcFormData.PCName) {
      newErrors.PCName = "PC Name is required";
    }
    if (!pcFormData.floorNo && pcFormData.floorNo !== 0) {
      newErrors.floorNo = "Floor Number is required";
    }
    if (!pcFormData.roomName){
      newErrors.roomName = "Room Name is required";
    }
    if (!pcFormData.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    if (!pcFormData.ip) {
      newErrors.ip = "IP is required";
    }
  
    if (!Number.isInteger(Number(pcFormData.floorNo))) {
      newErrors.floorNo = "Floor Number must be an integer";
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
      <DialogTitle className="p-5  px-14">Add PC</DialogTitle>
      <DialogContent className="my-2">
        <DialogContentText className="pr-14 pl-8">
          <div className="flex flex-col gap-3">
            <div>
              <label for="pcName">PC Name</label>
              <br></br>
              <input
                type="text"
                id="pcName"
                name="pcName"
                value={pcFormData.PCName}
                onChange={(e) =>
                  setPCFormData((prevState) => ({
                    ...prevState,
                    PCName: e.target.value,
                  }))
                }
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
              {errors.PCName && (
                  <span className="text-red-500 text-[14px]">{errors.PCName}</span>
                )}
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
                value={pcFormData.floorNo}
                onChange={(e) =>
                  setPCFormData((prevState) => ({
                    ...prevState,
                    floorNo: e.target.value,
                  }))
                }
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
              {errors.floorNo && (
                  <span className="text-red-500 text-[14px]">{errors.floorNo}</span>
                )}
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
                value={pcFormData.roomName}
                onChange={(e) =>
                  setPCFormData((prevState) => ({
                    ...prevState,
                    roomName: e.target.value,
                  }))
                }
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
              {errors.roomName && (
                  <span className="text-red-500 text-[14px]">{errors.roomName}</span>
                )}
            </div>

            <div>
              <label for="ip" className="">
                IP Address
              </label>
              <br></br>
              <input
                type="text"
                id="ip"
                name="ip"
                value={pcFormData.ip}
                onChange={(e) =>
                  setPCFormData((prevState) => ({
                    ...prevState,
                    ip: e.target.value,
                  }))
                }
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
              {errors.ip && (
                  <span className="text-red-500 text-[14px]">{errors.ip}</span>
                )}
            </div>

            <div>
              <label for="parentname">Parent Name</label>
              <br></br>
              <input
                type="text"
                id="parentname"
                name="parentname"
                value={pcFormData.parentName}
                onChange={(e) =>
                  setPCFormData((prevState) => ({
                    ...prevState,
                    parentName: e.target.value,
                  }))
                }
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
              {errors.parentName && (
                  <span className="text-red-500 text-[14px]">{errors.parentName}</span>
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
