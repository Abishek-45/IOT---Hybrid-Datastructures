import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

export default function teamCard({ name, links, photosrc }) {
  return (
    <div class="relative  text-center flex flex-col justify-end m-5 h-[285px] w-[215px] bg-gradient-to-tl from-[#08134e] to-[#03379e] rounded-md shadow-2xl hover:scale-105 transition duration-150">
      <div class="relative origin-center flex-1">
        <Image className="rounded-full mx-auto mt-[40px]" src={photosrc} height={125} width={125}/>
      </div>
      <div className="p-5">
        <div class=" text-[22px] mb-4">{name}</div>
        <div class=" flex flex-row gap-8 mt-2 mx-auto justify-center">
          <a href={links[0]} target="_blank">
            <FaGithub class="h-[20px] w-[20px] hover:scale-[1.1] transition duration-150" />
          </a>
          <a href={links[1]} target="_blank">
            <FaLinkedin class="h-[20px] w-[20px]  hover:scale-[1.1] transition duration-150" />
          </a>
          <a href={links[2]} target="_blank">
            <BiLogoGmail class="h-[20px] w-[20px] hover:scale-[1.1] transition duration-150" />
          </a>
        </div>
      </div>
    </div>
  );
}
