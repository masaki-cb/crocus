import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import jsonData from "./data.json";
import { CritiqueRecord } from "./types/Critique";
import CritiqueTable from "./components/organisms/CritiqueTable";
import CritiqueDetail from "./components/organisms/CritiqueDetail";
import ChartZone from "./components/organisms/ChartZone";
import Navbar from "./components/organisms/Navbar";

import PageTitle from "./components/PageTitle";
import AboutThis from "./components/AboutThis";
import LinkDataset from "./components/LinkDataset";
import References from "./components/References";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import ScoreViewer from "./components/ScoreViewer";

const App = () => {
  const records: CritiqueRecord[] = jsonData;

  const [currentCritique, setCurrentCritique] = useState(records[0]);
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState<"en" | "ja">("en");

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.title = "CROCUS: " + t("音楽演奏講評データセット");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, i18n]);

  return (
    <>
      <Navbar lang={lang} setLang={(p) => setLang(p)} />
      <div className="section pb-0">
        <div className="container">
          <PageTitle />
          <AboutThis />
          <div className="content">
            <LinkDataset />
          </div>
          <div className="mb-0 content">
            <References />
          </div>
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
      <Footer />
    </>
  );
};
export default App;
