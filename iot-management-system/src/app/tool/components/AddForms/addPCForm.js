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
    if (!pcFormData.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    if (!pcFormData.ip) {
      newErrors.ip = "IP is required";
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
                className="border-[1px] border-[#08134e] rounded-md block pl-2"
              />
              {errors.PCName && (
                  <span className="text-red-500 text-[14px]">{errors.PCName}</span>
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
                className="border-[1px] border-[#08134e] rounded-md block pl-2"
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
                className="border-[1px] border-[#08134e] rounded-md block pl-2"
              />
              {errors.parentName && (
                  <span className="text-red-500 text-[14px]">{errors.parentName}</span>
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