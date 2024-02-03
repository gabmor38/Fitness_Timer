import { useState } from "react";
import Buttons from "./Button";
import Timer from "./Timer";


export default function Initialize () {
  
  const [selectTimer, setSelectTimer] = useState();

  const handleClick = (event) => {
    const buttonId = event.target.id;
    setSelectTimer(buttonId)
     
  }

  console.log("T",selectTimer)
  return (
    <>
    <div className="mainContainer">
      <div>
        <h2> Select timer</h2>
        <Buttons id={'1'} className={"orange"} text={"amrap".toUpperCase()} onClick={ handleClick}/>
        <Buttons id={'2'} className={"blue"} text={"for time".toUpperCase()} onClick={ handleClick}/>
        <Buttons id={'3'} className={"fuscia"} text={"Emom".toUpperCase()} onClick={ handleClick}/>
        <Buttons id={'4'} className={"green"} text={"Tabata".toUpperCase()} onClick={ handleClick}/>
      </div>
      <div>
        {selectTimer !== undefined && (
        <Timer selectTimer={selectTimer}/>
        )}
      </div>
    </div>  
    
    </>

  )

}