import React from 'react'
import './ButtonCircle.scss'
function ButtonCircle(props) {
  
  return (
    <button className={"button-circle " + (props.addclass?props.addclass:'')} {...props}></button>
  )
}

export default ButtonCircle
