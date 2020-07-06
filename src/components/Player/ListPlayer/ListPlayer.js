import React from "react";
import AudioItem from "./AudioItem/AudioItem";
import { withRouter } from "react-router-dom";
import './ListPlayer.scss'
function ListPlayer(props) {
  const { listAudio } = props;
  
  return (
    <div className="part-audio">
      
      { listAudio && listAudio.map((audio, index) =>  (
        <AudioItem playing={props.playingId == audio._id} key={audio.id} order={index+1} audio={audio} />
      ))}
    </div>
  );
}

export default withRouter( ListPlayer);
