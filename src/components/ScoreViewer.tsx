import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { CritiqueRecord } from "../types/Critique";

type Props = {
  critique: CritiqueRecord;
};
const ScoreViewer: FC<Props> = React.memo(({ critique }) => {
  const [t] = useTranslation();

  return (
    <div className="card">
      <div className="card-content">
        <object
          data={`./Music_Score/${critique.pieceID}.pdf`}
          type="application/pdf"
          width="100%"
          height="500px"
        >
          <p>
            <a
              href={`./Music_Score/${critique.pieceID}.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              {t("楽譜をダウンロード")}
            </a>
          </p>
        </object>
      </div>
    </div>
  );
});

export default ScoreViewer;
