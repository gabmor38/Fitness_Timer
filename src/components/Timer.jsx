import React from 'react';
//import Buttons from './Button';
import Clock from "./clock"




export default function Timer (props) {

  console.log("P",props.selectTimer)

  const amrap = props.selectTimer === '1';
  const forTime = props.selectTimer === '2';
  

  const inputValue = (e) => {
    console.log("Ivalue", e.target.value)
    props.getRounds(e.target.value)
  }


  return (
    <>
    <div>
      {amrap && (
        <div>
          <h2>AMRAP</h2>
          <p>As many rounds as possible in</p>
          <input type="number" onChange={inputValue}/>
        </div>
      )}
      {forTime && (
        <div>
          <h2>FOR TIME</h2>
          <p>As fast as possible for time </p>
          <div style={{display: 'flex', alignItems:'center'}}> 
            <h3>Time cap:</h3>
            <input type="number"/>
          </div>
         
        </div>
        
      )}
      <div>
        <Clock />
      </div>
      
   


    </div>
    
      
    
    </>
    
  )
}