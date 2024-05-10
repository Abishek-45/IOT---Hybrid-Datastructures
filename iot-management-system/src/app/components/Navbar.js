import NavButtons from "./NavButtons";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] h-[55px] w-[100%] mx-auto rounded-md flex flex-row justify-between">
      <div className="flex flex-row gap-[80px]">
        <div className="mt-2 text-[24px] pl-10">IoT Automation</div>
      </div>
      <div className="mt-3 flex flex-row gap-10 mr-3">
        <NavButtons buttonName={"Home"} url={"/"} />
        <NavButtons buttonName={"Tool"} url={"/tool"} />
        <NavButtons buttonName={"Docs"} url={"/docs"} />
        <NavButtons buttonName={"Team"} url={"/teams"} />
      </div>
    </div>
  );
}
