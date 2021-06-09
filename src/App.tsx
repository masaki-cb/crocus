import { useState } from "react";

import CriticTable from "./components/CriticTable";
import CriticDetail from "./components/CriticDetail";
import jsonData from "./data.json";
import styles from "./App.module.scss";

type Data = {
  pieceID: string;
  playerID: string;
  criticID: string;
  critiqueFileName: string;
  content: string;
};

const App = () => {
  const data: Data[] = jsonData;
  const [currentCritic, setCurrentCritic] = useState(data[0]);

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">Music Critic Dataset</h1>
      </div>
      <div className="section">
        <div className="columns">
        <div className="column">
            <CriticDetail data={currentCritic} />
          </div>
          <div className="column">
            <CriticTable
              onRowClick={(critic) => setCurrentCritic(critic)}
              allData={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
