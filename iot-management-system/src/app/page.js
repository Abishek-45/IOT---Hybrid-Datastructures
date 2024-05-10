"use client";

import Navbar from "./components/Navbar.js";
import "./hybridDataStructure.js";
import Image from "next/image.js";

export default function Home() {
  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] ">
      <div className="flex flex-col gap-[123px]">
        <div className="flex">
          <Navbar />
        </div>
        <div className="flex">
          <div className="flex flex-row">
            <div className="flex flex-col gap-[60px]">
              <div className="flex-col text-black text-[43px] w-[500px] ml-[70px]">
                Smart Home Management System
              </div>
              <div className="flex-col w-[750px] text-black text-[18px] ml-[70px]">
                IoT in apartments means integrating smart devices like
                thermostats, lights, locks, and cameras for enhanced convenience
                and security. Controlled through a central hub or smartphone,
                residents gain remote monitoring and management, improving
                comfort and peace of mind while potentially saving energy.
              </div>
              <div className="flex flex-row gap-9">
                <div className="ml-[70px] w-min">
                  <button className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] w-[163px] h-[45px] rounded-2xl text-[18px] transition duration-300 hover:scale-105 active:opacity-60"
                  onClick={()=>window.location.href = "/tool"}>
                    Get Started!
                  </button>
                </div>
                <div>
                  <button className="bg-[#9FBEF7] w-[170px] h-[45px] rounded-2xl text-[18px] text-[#03379e] border-2 border-[#03379e] transition duration-300 hover:scale-105 active:opacity-60"
                  onClick={()=>window.location.href = "/docs"}>
                    Documentation
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src={"/Home.png"}
                width={550}
                height={530}
                className="ml-[57px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
