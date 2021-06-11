import { useState } from "react";

import CritiqueTable from "./components/CritiqueTable";
import CritiqueDetail from "./components/CritiqueDetail";
import jsonData from "./data.json";
import styles from "./App.module.scss";

const App = () => {
  const data = jsonData;
  const [currentCritique, setCurrentCritique] = useState(data[0]);

  return (
    <div className="container">
      <div className="section pb-0">
        <h1 className="title">Music Critic Dataset</h1>
      </div>
      <div className="section">
        <div className={`columns ${styles.columns}`}>
          <div
            className="column is-two-thirds-desktop"
            style={{ overflowX: "scroll" }}
          >
            <CritiqueTable
              onRowClick={(c) => setCurrentCritique(c)}
              allData={data}
              currentItem={currentCritique}
            />
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
