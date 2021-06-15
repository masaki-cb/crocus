import { useState } from "react";
import { CritiqueRecord, CritiqueItemName } from "../types";
import BarChart from "./BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import styles from './ChartZone.module.scss'
export const CritiqueItemNames: CritiqueItemName[] = [
  "Q1",
  "Q2",
  "Q3",
  "Q4",
  "Q5",
  "Q6",
  "Q7",
  "Q8",
  "Q9",
];

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
          <BarChart
            values={records.map((r) => r[item]).sort()}
            targetVal={currentCritique[item]}
            itemName={item}
          />
        </div>
      ));
    } else {
      return (
        <div className='column'>
          <div
            onClick={() => {
              setCurrentChart("");
            }}
            className="clickable"
          >
            <FontAwesomeIcon icon={faTimes} className='is-size-3'/>
          </div>
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
