import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function addSwitchForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  switchFormData,
  setSwitchFormData,
}) {
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
              </div>

              <div>
                <label for="parentname">Parent Name</label>
                <br></br>
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