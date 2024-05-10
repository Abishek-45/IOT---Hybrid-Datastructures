import Navbar from "../components/Navbar.js";
import TeamCard from "../components/teamCard.js";

export default function Members() {
  const teamDetails = [
    {
      name: "Abishek",
      links: [
        "https://github.com/Abishek-45",
        "https://www.linkedin.com/in/abishek-k-387083309/",
        "https://mail.google.com/mail/u/0/#inbox?compose=new",
      ],
      photo: "/abishek2.jpg",
    },
    {
      name: "Aakash",
      links: ["https://mail.google.com/mail/u/0/#inbox?compose=new"],
      photo: "",
    },
    {
      name: "Thanus Kumaar",
      links: [
        "https://github.com/Thanus-Kumaar",
        "https://www.linkedin.com/in/thanus-kumaar/",
        "https://mail.google.com/mail/u/0/#inbox?compose=new",
      ],
      photo: "/Thanos.jpg",
    },
    {
      name: "Lalith",
      links: ["https://mail.google.com/mail/u/0/#inbox?compose=new"],
      photo: "",
    },
    {
      name: "Kavinilavan",
      links: ["https://mail.google.com/mail/u/0/#inbox?compose=new"],
      photo: "",
    },
    {
      name: "Nalesh Kumar",
      links: ["https://mail.google.com/mail/u/0/#inbox?compose=new"],
      photo: "",
    },
  ];
  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] ">
      <div className="flex flex-col realtive gap-5">
        <Navbar />
        <div className="flex-1 mt-4">
          <div className="flex flex-row justify-center gap-y-18 gap-20 flex-wrap columns-3 mt-8">
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
