import NavButtons from "./NavButtons";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] h-[61px] w-[99%] mx-auto mt-1 rounded-md flex flex-row justify-between">
      <div className="flex flex-row gap-[80px]">
        <div className="mt-3 text-[25px] pl-5">IoT Automation</div>
      </div>
      <div className="mt-3 flex flex-row gap-4 mr-3">
        <NavButtons buttonName={"Home"} url={"/"} />
        <NavButtons buttonName={"Tool"} url={"/tool"} />
        <NavButtons buttonName={"Docs"} url={"/docs"} />
        <NavButtons buttonName={"Team"} url={"/teams"} />
      </div>
    </div>
  );
}
