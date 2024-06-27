import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

export default function SelectTime () {

 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const select = document.getElementById("timer");
  //   const selectedValue = select.value;
  //   console.log("Selected value:", selectedValue);
  
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedTime = parseInt(event.target.timer.value, 10);

    console.log("ST",selectedTime)
    // setSeconds(selectedTime);
    // setIsTimerRunning(true);
  };


  return (

    <form onSubmit={handleSubmit}>
      <select id="timer">
        <option value={20}>20 seconds </option>
        <option value={30}>30 seconds </option>
        <option value={45}>45 seconds </option>
        <option value={60}>1 minute </option>
        <option value={75}>1:15 minutes </option>
        <option value={90}>1:30 minutes </option>
        <option value={7}>1:45 minutes </option>
        <option value={8}>2 minutes </option>
        <option value={9}>02:15 minutes</option>
        <option value={10}>02:30 minutes</option>
        <option value={11}>02:45 minutes</option>
        <option value={12}>3 minutes</option>
      </select>
      <input value="Start" type="submit" />
    </form>
    
  );

}
