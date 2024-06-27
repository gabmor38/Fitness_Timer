import { useState } from "react";
import Buttons from "./Button";
import Rounds from "./Rounds";
import Countdown from "./CountDown";


export default function Initialize () {
  
  const [selectTimer, setSelectTimer] = useState();
  const [selectRoundTime, setSelectRoundTime] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const handleClick = (event) => {
    const buttonId = event.target.id;
    setSelectTimer(buttonId);   
  }

  const getRoundTime = (value) => {
    console.log("roundTime", value);
    setSelectRoundTime(value);
  }

  const getSelectedTime = (value) => {
    console.log("selectedTime", value);
    setSelectedTime(value);
  }

  console.log("Round",selectRoundTime)
  console.log("Time",selectedTime)
  
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
        <Rounds selectTimer={selectTimer} getRounds= {getRoundTime} getSelectedTime={getSelectedTime}/>
        )}
      </div>
      <div>
        {
          selectRoundTime !== undefined && (

            <Countdown roundTime={selectRoundTime}/>
          )
        }
      </div>
    </div>  
    
    </>

  )

}