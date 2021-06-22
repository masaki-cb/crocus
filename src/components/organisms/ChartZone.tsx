import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { CritiqueRecord, CritiqueQuestionID } from "../../types/Critique";
import BarChart from "../molecules/BarChart";
import styles from "./ChartZone.module.scss";
import { critiqueQuestion, critiqueQuestionIDs } from "../../consts/Critique";
import { getCritiqueQuestionDescription } from "../../utils/Critique";

const ChartZone = ({
  currentCritique,
  records,
  lang,
}: {
  currentCritique: CritiqueRecord;
  records: CritiqueRecord[];
  lang: "ja" | "en";
}) => {
  const [currentChart, setCurrentChart] = useState<CritiqueQuestionID | "">("");
  const [, i18n] = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const renderContent = () => {
    if (currentChart === "") {
      return critiqueQuestionIDs.map((item) => (
        <div
          onClick={() => setCurrentChart(item)}
          className={`column is-half-mobile is-half-tablet is-one-third-desktop  clickable is-flex-direction-column ${styles.clickable}`}
          key={item}
        >
          <h3 className="title is-7 m-0 pb-1">
            {item}:{critiqueQuestion(i18n)[item].bodyShort}
          </h3>
          <BarChart
            values={records.map((r) => r[item]).sort()}
            targetVal={currentCritique[item]}
            itemName={item}
          />
        </div>
      ));
    } else {
      return (
        <div className="column">
          <h3 className="title is-5 m-0 pb-1 is-flex">
            <span
              onClick={() => {
                setCurrentChart("");
              }}
              className="clickable"
            >
              <FontAwesomeIcon icon={faTimes} className="mr-3" />
            </span>
            <span style={{ whiteSpace: "nowrap" }}>{currentChart}:</span>
            <div className="is-flex is-flex-direction-column">
              <span>{critiqueQuestion(i18n)[currentChart].body}</span>
              <span className="is-size-7">
                {getCritiqueQuestionDescription(critiqueQuestion(i18n)[currentChart])}
              </span>
            </div>
          </h3>
          <BarChart
            values={records.map((r) => r[currentChart]).sort()}
            targetVal={currentCritique[currentChart]}
            itemName={currentChart}
          />
        </div>
      );
    }
  };
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-content">
        <div className="columns is-multiline is-mobile">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ChartZone;
