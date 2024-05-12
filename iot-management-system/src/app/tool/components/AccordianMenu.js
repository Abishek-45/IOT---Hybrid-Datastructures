import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import { useState } from "react";
import EditPCForm from "./EditForms/editPCForm";

export default function AccordionMenu({
  handleRouterOpen,
  handleSwitchOpen,
  handleWRouterOpen,
  handlePcOpen,
  handleDeviceOpen,
  handleDeleteOpen,
  handleRouterEdit,
  handleSwitchEdit,
  handleWRouterEdit,
  handlePCEdit,
  handleDeviceEdit,
}) {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="bg-[#CADCFC] p-4 rounded-lg mt-2">
      <div className="ml-2 text-xl font-bold text-black mb-4">Components</div>
      {/* Router device acccordian */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className=" text-white bg-blue-500"
      >
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Router
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleRouterOpen}
            >
              <div> Add Router</div>
              <IoMdAddCircle className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleRouterEdit}
            >
              <div>Edit Router</div>
              <MdEdit className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeleteOpen}
            >
              <div>Remove Router</div>
              <RiDeleteBin5Fill className="h-6 w-6" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Switch device acccordian */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="text-white bg-blue-600"
      >
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          Switch
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleSwitchOpen}
            >
              <div> Add Switch</div>
              <IoMdAddCircle className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleSwitchEdit}
            >
              <div> Edit Switch</div>
              <MdEdit className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeleteOpen}
            >
              <div>Remove Switch</div>
              <RiDeleteBin5Fill className="h-6 w-6" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Wireless Router acccordian */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className=" text-white bg-blue-700"
      >
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          Wireless Router
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleWRouterOpen}
            >
              <div>Add Router</div>
              <IoMdAddCircle className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleWRouterEdit}
            >
              <div>Edit Router</div>
              <MdEdit className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeleteOpen}
            >
              <div>Remove Router</div>
              <RiDeleteBin5Fill className="h-6 w-6" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* IoT device acccordian */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="text-white bg-blue-800"
      >
        <AccordionSummary aria-controls="panel4-content" id="panel4-header">
          IoT devices
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeviceOpen}
            >
              <div> Add Device</div>
              <IoMdAddCircle className="h-6 w-6" />
            </div>
            <div className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
            onClick={handleDeviceEdit}
            >
              <div> Edit Device</div>
              <MdEdit className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeleteOpen}
            >
              <div> Remove Device</div>
              <RiDeleteBin5Fill className="h-6 w-6" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* PC accordian */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="text-white bg-blue-900"
      >
        <AccordionSummary aria-controls="panel5-content" id="panel5-header">
          PC/Workstation
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2">
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handlePcOpen}
            >
              <div>Add PC</div>
              <IoMdAddCircle className="h-6 w-6" />
            </div>
            <div className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
            onClick={handlePCEdit}
            >
              <div>Edit PC</div>
              <MdEdit className="h-6 w-6" />
            </div>
            <div
              className="bg-white text-black rounded-xl p-2 flex flex-row justify-between cursor-pointer"
              onClick={handleDeleteOpen}
            >
              <div>Remove PC</div>
              <RiDeleteBin5Fill className="h-6 w-6" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
