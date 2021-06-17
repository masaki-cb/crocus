import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { CritiqueRecord, CritiqueQuestionID } from "../../types/Critique";
import BarChart from "../molecules/BarChart";
import styles from "./ChartZone.module.scss";
import { critiqueQuestion, critiqueQuestionIDs } from "../../consts/Critique";
import { getCritiqueQuestionDescription } from "../../utils/Critique";

const ChartZone = ({
  currentCritique,
  records,
}: {
  currentCritique: CritiqueRecord;
  records: CritiqueRecord[];
}) => {
  const [currentChart, setCurrentChart] = useState<CritiqueQuestionID | "">("");
  const renderContent = () => {
    if (currentChart === "") {
      return critiqueQuestionIDs.map((item) => (
        <div
          onClick={() => setCurrentChart(item)}
          className={`column is-one-third clickable is-flex-direction-column ${styles.clickable}`}
          key={item}
        >
          <h3 className="title is-7 m-0 pb-1">
            {item}:{critiqueQuestion[item].bodyShort}
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
              <span>{critiqueQuestion[currentChart].body}</span>
              <span className="is-size-7">
                {getCritiqueQuestionDescription(critiqueQuestion[currentChart])}
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
        <div className="columns is-multiline ">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ChartZone;
