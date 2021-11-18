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
    <div className="card">
      <div className="card-content">
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
          {/* 評価本文 */}
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
        </div>
        {isTagActive && (
          <>
            <p>
              <span style={{ padding: "0.17rem", color: "#b757aa" }}>■</span>
              GSI: Giving subjective information
            </p>
            <p>
              <span style={{ padding: "0.17rem", color: "#b75e57" }}>■</span>
              GOI: Giving objective information
            </p>
            <p>
              <span style={{ padding: "0.17rem", color: "#b7ae57" }}>■</span>AQ:
              Asking question
            </p>
            <p>
              <span style={{ padding: "0.17rem", color: "#62b757" }}>■</span>GF:
              Giving feedback
            </p>
            <p>
              <span style={{ padding: "0.17rem", color: "#57b2b7" }}>■</span>GP:
              Giving practice strategy
            </p>
            <p>
              <span style={{ padding: "0.17rem", color: "#5766b7" }}>■</span>GA:
              Giving advice
            </p>
          </>
        )}

        <div className="mt-5 is-flex is-align-items-center ">
          {lang !== "ja" ? (
            <p className="mr-5">
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
            className="button is-primary"
            onClick={() => setIsTagActive(!isTagActive)}
          >
            {isTagActive ? t("タグを非表示") : t("タグを表示")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CritiqueDetail;
