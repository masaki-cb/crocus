import {useState} from "react";
import {useParams} from "react-router-dom";
//import jsonData from "./data/oboe/data.json";
import {CritiqueRecord} from "./types/Critique";
import CritiqueTable from "./components/organisms/CritiqueTable";
import CritiqueDetail from "./components/organisms/CritiqueDetail";
import ChartZone from "./components/organisms/ChartZone";
import Navbar from "./components/organisms/Navbar";

import AboutThis from "./components/AboutThis";
import LinkDataset from "./components/LinkDataset";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import ScoreViewer from "./components/ScoreViewer";
import {usePersist} from "./components/organisms/usePersist";
import TopTitle from "./components/TopTitle";
import Icon from "./CROCUS_small.png";
import TextList from "./components/TextList";


const App = () => {
  const {id} = useParams<{id: string}>();

  const records: CritiqueRecord[] = require(`./data/${id}/data.json`);

  const [currentCritique, setCurrentCritique] = useState(records[0]);
  const [lang, setLang] = usePersist("lang","en",["en","ja"]);

  const description = require(`./data/${id}/description.json`);


  return (
    <>
      <Navbar lang={lang} setLang={(p) => setLang(p)} iconImg={Icon} />
      <div className="section pb-0">
        <div className="container">
          <TopTitle title={description.title}  />
          <AboutThis aboutThis={description.aboutThis}  />
          <div className="content">
            <LinkDataset linkDataset={description.linkDataset}  />
          </div>
          {description.references !=null &&
          <div className="mb-0 content">
            <TextList title={description.references.title} testList={description.references.textList} />
          </div>
          }
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column  is-8">
              <CritiqueTable
                onRowClick={(c) => setCurrentCritique(c)}
                allData={records}
                currentItem={currentCritique}
                lang={lang}
              />
            </div>
            <div className="column">
              <CritiqueDetail data={currentCritique} lang={lang} />
              <AudioPlayer critique={currentCritique} />
            </div>
          </div>
          <div className={`columns`}>
            <div className="column is-7">
              <ChartZone
                records={records}
                currentCritique={currentCritique}
                lang={lang}
              />
            </div>
            <div className="column ">
              <ScoreViewer critique={currentCritique} />
            </div>
          </div>
        </div>
      </div>
      <Footer projectMembers={description.projectMembers} acknowledgment={description.acknowledgment}/>
    </>
  );
};
export default App;
