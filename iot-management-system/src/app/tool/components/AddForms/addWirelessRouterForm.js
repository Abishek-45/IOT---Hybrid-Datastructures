import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function addWirelessRouterForm({
  controlVariable,
  handleCloseFunction,
  handleSubmitFunction,
  wrouterFormData,
  setwrouterFormData,
}) {
  return (
    <Dialog open={controlVariable} onClose={handleCloseFunction} className="">
      <div className="bg-[#CADCFC] ">
        <DialogTitle className="p-5  px-14">Add Wireless Router</DialogTitle>
        <DialogContent className="my-2">
          <DialogContentText className="pr-14 pl-8">
            <div className="flex flex-col gap-3">
              <div>
                <label for="switchName">Router Name</label>
                <br></br>
                <input
                  type="text"
                  id="switchName"
                  name="switchName"
                  value={wrouterFormData?.routerName}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
                      ...prevState,
                      routerName: e.target.value,
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
                  value={wrouterFormData?.floorNo}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
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
                  value={wrouterFormData?.roomName}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
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
                  value={wrouterFormData?.SSID}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
                      ...prevState,
                      SSID: e.target.value,
                    }))
                  }
                  required
                  className="border-[1px] border-[#08134e] rounded-md my-2"
                />
              </div>

              <div>
                <label for="password" className="">
                  Password
                </label>
                <br></br>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={wrouterFormData?.passwd}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
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
                  value={wrouterFormData?.parentName}
                  onChange={(e) =>
                    setwrouterFormData((prevState) => ({
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
