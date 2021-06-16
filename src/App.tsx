import { useState } from "react";

import jsonData from "./data.json";
import styles from "./App.module.scss";
import { CritiqueRecord } from "./types/Critique";
import CritiqueTable from "./components/organisms/CritiqueTable";
import CritiqueDetail from "./components/organisms/CritiqueDetail";
import ChartZone from "./components/organisms/ChartZone";

const App = () => {
  const records: CritiqueRecord[] = jsonData;
  const [currentCritique, setCurrentCritique] = useState(records[0]);

  return (
    <div className="container">
      <div className="section pb-0">
        <h1 className="title">CROCUS dataset</h1>
        <p>CRitique dOCUmentS of music performance</p>
      </div>
      <div className="section">
        <CritiqueTable
          onRowClick={(c) => setCurrentCritique(c)}
          allData={records}
          currentItem={currentCritique}
        />
        <div className={`columns mt-5 ${styles.columns}`}>
          <div className="column is-two-thirds-desktop">
            <ChartZone records={records} currentCritique={currentCritique} />
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
