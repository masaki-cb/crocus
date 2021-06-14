import { useState } from "react";

import CritiqueTable from "./components/CritiqueTable";
import CritiqueDetail from "./components/CritiqueDetail";
import jsonData from "./data.json";
import styles from "./App.module.scss";
import BarChart from "./components/BarChart";
import { CritiqueRecord } from "./types";

const App = () => {
  const records:CritiqueRecord[] = jsonData;
  const [currentCritique, setCurrentCritique] = useState(records[0]);

  return (
    <div className="container">
      <div className="section pb-0">
        <h1 className="title">Music Critic Dataset</h1>
      </div>
      <div className="section">
        <CritiqueTable
          onRowClick={(c) => setCurrentCritique(c)}
          allData={records}
          currentItem={currentCritique}
        />
        <div className={`columns ${styles.columns}`}>
          <div
            className="column is-two-thirds-desktop"
            style={{ overflowX: "scroll" }}
          >
            <BarChart values={records.map(r=>r.Q1).sort()} targetVal={records[0].Q1} itemName="Q1"/>
          </div>
          <div className="column">
            <CritiqueDetail data={currentCritique} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
