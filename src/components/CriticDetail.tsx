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
    <div className="card" style={{height:"100%"}}>
      <div className="card-content">
        <p className="title is-4">criticID: {data.criticID}</p>
        <p className="is-6">playerID: {data.playerID}</p>
        <p className="is-6">pieceID: {data.pieceID}</p>
        <p>{data.content}</p>
        <object
          data={`Music_Score/${data.pieceID}.pdf`}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            <a
              href={`Music_Score/${data.pieceID}.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Download Piece PDF
            </a>
          </p>
        </object>
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
