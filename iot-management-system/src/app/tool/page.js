"use client";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { IoMdAddCircle } from "react-icons/io";
import Navbar from "../components/Navbar";
import { useState } from "react";

import { RouterNode, SwitchNode, wrlessRouterNode, wiredNode, wirelessNode, networkTree } from  '../hybridDataStructure';
import { Main } from "next/document";

export default function Tool() {
  const [routerAdd, setRouterAdd] = useState(false);
  const [routerFormData, setRouterFormData] = useState({
    routerName: '',
    floorNo: '',
  });
  const handleRouterOpen = () => {
    setRouterAdd(true);
  };

  const handleRouterClose = () => {
    setRouterAdd(false);
  };

  let mainNetwork = new networkTree();

  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const addRouterFunction = (routerName, floorNo, parentName)=>{
    if(mainNetwork.nameList.includes(routerName)){
      alert("Name already present!")
    }else{
      let router = new RouterNode(routerName);
      if(mainNetwork.root == null){
        mainNetwork.setRoot(router)
      }
      else{
        mainNetwork.addRouter(parentName,router);
      }
      mainNetwork.printElements()
    }
  }

  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-row">
        <div className="flex-1"></div>
        <div className="w-[400px] p-2 bg-slate-500">
          <div>
            <Accordion className="bg-[#CADCFC]">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="ml-2"
              >
                Add Components
              </AccordionSummary>
              <AccordionDetails>
                {/* Router device acccordian */}
                <Accordion className=" bg-emerald-200">
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Router
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleRouterOpen}
                      >
                        <div>Router</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Wireless Router</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Switch device acccordian */}
                <Accordion className="bg-red-200">
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Switch
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Switch</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* IoT device acccordian */}
                <Accordion className="bg-sky-300">
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    IoT devices
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Television</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Light</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Camera</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Fan</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Fire alarm</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* Router dialog box */}
        <Dialog
          open={routerAdd}
          onClose={handleRouterClose}
          className=""
        >
          
          <div className="bg-[#CADCFC] ">
            <DialogTitle className="p-5  px-14">Add Router</DialogTitle>
            <DialogContent className="my-2">
              <DialogContentText className="pr-14 pl-8">
                <div className="flex flex-col gap-3">
                  <div>
                    <label for="routerName">Router Name</label>
                    <br></br>
                    <input
                      type="text"
                      id="routerName"
                      name="routerName"
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>
                  <div>
                    <label for="floorNo" className="">Floor Number</label>
                    <br></br>
                    <input
                      type="number"
                      id="floorNo"
                      name="floorNo"
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
                    required
                    className="border-[1px] border-[#08134e] rounded-md my-2"
                  />
                </div>
                </div>
                <div className="flex flex-row justify-end gap-4 mt-5">
                  <button>Submit</button>
                  <button onClick={handleRouterClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </main>
  );
}
