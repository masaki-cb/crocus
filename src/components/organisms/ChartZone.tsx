import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { CritiqueRecord, CritiqueItemName } from "../../types/Critique";
import BarChart from "../molecules/BarChart";
import styles from "./ChartZone.module.scss";
import {
  CritiqueItemDescription,
  CritiqueItemNames,
} from "../../consts/Critique";

const ChartZone = ({
  currentCritique,
  records,
}: {
  currentCritique: CritiqueRecord;
  records: CritiqueRecord[];
}) => {
  const [currentChart, setCurrentChart] = useState<CritiqueItemName | "">("");
  const renderContent = () => {
    if (currentChart === "") {
      return CritiqueItemNames.map((item) => (
        <div
          onClick={() => setCurrentChart(item)}
          className={`column is-one-third clickable ${styles.clickable}`}
        >
          <h3 className="title is-6 m-0 pb-1">{item}</h3>
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
          <h3 className="title is-5 m-0 pb-1">
            <span
              onClick={() => {
                setCurrentChart("");
              }}
              className="clickable"
            >
              <FontAwesomeIcon icon={faTimes} className="mr-5" />
            </span>
            <span>
              {currentChart}:{CritiqueItemDescription[currentChart].question}
            </span>
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
    <div className="card">
      <div className="card-content">
        <div className="columns is-multiline ">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ChartZone;
