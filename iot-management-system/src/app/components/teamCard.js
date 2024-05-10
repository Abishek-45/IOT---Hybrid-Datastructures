import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

export default function teamCard({ name, links, photosrc }) {
  return (
    <div class="relative p-5 text-center flex flex-col justify-end m-5 h-[200px] w-[300px] rounded-xl bg-[#062F80] bg-gradient-to-tr from-[#08134e] to-[#03379e] shadow-2xl group hover:scale-105 transition duration-150">
      <div class="absolute origin-center -top-1/4 left-1/3 rounded-full h-[110px] w-[110px]">
        <Image className="rounded-full p-1 scale-110 transition duration-150 group-hover:scale-[115%]" src={photosrc} fill />
      </div>
      <div class=" text-[28px] mb-4">{name}</div>
      <div class=" flex flex-row gap-8 mt-2 mx-auto">
        <a href={links[0]}>
          <FaGithub class="h-[30px] w-[30px] hover:scale-[1.1] transition duration-150" />
        </a>
        <a href={links[1]}>
          <FaLinkedin class="h-[30px] w-[30px] hover:scale-[1.1] transition duration-150" />
        </a>
        <a href={links[2]}>
          <BiLogoGmail class="h-[30px] w-[30px] hover:scale-[1.1] transition duration-150" />
        </a>
      </div>
    </div>
  );
}
