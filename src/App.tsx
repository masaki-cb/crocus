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

        <div className={`columns`}>
          <div
            className="column  is-two-thirds-desktop"
            style={{ overflowX: "scroll" }}
          >
            <CritiqueTable
              onRowClick={(c) => setCurrentCritique(c)}
              allData={records}
              currentItem={currentCritique}
            />
          </div>

          <div className="column">
            <CritiqueDetail data={currentCritique} />
          </div>
          <div className="column is-half-desktop">
            <ChartZone records={records} currentCritique={currentCritique} />
          </div>
        </div>

        <ChartZone records={records} currentCritique={currentCritique} />
      </div>
    </div>
  );
};
export default App;
