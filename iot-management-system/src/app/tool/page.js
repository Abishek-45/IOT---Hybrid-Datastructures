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

import EditRouterForm from "./components/EditForms/editRouterForm";
import EditSwitchForm from "./components/EditForms/editSwitchForm";
import EditWirelessRouterForm from "./components/EditForms/editWirelessRouter";
import EditPCForm from "./components/EditForms/editPCForm";
import EditIoTForm from "./components/EditForms/editIoTForm";

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
  const [mainNetwork] = useState(
    new networkTree(new RouterNode("Home Router", 0))
  );
  const [toOpenDeleteForm, setToOpenDeleteForm] = useState(false);
  const [routerAdd, setRouterAdd] = useState(false);
  const [routerFormData, setRouterFormData] = useState({
    routerName: "",
    floorNo: "",
    parentName: "Home Router",
  });
  const [routerToEdit, setRouterToEdit] = useState("");
  const [openRouterEditForm, setOpenRouterEditForm] = useState(false);
  const editRouterCloseFunction = () => {
    setOpenRouterEditForm(false);
  };
  const editRouterOpenFunction = () => {
    setOpenRouterEditForm(true);
  };

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

  useEffect(() => {
    setData(mainNetwork.convertToTreeData(mainNetwork.root));
  }, []);

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
  const [switchToEdit, setSwitchToEdit] = useState("");
  const [openSwitchEditForm, setOpenSwitchEditForm] = useState(false);
  const editSwitchCloseFunction = () => {
    setOpenSwitchEditForm(false);
  };
  const editSwitchOpenFunction = () => {
    setOpenSwitchEditForm(true);
  };
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
  const [wrouterToEdit, setWRouterToEdit] = useState("");
  const [openWRouterEditForm, setOpenWRouterEditForm] = useState(false);
  const editWRouterCloseFunction = () => {
    setOpenWRouterEditForm(false);
  };
  const editWRouterOpenFunction = () => {
    setOpenWRouterEditForm(true);
  };
  const handleWRouterOpen = () => {
    setWRouterAdd(true);
  };

  const handleWRouterClose = () => {
    setWRouterAdd(false);
  };

  const [deviceAdd, setDeviceAdd] = useState(false);
  const [deviceFormData, setDeviceFormData] = useState({
    deviceName: "",
    SSID: "",
    passwd: "",
    parentName: "",
  });
  const [deviceToEdit, setDeviceToEdit] = useState("");
  const [openDeviceEditForm, setOpenDeviceEditForm] = useState(false);
  const editDeviceCloseFunction = () => {
    setOpenDeviceEditForm(false);
  };
  const editDeviceOpenFunction = () => {
    setOpenDeviceEditForm(true);
  };
  const handleDeviceOpen = () => {
    setDeviceAdd(true);
  };

  const handleDeviceClose = () => {
    setDeviceAdd(false);
  };

  const [pcAdd, setPCAdd] = useState(false);
  const [pcFormData, setPCFormData] = useState({
    PCName: "",
    parentName: "",
    ip: "",
  });
  const [pcToEdit, setPCToEdit] = useState("");
  const [openPCEditForm, setOpenPCEditForm] = useState(false);
  const editPCCloseFunction = () => {
    setOpenPCEditForm(false);
  };
  const editPCOpenFunction = () => {
    setOpenPCEditForm(true);
  };
  const handlePcOpen = () => {
    setPCAdd(true);
  };

  const handlePcClose = () => {
    setPCAdd(false);
  };

  const addRouterFunction = () => {
    if (mainNetwork.nameList.includes(routerFormData.routerName)) {
      alert("Name already present!");
      return;
    }
    if (Object.values(mainNetwork.floorList).includes(routerFormData.floorNo)) {
      alert("Floor already present!");
      return;
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
      return;
    }
    if (!mainNetwork.nameList.includes(switchFormData.parentName)) {
      alert("Parent do not exist");
      return;
    } else {
      if (
        mainNetwork.floorList[switchFormData.parentName] !==
        switchFormData.floorNo
      ) {
        alert("Parent name and floor no doesn't match");
        return;
      } else {
        const parts = switchFormData.networkip.split(".");
        if (parts.length !== 4) {
          alert("Invalid IP");
          return;
        }
        if (
          parseInt(parts[0]) > 255 ||
          parseInt(parts[1]) > 255 ||
          parseInt(parts[2]) > 255
        ) {
          alert("Invalid IP");
          return;
        }
        if (parseInt(parts[3]) !== 0) {
          alert("Invalid IP");
          return;
        }

        let sw = new SwitchNode(
          switchFormData.switchName,
          switchFormData.floorNo,
          switchFormData.roomName,
          switchFormData.networkip
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
    if (!mainNetwork.nameList.includes(wrouterFormData.parentName)) {
      alert("Parent do not exist");
      return;
    } else {
      if (
        mainNetwork.floorList[wrouterFormData.parentName] !==
        wrouterFormData.floorNo
      ) {
        alert("Parent name and floor no doesn't match");
        return;
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
    }
  };

  const addIoTFunction = () => {
    if (mainNetwork.nameList.includes(deviceFormData.deviceName)) {
      alert("Name already present!");
    } else {
      let newDevice = new wirelessNode(
        deviceFormData.deviceName,
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
    }
    if (!mainNetwork.nameList.includes(pcFormData.parentName)) {
      alert("Parent do not exist");
      return;
    } else {
      const parts = pcFormData.ip.split(".");
      if (parts.length !== 4) {
        alert("Invalid IP");
        return;
      }
      if (
        parseInt(parts[0]) > 255 ||
        parseInt(parts[1]) > 255 ||
        parseInt(parts[2]) > 255
      ) {
        alert("Invalid IP");
        return;
      }
      if (parseInt(parts[3]) == 0 || parseInt(parts[3]) == 255) {
        alert("Invalid IP");
        return;
      }
      let newPC = new wiredNode(pcFormData.PCName, pcFormData.ip);
      mainNetwork.addPC(pcFormData.parentName, newPC);
      mainNetwork.printElements();
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const editRouterFunction = () => {
    if (!mainNetwork.nameList.includes(routerToEdit)) {
      alert("Given router name is not present in network");
      return;
    } else {
      let router = new RouterNode(
        routerFormData.routerName,
        routerFormData.floorNo
      );
      mainNetwork.editRouter(routerFormData.parentName, routerToEdit, router);
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const editSwitchFunction = () => {
    if (!mainNetwork.nameList.includes(switchToEdit)) {
      alert("Given switch name is not present in network");
      return;
    } else {
      let Switch = new SwitchNode(
        switchFormData.switchName,
        switchFormData.floorNo,
        switchFormData.roomName,
        switchFormData.networkip
      );
      let oldParent = findParent(data, switchToEdit);
      console.log("$$$$$$$$$$$$$", oldParent);
      mainNetwork.editSwitch(
        switchFormData.parentName,
        oldParent,
        switchToEdit,
        Switch
      );
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const editWRouterFunction = () => {
    if (!mainNetwork.nameList.includes(wrouterToEdit)) {
      alert("Given router name is not present in network");
      return;
    } else {
      let WRouter = new wrlessRouterNode(
        wrouterFormData.routerName,
        wrouterFormData.floorNo,
        wrouterFormData.roomName,
        wrouterFormData.SSID,
        wrouterFormData.passwd
      );
      let oldParent = findParent(data, wrouterToEdit);
      mainNetwork.editWRouter(
        wrouterFormData.parentName,
        oldParent,
        wrouterToEdit,
        WRouter
      );
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const editPCFunction = () => {
    if (!mainNetwork.nameList.includes(pcToEdit)) {
      alert("Given PC name is not present in network");
      return;
    } else {
      let newPC = new wiredNode(pcFormData.PCName, pcFormData.ip);
      let oldParent = findParent(data, pcToEdit);
      mainNetwork.editPC(pcFormData.parentName, oldParent, pcToEdit, newPC);
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const editDeviceFunction = () => {
    if (!mainNetwork.nameList.includes(deviceToEdit)) {
      alert("Given Device name is not present in network");
      return;
    } else {
      let newDevice = new wirelessNode(
        deviceFormData.deviceName,
        deviceFormData.SSID,
        deviceFormData.passwd
      );
      let oldParent = findParent(data, deviceToEdit);
      mainNetwork.editDevice(
        deviceFormData.parentName,
        oldParent,
        deviceToEdit,
        newDevice
      );
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

  const deleteNodeFunction = () => {
    console.log(deleteName, mainNetwork.nameList);
    if (mainNetwork.nameList.includes(deleteName)) {
      let parentName = findParent(data, deleteName);
      mainNetwork.deleteNode(parentName, deleteName);
      setData(mainNetwork.convertToTreeData(mainNetwork.root));
    }
  };

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
        <div className="w-[400px] p-2 bg-[#03379e]">
          <AccordionMenu
            handleRouterOpen={handleRouterOpen}
            handleSwitchOpen={handleSwitchOpen}
            handleWRouterOpen={handleWRouterOpen}
            handlePcOpen={handlePcOpen}
            handleDeviceOpen={handleDeviceOpen}
            handleDeleteOpen={handleDeleteFormOpen}
            handleRouterEdit={editRouterOpenFunction}
            handleSwitchEdit={editSwitchOpenFunction}
            handleWRouterEdit={editWRouterOpenFunction}
            handlePCEdit={editPCOpenFunction}
            handleDeviceEdit={editDeviceOpenFunction}
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
          wrouterFormData={wrouterFormData}
          setwrouterFormData={setwrouterFormData}
        />
        <AddIoTForm
          controlVariable={deviceAdd}
          handleCloseFunction={handleDeviceClose}
          handleSubmitFunction={addIoTFunction}
          deviceFormData={deviceFormData}
          setDeviceFormData={setDeviceFormData}
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
        <EditRouterForm
          controlVariable={openRouterEditForm}
          handleCloseFunction={editRouterCloseFunction}
          handleSubmitFunction={editRouterFunction}
          routerFormData={routerFormData}
          setRouterFormData={setRouterFormData}
          routerToEdit={routerToEdit}
          setRouterToEdit={setRouterToEdit}
        />
        <EditSwitchForm
          controlVariable={openSwitchEditForm}
          handleCloseFunction={editSwitchCloseFunction}
          handleSubmitFunction={editSwitchFunction}
          switchFormData={switchFormData}
          setSwitchFormData={setSwitchFormData}
          switchToEdit={switchToEdit}
          setSwitchToEdit={setSwitchToEdit}
        />
        <EditWirelessRouterForm
          controlVariable={openWRouterEditForm}
          handleCloseFunction={editWRouterCloseFunction}
          handleSubmitFunction={editWRouterFunction}
          wrouterFormData={wrouterFormData}
          setwrouterFormData={setwrouterFormData}
          wrouterToEdit={wrouterToEdit}
          setwrouterToEdit={setWRouterToEdit}
        />
        <EditPCForm
          controlVariable={openPCEditForm}
          handleCloseFunction={editPCCloseFunction}
          handleSubmitFunction={editPCFunction}
          pcFormData={pcFormData}
          setPCFormData={setPCFormData}
          PCToEdit={pcToEdit}
          setPCToEdit={setPCToEdit}
        />
        <EditIoTForm
          controlVariable={openDeviceEditForm}
          handleCloseFunction={editDeviceCloseFunction}
          handleSubmitFunction={editDeviceFunction}
          deviceFormData={deviceFormData}
          setDeviceFormData={setDeviceFormData}
          deviceToEdit={deviceToEdit}
          setDeviceToEdit={setDeviceToEdit}
        />
      </div>
    </main>
  );
}
