import React from 'react';
//import Buttons from './Button';

export default function Timer (props) {

  console.log("P",props.selectTimer)

  const amrap = props.selectTimer === '1';
  const forTime = props.selectTimer === '2';
  



  return (
    <>
    <div>
      {amrap && (
        <div>
          <h2>AMRAP</h2>
          <p>As many rounds as possible in</p>
          <input type="number" />
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


    </div>
    
      
    
    </>
    
  )
}