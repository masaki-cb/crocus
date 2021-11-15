import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { CritiqueRecord } from "../../types/Critique";
import tagParser from "../../utils/tagParser";
import styles from "./CritiqueDetail.module.scss";

type Props = { data: CritiqueRecord; lang: "ja" | "en" };
const CritiqueDetail = ({ data, lang }: Props) => {
  const [t, i18n] = useTranslation();
  const [isTagActive, setIsTagActive] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-content" style={{ height: "70vh" }}>
        <h2 className="title is-4">{t("講評文書")}</h2>
        <p className="is-size-6">
          <span className="mr-2">
            {t("曲ID")}: {data.pieceID},
          </span>
          <span className="mr-2">
            {t("演奏者ID")}: {data.playerID},
          </span>
          <span className="mr-2">
            {t("講評者ID")}: {data.criticID}
          </span>
        </p>
        <div className={`mt-5 ${styles.cardContentBody}`}>
          {isTagActive ? (
            <p
              dangerouslySetInnerHTML={{
                __html: tagParser(
                  data.taggedContent.replaceAll("\n", "<br />")
                ),
              }}
              className="has-text-justified"
            />
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html: data.content.replaceAll("\n", "<br />"),
              }}
              className="has-text-justified"
            />
          )}

          <div className="is-flex is-align-items-center is-justify-content-space-around">
            {lang !== "ja" ? (
              <p >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://translate.google.com/?hl=ja&sl=ja&tl=en&text=${encodeURIComponent(
                    data.content
                  )}&op=translate`}
                >
                  Translate on Google
                  <FontAwesomeIcon className="mx-1" icon={faExternalLinkAlt} />
                </a>
              </p>
            ) : (
              <></>
            )}
            <button
              className="button"
              onClick={() => setIsTagActive(!isTagActive)}
            >
              {isTagActive ? t("タグを非表示") : t("タグを表示")}
            </button>
          </div>
        </div>
        <audio
          controls
          src={`./Performance_Recordings_mp3/${data.pieceID}-${data.playerID}.mp3`}
          className={`mt-5`}
          style={{ width: "100%" }}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
};
export default CritiqueDetail;
