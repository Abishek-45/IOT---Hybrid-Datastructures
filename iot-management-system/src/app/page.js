import Navbar from './components/Navbar.js';


export default function Home() {
  return (
    <main className="h-screen m-0 p-1 bg-[#CADCFC] ">
      <div className="flex flex-col gap-[145px]">
        <div className="flex"><Navbar /></div>
        <div className="flex">
          <div className="flex flex-row">
            <div className="flex col gap-[100px]">
              <div className="flex-col text-black text-[43px] w-[500px] ml-[70px]">
              Smart Home Management System
              </div>
              <div className="flex-col">
              IoT in apartments means integrating smart devices like thermostats, lights, locks, and cameras for enhanced convenience and security. Controlled through a central hub or smartphone, residents gain remote monitoring and management, improving comfort and peace of mind while potentially saving energy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
