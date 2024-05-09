"use client";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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
            <Accordion>
              <AccordionSummary
                
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
