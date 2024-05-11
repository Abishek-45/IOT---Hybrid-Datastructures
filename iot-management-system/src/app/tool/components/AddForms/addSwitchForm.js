import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function addSwitchForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  switchFormData,
  setSwitchFormData,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
 
    if (!switchFormData.switchName) {
      newErrors.switchName = "Switch Name is required";
    }
    if (!switchFormData.floorNo && switchFormData.floorNo !== 0) {
      newErrors.floorNo = "Floor Number is required";
    }
    if (!switchFormData.roomName){
      newErrors.roomName = "Room Name is required";
    }
    if (!switchFormData.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    if (!switchFormData.networkip) {
      newErrors.networkip = "Network IP is required";
    }
  
    if (!Number.isInteger(Number(switchFormData.floorNo))) {
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
        <DialogTitle className="p-5  px-14">Add Switch</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div className="flex flex-col gap-3">
              <div>
                <label for="switchName">Switch Name</label>
                <br></br>
                <input
                  type="text"
                  id="switchName"
                  name="switchName"
                  value={switchFormData.switchName}
                  onChange={(e) =>
                    setSwitchFormData((prevState) => ({
                      ...prevState,
                      switchName: e.target.value,
                    }))
                  }
                  required
                  className="border-[1px] border-[#08134e] rounded-md my-2"
                />
                {errors.switchName && (
                  <span className="text-red-500 text-[14px]">{errors.switchName}</span>
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
                  value={switchFormData.floorNo}
                  onChange={(e) =>
                    setSwitchFormData((prevState) => ({
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
                  value={switchFormData.roomName}
                  onChange={(e) =>
                    setSwitchFormData((prevState) => ({
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
              <div className="flex flex-col gap-3">
              <div>
                <label for="networkip">Network IP</label>
                <br></br>
                <input
                  type="text"
                  id="networkip"
                  name="networkip"
                  value={switchFormData.networkip}
                  onChange={(e) =>
                    setSwitchFormData((prevState) => ({
                      ...prevState,
                      networkip: e.target.value,
                    }))
                  }
                  required
                  className="border-[1px] border-[#08134e] rounded-md my-2"
                />
                {errors.networkip && (
                  <span className="text-red-500 text-[14px]">{errors.networkip}</span>
                )}
              </div>
              <div>
                <label for="parentname">Parent Name</label>
                <br />
                <input
                  type="text"
                  id="parentname"
                  name="parentname"
                  value={switchFormData.parentName}
                  onChange={(e) =>
                    setSwitchFormData((prevState) => ({
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
            </div>
          </DialogContentText>
        </DialogContent>
      </div>
    </Dialog>
  );
}
