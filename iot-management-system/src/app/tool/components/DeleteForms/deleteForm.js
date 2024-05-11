import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  toDeleteName,
  setToDeleteName,
}) {
  return (
    <Dialog open={controlVariable} onClose={handleCloseFunction} className="">
      <div className="bg-[#CADCFC] ">
        <DialogTitle className="p-5  px-14">Delete component</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div>
              <label for="DeviceName">Enter name of component to delete</label>
              <br></br>
              <input
                type="text"
                id="Name"
                name="Name"
                value={toDeleteName}
                onChange={(e) => setToDeleteName(e.target.value)}
                required
                className="border-[1px] border-[#08134e] rounded-md my-2"
              />
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
