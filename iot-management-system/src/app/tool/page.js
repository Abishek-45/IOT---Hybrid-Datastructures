"use client";

import Navbar from "../components/Navbar";
import { useEffect, useMemo, useState } from "react";
import Tree from "react-d3-tree";

import AddRouterForm from "./components/AddForms/addRouterForm";
import AddSwitchForm from "./components/AddForms/addSwitchForm";
import AddWrRouterForm from "./components/AddForms/addWirelessRouterForm";
import AddIoTForm from "./components/AddForms/addIoTForm";
import AddPCForm from "./components/AddForms/addPCForm";

import DeleteForm from "./components/DeleteForms/deleteForm";

import AccordionMenu from "./components/AccordianMenu";

import {
  RouterNode,
  SwitchNode,
  wrlessRouterNode,
  wiredNode,
  wirelessNode,
  networkTree,
} from "../hybridDataStructure";

export default function Tool() {
  const [mainNetwork] = useState(new networkTree(new RouterNode("Home Router",0)));
  const [toOpenDeleteForm, setToOpenDeleteForm] = useState(false);
  const [routerAdd, setRouterAdd] = useState(false);
  const [routerFormData, setRouterFormData] = useState({
    routerName: "",
    floorNo: "",
    parentName: "Home Router",
  });
  const [data, setData] = useState({});
  const [deleteName, setDeleteName] = useState("");
  const handleDeleteFormOpen = () => {
    setToOpenDeleteForm(true);
  };
  const handleDeleteFormClose = () => {
    setToOpenDeleteForm(false);
  };
  const handleRouterOpen = () => {
    setRouterAdd(true);
  };

  const handleRouterClose = () => {
    setRouterAdd(false);
  };

  useEffect(()=>{
    setData(mainNetwork.convertToTreeData(mainNetwork.root));
  },[])


  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [switchAdd, setSwitchAdd] = useState(false);
  const [switchFormData, setSwitchFormData] = useState({
    switchName: "",
    floorNo: "",
    roomName: "",
    networkip: "",
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
    SSID: "",
    passwd: "",
    parentName:"",
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
      return ;
    } 
    if (mainNetwork.floorList.includes(routerFormData.floorNo)){
      alert("Floor already present!");
      return ;
    }
    else {
      let router = new RouterNode(
        routerFormData.routerName,
        routerFormData.floorNo
      );
      if (mainNetwork.root == null) {
        mainNetwork.setRoot(router);
      } 
      else {
        mainNetwork.addRouter(routerFormData.parentName, router);
      }
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const addSwitchFunction = () => {
    if (mainNetwork.nameList.includes(switchFormData.switchName)) {
      alert("Name already present!");
      return ;
    }
    if(!mainNetwork.nameList.includes(switchFormData.parentName)) {
      alert("Parent do not exist");
      return ;
  } 
    else {
      let fl = mainNetwork.floorList.indexOf(switchFormData.floorNo);
      let pn = mainNetwork.nameList.indexOf(switchFormData.parentName);
      if(pn !== fl+1 )
        {
          alert("Parent name and floor no doesn't match");
        }
        else{
      let sw = new SwitchNode(
        switchFormData.switchName,
        switchFormData.floorNo,
        switchFormData.roomName

      );
      mainNetwork.addSwitch(switchFormData.parentName, sw);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
    }
  };

  const addWrRouterFunction = () => {
    if (mainNetwork.nameList.includes(wrouterFormData.routerName)) {
      alert("Name already present!");
    }
    if(!mainNetwork.nameList.includes(wrouterFormData.parentName)) {
      alert("Parent do not exist");
      return ;
  }  
    else {
      let fl = mainNetwork.floorList.indexOf(wrouterFormData.floorNo);
      let pn = mainNetwork.nameList.indexOf(wrouterFormData.parentName);
      if(pn !== fl+1 )
        {
          alert("Parent name and floor no doesn't match");
        }
        else{
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
    }
  };

  const addIoTFunction = () => {
    if (mainNetwork.nameList.includes(deviceFormData.deviceName)) {
      alert("Name already present!");
    }
    if (mainNetwork.floorList.includes(deviceFormData.floorNo)){
      alert("Floor already present!");
      return ;
    }
    else {
      let fl = mainNetwork.floorList.indexOf(deviceFormData.floorNo);
      let pn = mainNetwork.nameList.indexOf(deviceFormData.parentName);
      if(pn !== fl+1 )
        {
          alert("Parent name and floor no doesn't match");
        }
      else{
      let newDevice = new wirelessNode(
        deviceFormData.deviceName,
        deviceFormData.floorNo,
        deviceFormData.SSID,
        deviceFormData.passwd
      );
      mainNetwork.addIotDevice(deviceFormData.parentName, newDevice);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
      }
    }
  };

  const addPCFunction = () => {
    if (mainNetwork.nameList.includes(pcFormData.PCName)) {
      alert("Name already present!");
    }
    if(!mainNetwork.nameList.includes(pcFormData.parentName)) {
      alert("Parent do not exist");
      return ;
  } 
    else {
      let fl = mainNetwork.floorList.indexOf(pcFormData.floorNo);
      let pn = mainNetwork.nameList.indexOf(pcFormData.parentName);
      if(pn !== fl+1 )
        {
          alert("Parent name and floor no doesn't match");
        }
        else{
      let newPC = new wiredNode(
        pcFormData.PCName,
        pcFormData.floorNo,
        pcFormData.ip
      );
      mainNetwork.addPC(pcFormData.parentName, newPC);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
      }
    }
  };

  const deleteNodeFunction = ()=>{
    if (mainNetwork.nameList.includes(deleteName)) {
      let parentName = findParent(data, deleteName);
      mainNetwork.deleteNode(parentName, deleteName);
      setData(mainNetwork.convertToTreeData(mainNetwork.root))
    }
  }

  const findParent = (tree, nodeName, parentNode = null) => {
    if (tree.name === nodeName) {
      return parentNode;
    }
    if (tree.children) {
      for (let child of tree.children) {
        let result = findParent(child, nodeName, tree.name);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
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
          <AccordionMenu
            handleRouterOpen={handleRouterOpen}
            handleSwitchOpen={handleSwitchOpen}
            handleWRouterOpen={handleWRouterOpen}
            handlePcOpen={handlePcOpen}
            handleDeviceOpen={handleDeviceOpen}
            handleDeleteOpen={handleDeleteFormOpen}
          />
        </div>
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
        <DeleteForm
          controlVariable={toOpenDeleteForm}
          handleCloseFunction={handleDeleteFormClose}
          handleSubmitFunction={deleteNodeFunction}
          toDeleteName={deleteName}
          setToDeleteName={setDeleteName}
        />
      </div>
    </main>
  );
}
