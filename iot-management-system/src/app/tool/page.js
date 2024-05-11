"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Navbar from "../components/Navbar";
import { useEffect, useMemo, useState } from "react";
import Tree from "react-d3-tree";

import AddRouterForm from "./components/AddForms/addRouterForm";
import AddSwitchForm from "./components/AddForms/addSwitchForm";
import AddWrRouterForm from "./components/AddForms/addWirelessRouterForm";
import AddIoTForm from "./components/AddForms/addIoTForm";
import AddPCForm from "./components/AddForms/addPCForm";
import {
  RouterNode,
  SwitchNode,
  wrlessRouterNode,
  wiredNode,
  wirelessNode,
  networkTree,
} from "../hybridDataStructure";

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
    deviceName: "",
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
    PCName: "",
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
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const addWrRouterFunction = () => {
    if (mainNetwork.nameList.includes(wrouterFormData.routerName)) {
      alert("Name already present!");
    } else {
      let wrRouter = new wrlessRouterNode(
        wrouterFormData.routerName,
        wrouterFormData.floorNo,
        wrouterFormData.roomName,
        wrouterFormData.SSID,
        wrouterFormData.passwd
      );
      mainNetwork.addWrRouter(wrouterFormData.parentName, wrRouter);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const addIoTFunction = () => {
    if (mainNetwork.nameList.includes(deviceFormData.deviceName)) {
      alert("Name already present!");
    } else {
      let newDevice = new wirelessNode(
        deviceFormData.deviceName,
        deviceFormData.floorNo,
        deviceFormData.roomName,
        deviceFormData.SSID,
        deviceFormData.passwd
      );
      mainNetwork.addIotDevice(deviceFormData.parentName, newDevice);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const addPCFunction = () => {
    if (mainNetwork.nameList.includes(pcFormData.PCName)) {
      alert("Name already present!");
    } else {
      let newPC = new wiredNode(
        pcFormData.PCName,
        pcFormData.floorNo,
        pcFormData.roomName,
        pcFormData.ip
      );
      mainNetwork.addPC(pcFormData.parentName, newPC);
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
        <AddRouterForm
          controlVariable={routerAdd}
          handleCloseFunction={handleRouterClose}
          handleSubmitFunction={addRouterFunction}
          routerFormData={routerFormData}
          setRouterFormData={setRouterFormData}
        />
        <AddSwitchForm
          controlVariable={switchAdd}
          handleCloseFunction={handleSwitchClose}
          handleSubmitFunction={addSwitchFunction}
          switchFormData={switchFormData}
          setSwitchFormData={setSwitchFormData}
        />
        <AddWrRouterForm
          controlVariable={wrAdd}
          handleCloseFunction={handleWRouterClose}
          handleSubmitFunction={addWrRouterFunction}
          switchFormData={wrouterFormData}
          setSwitchFormData={setwrouterFormData}
        />
        <AddIoTForm
          controlVariable={deviceAdd}
          handleCloseFunction={handleDeviceClose}
          handleSubmitFunction={addIoTFunction}
          pcFormData={deviceFormData}
          setPCFormData={setDeviceFormData}
        />
        <AddPCForm
          controlVariable={pcAdd}
          handleCloseFunction={handlePcClose}
          handleSubmitFunction={addPCFunction}
          pcFormData={pcFormData}
          setPCFormData={setPCFormData}
        />
      </div>
    </main>
  );
}
