import Navbar from "../components/Navbar.js";
import Image from "next/image.js";
import TeamCard from "../components/teamCard.js";

export default function Members() {
  const teamDetails = [
    { name: "Abishek", links: ["https://github.com/Abishek-45","https://www.linkedin.com/in/abishek-k-387083309/","https://mail.google.com/mail/u/0/#inbox?compose=new"], photo: "/abishek2.jpg" },
    { name: "Aakash", links: [], photo: "" },
    { name: "Thanus Kumaar", links: [], photo: "/Thanos.jpg" },
    { name: "Lalith", links: [], photo: "" },
    { name: "Kavinilavan", links: [], photo: "" },
    { name: "Nalesh Kumar", links: [], photo: "" },
  ];
  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] ">
      <div className="flex flex-col realtive gap-5">
        <Navbar />
        <div className="text-black text-center font-semibold text-[36px]">
          TEAM MEMBERS
        </div>
        <div className="flex-1">
          <div className="flex flex-row mx-36 gap-y-10 gap-20 flex-wrap columns-3 mt-8">
            {teamDetails.map((member, index)=>(
                 <TeamCard
                key={index}
                 name={member.name}
                 links={member.links}
                 photosrc={member.photo}
               />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
