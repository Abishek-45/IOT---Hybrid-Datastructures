import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

export default function teamCard({ name, links, photosrc }) {
  return (
    <div class="relative  text-center flex flex-col justify-end m-5 h-[330px] w-[230px] rounded-2xl bg-[#062F80] shadow-2xl hover:scale-105 transition duration-150">
      <div class="relative origin-center rounded-t-2xl-  flex-1">
        <Image className="rounded-t-2xl" src={photosrc}  fill />
      </div>
      <div className="p-5">
        <div class=" text-[22px] mb-4">{name}</div>
        <div class=" flex flex-row gap-8 mt-2 mx-auto justify-center">
          <a href={links[0]}>
            <FaGithub class="h-[20px] w-[20px] hover:scale-[1.1] transition duration-150" />
          </a>
          <a href={links[1]}>
            <FaLinkedin class="h-[20px] w-[20px]  hover:scale-[1.1] transition duration-150" />
          </a>
          <a href={links[2]}>
            <BiLogoGmail class="h-[20px] w-[20px] hover:scale-[1.1] transition duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
}
