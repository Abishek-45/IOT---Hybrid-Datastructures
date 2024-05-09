import { TfiMenu } from "react-icons/tfi";

export default function Navbar(){
    return (
        <div className="bg-gradient-to-r px-3 from-[#08134e] to-[#03379e] h-[61px] w-[99%] mx-auto mt-2 rounded-md flex flex-row justify-between">
            <div className="flex flex-row gap-[80px]">
                <div className=""><TfiMenu className="h-7 w-7 mt-3.5 ml-5" /></div>
                <div className="mt-3 text-[25px]">
                    IoT Automation
                </div>
            </div>
            <div className="mr-5 mt-3.5 text-[21px]">TEAM</div>
        </div>
    )
}