import React from 'react'
import './Button.scss';

export default function Buttons(props) {



  return (
    <button id={props.id} className={props.className} onClick={props.onClick} >
     {props.text}
    </button>
  )

}