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
      links: [
        "https://github.com/Aakash-Balasundaram",
        "https://www.linkedin.com/in/aakash-b-9a6749256/",
        "https://mail.google.com/mail/u/0/#inbox?compose=new"],
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
      links: [
        "https://github.com/kavinvinayagam",
        "https://mail.google.com/mail/u/0/#inbox?compose=new"
      ],
      photo: "/Kavin.jpg",
    },
    {
      name: "Nalesh Kumar",
      links: [
        "https://github.com/Nalesh18",
        "https://www.linkedin.com/in/nalesh-kumar-b-623806268/",
        "https://mail.google.com/mail/u/0/#inbox?compose=new"
      ],
      photo: "/Nalesh.jpg",
    },
  ];
  return (
    <main className="min-h-screen m-0 p-1 bg-[#CADCFC] ">
      <div className="flex flex-col relative gap-0.5">
        <Navbar />
        <div className="flex-1 mt-4">
          <div className="flex flex-row w-[80%] mx-auto justify-center gap-y-2 gap-x-32 flex-wrap columns-3 mt-8">
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
