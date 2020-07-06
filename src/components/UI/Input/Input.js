import React from "react";
import "./Input.scss";

function Input(props) {
  return (
    <div className="input-box">
      <input
        className={"input-normal " + (props.textarea ? "textarea" : "")}
        
        {...props}
      />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  );
}

export default Input;
