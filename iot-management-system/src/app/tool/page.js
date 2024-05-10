"use client";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { IoMdAddCircle } from "react-icons/io";
import Navbar from "../components/Navbar";
import { useState } from "react";
export default function Tool() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
                        <div>Router</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
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
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
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
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
                        <div>Television</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
                        <div>Light</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
                        <div>Camera</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
                        <div>Fan</div>
                        <IoMdAddCircle className="h-6 w-6" />
                      </div>
                      <div className="border-2 border-black rounded-xl p-2 flex flex-row justify-between">
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
      </div>
    </main>
  );
}
