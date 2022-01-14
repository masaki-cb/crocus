import React, { FC } from "react";
import { CritiqueRecord } from "../types/Critique";

type Props = {
  critique: CritiqueRecord;
};
const AudioPlayer: FC<Props> = React.memo(({ critique }) => {
  return (
    <div className="card mt-5">
      <div className="card-content">
        <audio
          controls
          src={`./Performance_Recordings_mp3/${critique.pieceID}-${critique.playerID}.mp3`}
          style={{ width: "100%" }}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
});

export default AudioPlayer;
