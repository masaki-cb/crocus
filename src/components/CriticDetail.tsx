import { useState } from "react";

type Data = {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
};
type Props = { data: Data };
const CriticDetail = ({ data }: Props) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4">criticID: {data.criticID}</p>
        <p className="is-6">playerID: {data.playerID}</p>
        <p className="is-6">pieceID: {data.pieceID}</p>
        <p>{data.content}</p>
        <a href={`/Music_Score/${data.pieceID}.pdf`} target="_blank">Piece PDF</a>
        <audio
          controls
          src={`Performance_Recordings_mp3/${data.pieceID}-${data.playerID}.mp3`}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
};
export default CriticDetail;
