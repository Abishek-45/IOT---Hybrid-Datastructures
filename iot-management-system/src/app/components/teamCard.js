import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function teamCard() {
  return (
    <div class="absolute p-5 text-center flex flex-col justify-end left-1/4 top-1/3 h-[200px] w-[300px] rounded-xl bg-[#062F80] shadow-2xl">
      <div class="absolute origin-center -top-1/4 left-1/3 rounded-full bg-white border-black border-2 h-[110px] w-[110px]"></div>
      <div class=" text-[28px] mb-4">Thanus Kumaar A</div>
      <div class=" flex flex-row gap-8 mt-2 mx-auto">
        <div>
          <FaGithub class="h-[30px] w-[30px]" />
        </div>
        <div>
          <FaLinkedin class="h-[30px] w-[30px]" />
        </div>
        <div>
          <BiLogoGmail class="h-[30px] w-[30px]" />
        </div>
      </div>
    </div>
  );
}
