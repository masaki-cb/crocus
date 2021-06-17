import { CritiqueRecord } from "../../types/Critique";
import styles from "./CritiqueDetail.module.scss";

type Props = { data: CritiqueRecord };
const CritiqueDetail = ({ data }: Props) => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-content" style={{ height: "70vh" }}>
        <h2 className="title is-4">批評詳細</h2>
        <p className="is-size-6">
          <span className="mr-2">曲ID: {data.pieceID}, </span>
          <span className="mr-2">演奏者ID: {data.playerID}, </span>
          <span className="mr-2">講評者ID: {data.criticID}</span>
        </p>
        <div
          className={`mt-5`}
          style={{
            overflowY: "scroll",
            height: "22.5rem",
            backgroundColor: "#f9f9f9s",
          }}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: data.content.replaceAll("\n", "<br />"),
            }}
            className="has-text-justified"
          />
          <audio
            controls
            src={`./Performance_Recordings_mp3/${data.pieceID}-${data.playerID}.mp3`}
            className={`${styles.audio} mt-5`}
            style={{ width: "100%" }}
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </div>
    </div>
  );
};
export default CritiqueDetail;
