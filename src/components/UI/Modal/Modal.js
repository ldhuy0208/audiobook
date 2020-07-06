import React, { Children } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

function Modal(props) {
  return (
    props.show &&
    ReactDOM.createPortal(
      <div
        className={"back-drop " + (props.show ? "back-drop-show" : "")}
        onClick={(e) =>
          e.target.className == "back-drop back-drop-show" && props.close()
        }
      >
        <div className={"modal " + (props.show ? "modal-show" : "")}>
          {props.children}
        </div>
      </div>,
      document.querySelector("#modal-root")
    )
  );
}

export default Modal;
