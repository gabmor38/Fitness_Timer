import React from 'react';


export default function Rounds (props) {

  console.log("P",props.selectTimer)

  const amrap = props.selectTimer === '1';
  const forTime = props.selectTimer === '2';
  

  const inputValue = (e) => {
    props.getRounds(e.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedTime = parseInt(event.target.timer.value, 10);
    props.getSelectedTime(selectedTime)

  };

 



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
            <h3>Time cap: </h3>
            <input type="number" onChange={inputValue}/>
          </div>
         
        </div>
        
      )}

      <div>

        <form onSubmit={handleSubmit}>
          <select id="timer">
            <option value={0}>0</option>
            <option value={20}>20 seconds </option>
            <option value={30}>30 seconds </option>
            <option value={45}>45 seconds </option>
            <option value={60}>1 minute </option>
            <option value={75}>1:15 minutes </option>
            <option value={90}>1:30 minutes </option>
            <option value={105}>1:45 minutes </option>
            <option value={120}>2 minutes </option>
            <option value={135}>02:15 minutes</option>
            <option value={150}>02:30 minutes</option>
            <option value={165}>02:45 minutes</option>
            <option value={180}>3 minutes</option>
            <option value={195}>03:15 minutes</option>
            <option value={210}>03:30 minutes</option>
            <option value={225}>03:45 minutes</option>
            <option value={240}>4 minutes</option>
            <option value={255}>04:15 minutes</option>
            <option value={270}>04:30 minutes</option>
            <option value={285}>04:45 minutes</option>
            <option value={300}>5 minutes</option>
            
          </select>
          <input value="Start" type="submit" />
        </form>
      </div>

    </div>
    </>
    
  )
}