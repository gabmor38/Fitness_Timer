import { useEffect, useState } from "react";
import Buttons from "./Button";
import Rounds from "./Rounds";
import Countdown from "./CountDown";


export default function Initialize () {
  
  const [selectTimer, setSelectTimer] = useState();
  const [selectRoundTime, setSelectRoundTime] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [totalTime, setTotalTime ] = useState(0);

  const handleClick = (event) => {
    const buttonId = event.target.id;
    setSelectTimer(buttonId);   
  }

  const getRoundTime = (value) => {
    setSelectRoundTime(value);
  }

  const getSelectedTime = (value) => {
    setSelectedTime(value);
  }
  useEffect(() => {
    const getTime = selectRoundTime * selectedTime;
    setTotalTime(getTime)
  }, [selectRoundTime, selectedTime, selectTimer])

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
      {
        selectRoundTime && selectedTime !== undefined && (
        <div>
        <p>Total Time = { totalTime < 60 ? `${totalTime} seconds` : `${totalTime /60} minutes`}</p>
      </div>
        )
      }
      
      <div>
        {
          selectRoundTime && selectedTime !== undefined && (

            <Countdown totalTime={totalTime}/>
          )
        }
      </div>
    </div>  
    
    </>

  )

}