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
    <>
      <div className="container">
        <div className="section pb-0">
          <h1 className="title">CROCUS dataset</h1>
          <p>CRitique dOCUmentS of music performance</p>
        </div>
        <div className="section">
          <div className={`columns`}>
            <div className="column  is-8">
              <CritiqueTable
                onRowClick={(c) => setCurrentCritique(c)}
                allData={records}
                currentItem={currentCritique}
              />
            </div>
            <div className="column">
              <CritiqueDetail data={currentCritique} />
            </div>
          </div>
          <div className={`columns`}>
            <div className="column is-7">
              <ChartZone records={records} currentCritique={currentCritique} />
            </div>
            <div className="column ">
              <div className="card">
                <div className="card-content">
                  <object
                    data={`./Music_Score/${currentCritique.pieceID}.pdf`}
                    type="application/pdf"
                    width="100%"
                    height="500px"
                  >
                    <p>
                      <a
                        href={`./Music_Score/${currentCritique.pieceID}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Piece PDF
                      </a>
                    </p>
                  </object>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </>
  );
};
export default App;
