import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

export default function clock () {

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const select = document.getElementById("timer");
    const selectedValue = select.value;
    console.log("Selected value:", selectedValue);
  }

  return (

    <form onSubmit={handleSubmit}>
      <select id="timer">
        <option value={1}>20 seconds </option>
        <option value={2}>30 seconds </option>
        <option value={3}>45 seconds </option>
        <option value={4}>1 minute </option>
        <option value={5}>1:15 minutes </option>
        <option value={6}>1:30 minutes </option>
        <option value={7}>1:45 minutes </option>
        <option value={8}>2 minutes </option>
        <option value={9}>02:15 minutes</option>
        <option value={10}>02:30 minutes</option>
        <option value={11}>02:45 minutes</option>
        <option value={12}>3 minutes</option>
      </select>
      <input value="Start" type="submit" />
    </form>


  // <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
  //   <InputLabel id="demo-select-small-label"></InputLabel>
  //   <Select
  //     labelId="demo-select-small-label"
  //     id="demo-select-small"
  //     value=""
  //     label=""
  //   >
  //   <MenuItem value={1}>20 seconds</MenuItem>
  //   <MenuItem value={2}>30 seconds</MenuItem>
  //   <MenuItem value={3}>45 seconds</MenuItem>
  //   <MenuItem value={4}>1 minute</MenuItem>
  //   <MenuItem value={5}>01:15 minutes</MenuItem>
  //   <MenuItem value={6}>1:30 minutes</MenuItem>
  //   <MenuItem value={7}>01:45 minutes</MenuItem>
  //   <MenuItem value={8}>2 minutes</MenuItem>
  //   <MenuItem value={9}>02:15 minutes</MenuItem>
  //   <MenuItem value={10}>02:30 minutes</MenuItem>
  //   <MenuItem value={11}>02:45 minutes</MenuItem>
  //   <MenuItem value={12}>3 minutes</MenuItem>
  //   </Select>

  // </FormControl>
    
  );

}
