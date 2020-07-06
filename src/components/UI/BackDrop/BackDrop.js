import React from 'react'
import './BackDrop.scss'
function BackDrop(props) {
  return (
    <div className={"back-drop " + (props.show?"back-drop-show":'')} onClick={(e)=>e.target.className=="back-drop back-drop-show" && props.close()}>
      {props.children}
    </div>
  )
}

export default BackDrop
