import React from "react";
import "./PlayerControl.scss";

function PlayerControl({audioLink}) {
  console.log(audioLink)
  return (
    <div className="player-control">
      <audio controls key={audioLink}>
        <source 
          src={audioLink}
          type="audio/mpeg"
        />
      </audio>
    </div>
    
  );
}

export default PlayerControl;
