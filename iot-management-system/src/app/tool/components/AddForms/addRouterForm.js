import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddRouterForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  routerFormData,
  setRouterFormData,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
 
    if (!routerFormData.routerName) {
      newErrors.routerName = "Router Name is required";
    }
    if (!routerFormData.floorNo && routerFormData.floorNo !== 0) {
      newErrors.floorNo = "Floor Number is required";
    }
    if (!routerFormData.parentName) {
      newErrors.parentName = "Parent Name is required";
    }
  
    if (!Number.isInteger(Number(routerFormData.floorNo))) {
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
        <DialogTitle className="p-5 px-14">Add Router</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="routerName">Router Name</label>
                <br />
                <input
                  type="text"
                  id="routerName"
                  name="routerName"
                  value={routerFormData.routerName}
                  onChange={(e) =>
                    setRouterFormData((prevState) => ({
                      ...prevState,
                      routerName: e.target.value,
                    }))
                  }
                  required
                  className="border-[1px] border-[#08134e] rounded-md mt-2 block pl-2"
                />
                {errors.routerName && (
                  <span className="text-red-500 text-[14px]">{errors.routerName}</span>
                )}
              </div>
              <div>
                <label htmlFor="floorNo" className="">
                  Floor Number
                </label>
                <br />
                <input
                  type="number"
                  id="floorNo"
                  name="floorNo"
                  value={routerFormData.floorNo}
                  onChange={(e) =>
                    setRouterFormData((prevState) => ({
                      ...prevState,
                      floorNo: e.target.value,
                    }))
                  }
                  required
                  className="border-[1px] border-[#08134e] rounded-md mt-2 block pl-2"
                />
                {errors.floorNo && (
                  <span className="text-red-500 text-[14px]">{errors.floorNo}</span>
                )}
              </div>

              <div>
                <label htmlFor="parentName">Parent Name</label>
                <br />
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={routerFormData.parentName}
                  required
                  disabled
                  className="border-[1px] border-[#08134e] rounded-md mt-2 block pl-2"
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
