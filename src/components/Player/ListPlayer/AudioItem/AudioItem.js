import React from "react";
import "./AudioItem.scss";
import { NavLink, withRouter } from "react-router-dom";

function AudioItem(props) {
  const { audio } = props;
  return (
    <div className="audio-item">
      <NavLink
        to={"?audioId=" + audio._id}
        className={props.playing ? "playing" : ""}
      >
        <span>
          {(audio.part + "").padStart(2, "0")}. {audio.title}
        </span>
        {props.playing && <i class="fas fa-play"></i>}
      </NavLink>
    </div>
  );
}

export default withRouter(AudioItem);
