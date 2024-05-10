import { MdRouter } from "react-icons/md";

export default function RouterComp({name}){
  return(
    <div className="flex flex-col">
      <MdRouter />
      <div>{name}</div>
    </div>
  )
}