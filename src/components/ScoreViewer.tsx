import React, { FC,useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { CritiqueRecord } from "../types/Critique";
import {useParams} from "react-router-dom";

type Props = {
  critique: CritiqueRecord;
};
const ScoreViewer: FC<Props> = React.memo(({ critique }) => {
  const {id} = useParams<{id: string}>();
  const [t] = useTranslation();


  try {
    const records: any = require(`../../public/${id}/Music_Score/${critique.pieceID}.pdf`);
    // do stuff
    return (
        <div className="card">
          <div className="card-content">
            <object
                data={`${process.env.PUBLIC_URL}/${id}/Music_Score/${critique.pieceID}.pdf`}
                type="application/pdf"
                width="100%"
                height="500px"
            >
              <p>
                <a
                    href={`${process.env.PUBLIC_URL}/${id}/Music_Score/${critique.pieceID}.pdf`}
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
  } catch (ex) {
    return(
        <>
        </>
    )
  }


});

export default ScoreViewer;
