import React, { FC } from "react";
import { CritiqueRecord } from "../types/Critique";
import {useParams} from "react-router-dom";

type Props = {
  critique: CritiqueRecord;
};
const AudioPlayer: FC<Props> = React.memo(({ critique }) => {
  const {id} = useParams<{id: string}>();
  try{
    const records: any = require(`../../public/${id}/Performance_Recordings_mp3/${critique.pieceID}-${critique.playerID}.mp3`);
    return (
        <div className="card mt-5">
          <div className="card-content">
            <audio
                controls
                src={`${process.env.PUBLIC_URL}/${id}/Performance_Recordings_mp3/${critique.pieceID}-${critique.playerID}.mp3`}
                style={{ width: "100%" }}
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </div>
    );
  }catch {
    return(
        <>
        </>
    )
  }

});

export default AudioPlayer;
