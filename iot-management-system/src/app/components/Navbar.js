"use client";
import { TfiMenu } from "react-icons/tfi";
import { IoMdCloseCircle } from "react-icons/io";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] h-[61px] w-[99%] mx-auto mt-2 rounded-md flex flex-row justify-between">
        <div className="flex flex-row gap-[80px]">
          <div className="cursor-pointer" onClick={openDrawer}>
            <TfiMenu className="h-7 w-7 mt-3.5 ml-5" />
          </div>
          <div className="mt-3 text-[25px]">IoT Automation</div>
        </div>
        <div className="mr-5 mt-3.5 text-[21px]">TEAM</div>
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="left"
        className="absolute w-1/4"
      >
        <div className="bg-[#b4c4df] h-full flex flex-col p-4 gap-8">
          <div className="flex flex-row justify-between">
            <div className="text-2xl text-black">NAVIGATE</div>
            <IoMdCloseCircle
              className="h-8 w-8 text-[#08134e] cursor-pointer"
              onClick={closeDrawer}
            />
          </div>
          <div
            className="w-[90%] mx-auto bg-gradient-to-r from-[#08134e] to-[#03379e] px-3 py-2 rounded-xl text-center cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </div>
          <div
            className="w-[90%] mx-auto bg-gradient-to-r from-[#08134e] to-[#03379e] px-3 py-2 rounded-xl text-center cursor-pointer"
            onClick={() => (window.location.href = "/tool")}
          >
            Network Management System
          </div>
          <div
            className="w-[90%] mx-auto bg-gradient-to-r from-[#08134e] to-[#03379e] px-3 py-2 rounded-xl text-center cursor-pointer"
            onClick={() => (window.location.href = "/docs")}
          >
            Documentation
          </div>
          <a
            href="https://github.com/Abishek-45/IOT---Hybrid-Datastructures"
            target="_blank"
          >
            <div className="w-[90%] mx-auto bg-gradient-to-r from-[#08134e] to-[#03379e] px-3 py-2 rounded-xl text-center cursor-pointer">
              Project Source Code
            </div>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
