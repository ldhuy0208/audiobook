import React from "react";
import "./TitleWithLineBottom.scss";
function TitleWithLineBottom(props) {
  return (
    <span className="title-line-bottom">
      <h2>{props.children}</h2>
    </span>
  );
}

export default TitleWithLineBottom;
