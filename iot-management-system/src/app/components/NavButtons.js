"use client"

export default function NavButtons({buttonName, url}){
    return (
        <button className="relative text-center text-lg text-white h-fit rounded-md before:content-[''] before:h-[2px] before:absolute before:bottom-0 before:w-full before:bg-white before:scale-0 before:transition before:duration-200 hover:before:scale-100"
        onClick={()=>window.location.href = url}>
            {buttonName}
        </button>
    )
}