import { CritiqueRecord } from "../../types/Critique";
import styles from "./CritiqueDetail.module.scss";

type Props = { data: CritiqueRecord };
const CritiqueDetail = ({ data }: Props) => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div
        className="card-content"
        style={{ height: "100%", overflowY: "scroll" }}
      >
        <h2 className="title is-4">Critique Detail</h2>
        <p className="is-size-6">
          <span className="mr-2">曲ID: {data.pieceID}, </span>
          <span className="mr-2">演奏者ID: {data.playerID}, </span>
          <span className="mr-2">講評者ID: {data.criticID}</span>
        </p>

        <p
          dangerouslySetInnerHTML={{
            __html: data.content.replaceAll("\n", "<br />"),
          }}
          className="mt-5"
        />
        <audio
          controls
          src={`./Performance_Recordings_mp3/${data.pieceID}-${data.playerID}.mp3`}
          className={`${styles.audio} mt-5`}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <div className="mt-5">
          {/* <object
            data={`./Music_Score/${data.pieceID}.pdf`}
            type="application/pdf"
            width="100%"
            height="500px"
          > */}
            <p>
              <a
                href={`./Music_Score/${data.pieceID}.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Download Piece PDF
              </a>
            </p>
          {/* </object> */}
        </div>
      </div>
    </div>
  );
};
export default CritiqueDetail;
