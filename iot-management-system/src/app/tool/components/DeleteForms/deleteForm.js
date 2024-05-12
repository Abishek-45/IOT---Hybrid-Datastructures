import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function DeleteForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  toDeleteName,
  setToDeleteName,
}) {

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
 
    if (!toDeleteName) {
      newErrors.toDeleteName = "Please Enter the Component";
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
        <DialogTitle className="p-5  px-14">Delete component</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div>
              <label htmlFor="Name">Enter name of component to delete</label>
              <br></br>
              <input
                type="text"
                id="Name"
                name="Name"
                value={toDeleteName}
                onChange={(e) => setToDeleteName(e.target.value)}
                required
                className="border-[1px] border-[#08134e] rounded-md block w-[300px] pl-2"
              />
                {errors.toDeleteName && (
                  <span className="text-red-500 text-[14px]">{errors.toDeleteName}</span>
                )}
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
