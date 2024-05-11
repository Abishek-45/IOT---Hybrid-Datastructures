import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

export default function AccordionMenu({handleRouterOpen, handleSwitchOpen, handleWRouterOpen, handlePcOpen, handleDeviceOpen}) {
  return (
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
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
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
  );
}
