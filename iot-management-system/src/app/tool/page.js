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
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Navbar from "../components/Navbar";
import { useEffect, useMemo, useState } from "react";
import Tree from "react-d3-tree";

import {
  RouterNode,
  SwitchNode,
  wrlessRouterNode,
  wiredNode,
  wirelessNode,
  networkTree,
} from "../hybridDataStructure";
import { Main } from "next/document";

export default function Tool() {
  const [mainNetwork] = useState(new networkTree());
  const [routerAdd, setRouterAdd] = useState(false);
  const [routerFormData, setRouterFormData] = useState({
    routerName: "",
    floorNo: "",
    parentName: "",
  });
  const [data, setData] = useState({});
  const handleRouterOpen = () => {
    setRouterAdd(true);
  };

  const handleRouterClose = () => {
    setRouterAdd(false);
  };

  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [switchAdd, setSwitchAdd] = useState(false);
  const [switchFormData, setSwitchFormData] = useState({
    switchName: "",
    floorNo: "",
    roomName: "",
    parentName: "",
  });
  const handleSwitchOpen = () => {
    setSwitchAdd(true);
  };

  const handleSwitchClose = () => {
    setSwitchAdd(false);
  };

  const [wrAdd, setWRouterAdd] = useState(false);
  const [wrouterFormData, setwrouterFormData] = useState({
    routerName: "",
    floorNo: "",
    roomName: "",
    parentName: "",
    SSID: "",
    passwd: "",
  });
  const handleWRouterOpen = () => {
    setWRouterAdd(true);
  };

  const handleWRouterClose = () => {
    setWRouterAdd(false);
  };

  const [deviceAdd, setDeviceAdd] = useState(false);
  const [deviceFormData, setDeviceFormData] = useState({
    routerName: "",
    floorNo: "",
    roomName: "",
    parentName: "",
    SSID: "",
    passwd: "",
  });

  const handleDeviceOpen = () => {
    setDeviceAdd(true);
  };

  const handleDeviceClose = () => {
    setDeviceAdd(false);
  };

  const [pcAdd, setPCAdd] = useState(false);
  const [pcFormData, setPCFormData] = useState({
    routerName: "",
    floorNo: "",
    roomName: "",
    parentName: "",
    ip: "",
  });

  const handlePcOpen = () => {
    setPCAdd(true);
  };

  const handlePcClose = () => {
    setPCAdd(false);
  };

  const addRouterFunction = () => {
    if (mainNetwork.nameList.includes(routerFormData.routerName)) {
      alert("Name already present!");
    } else {
      let router = new RouterNode(
        routerFormData.routerName,
        routerFormData.floorNo
      );
      if (mainNetwork.root == null) {
        mainNetwork.setRoot(router);
      } else {
        mainNetwork.addRouter(routerFormData.parentName, router);
      }
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const addSwitchFunction = () => {
    if (mainNetwork.nameList.includes(switchFormData.switchName)) {
      alert("Name already present!");
    } else {
      let sw = new SwitchNode(
        switchFormData.switchName,
        switchFormData.floorNo,
        switchFormData.roomName
      );
      mainNetwork.addSwitch(switchFormData.parentName, sw);
      console.log("#####################");
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-row">
        <div className="flex-1">
          <Tree
            className="h-52 w-52"
            translate={{ x: 550, y: 100 }}
            orientation="vertical"
            draggable
            data={data}
          />
        </div>
        <div className="w-[400px] p-2 bg-slate-500">
          <div>
            <Accordion className="bg-[#CADCFC]">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                className="ml-2"
              >
                Components
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
                        <div> Add Router</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Edit Router</div>
                        <MdEdit className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Remove Router</div>
                        <RiDeleteBin5Fill className="h-6 w-6" />
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
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleSwitchOpen}
                      >
                        <div> Add Switch</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleSwitchOpen}
                      >
                        <div> Edit Switch</div>
                        <MdEdit className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleSwitchOpen}
                      >
                        <div>Remove Switch</div>
                        <RiDeleteBin5Fill className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Wireless Router acccordian */}
                <Accordion className=" bg-red-400">
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Wireless Router
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleWRouterOpen}
                      >
                        <div>Add Router</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Edit Router</div>
                        <MdEdit className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer">
                        <div>Remove Router</div>
                        <RiDeleteBin5Fill className="h-6 w-6" />
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
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleDeviceOpen}
                      >
                        <div> Add Device</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleDeviceOpen}
                      >
                        <div> Edit Device</div>
                        <MdEdit className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handleDeviceOpen}
                      >
                        <div> Remove Device</div>
                        <RiDeleteBin5Fill className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* PC accordian */}
                <Accordion className="bg-yellow-400">
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    PC/Workstation
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col gap-2">
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handlePcOpen}
                      >
                        <div>Add PC</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handlePcOpen}
                      >
                        <div>Edit PC</div>
                        <MdEdit className="h-6 w-6" />
                      </div>
                      <div
                        className="border-2 border-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
                        onClick={handlePcOpen}
                      >
                        <div>Remove PC</div>
                        <RiDeleteBin5Fill className="h-6 w-6" />
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* Router dialog box */}
        <Dialog open={routerAdd} onClose={handleRouterClose} className="">
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
                      value={routerFormData.routerName}
                      onChange={(e) =>
                        setRouterFormData((prevState) => ({
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
                      value={routerFormData.floorNo}
                      onChange={(e) =>
                        setRouterFormData((prevState) => ({
                          ...prevState,
                          floorNo: e.target.value,
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
                      value={routerFormData.parentName}
                      onChange={(e) =>
                        setRouterFormData((prevState) => ({
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
                  <button onClick={addRouterFunction}>Submit</button>
                  <button onClick={handleRouterClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>

        <Dialog open={switchAdd} onClose={handleSwitchClose} className="">
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
                  <button onClick={addSwitchFunction}>Submit</button>
                  <button onClick={handleSwitchClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>

        <Dialog open={wrAdd} onClose={handleWRouterClose} className="">
          <div className="bg-[#CADCFC] ">
            <DialogTitle className="p-5  px-14">
              Add Wireless Router
            </DialogTitle>
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
                  <button onClick={handleWRouterClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>

        <Dialog open={deviceAdd} onClose={handleDeviceClose} className="">
          <div className="bg-[#CADCFC] ">
            <DialogTitle className="p-5  px-14">Add Device</DialogTitle>
            <DialogContent className="my-2">
              <DialogContentText className="pr-14 pl-8">
                <div className="flex flex-col gap-3">
                  <div>
                    <label for="DeviceName">Device Name</label>
                    <br></br>
                    <input
                      type="text"
                      id="DeviceName"
                      name="DeviceName"
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
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="passwd" className="">
                      PassWord
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="passwd"
                      name="passwd"
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
                  <button onClick={handleDeviceClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
        <Dialog open={pcAdd} onClose={handlePcClose} className="">
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
                      required
                      className="border-[1px] border-[#08134e] rounded-md my-2"
                    />
                  </div>

                  <div>
                    <label for="networkIp" className="">
                      IP Address
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="networkIp"
                      name="networkIp"
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
                  <button onClick={handlePcClose}>Cancel</button>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </main>
  );
}
