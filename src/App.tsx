import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import jsonData from "./data.json";
import { CritiqueRecord } from "./types/Critique";
import CritiqueTable from "./components/organisms/CritiqueTable";
import CritiqueDetail from "./components/organisms/CritiqueDetail";
import ChartZone from "./components/organisms/ChartZone";
import Navbar from "./components/organisms/Navbar";
import Icon from "./CROCUS_small.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
          <h1 className="title is-size-6-mobile is-size-5-touch is-size-3-desktop  ">
            <figure
              className="image is-inline-block is-48x48"
              style={{ verticalAlign: "middle" }}
            >
              <img src={Icon} alt="flower icon" />
            </figure>
            <span style={{ verticalAlign: "middle" }}>
              <span style={{ whiteSpace: "nowrap" }}>
                CROCUS (CRitique dOCUmentS):
              </span>
              <span
                style={{ whiteSpace: "nowrap" }}
                className="is-size-6-mobile"
              >
                {t("音楽演奏講評データセット")}
              </span>
            </span>
          </h1>
          <p className="mb-4">
            {t(
              "CROCUS(CRitique dOCUmentS) 音楽演奏講評データセットは音楽教育研究のための公開データです。複数の楽器奏者による音楽演奏とその演奏に対する複数の指導者による講評文書が収められています。"
            )}
            <br />
            {t(
              "プロを目指す楽器演奏者がどのような「ことば」で教育を受けているか、その質的な知は広く共有されていません。プロの教育者の「ことば」の使い方を分析・類型化することにより演奏指導における「ことば」の使い方に関する知見が明らかになることを願っております。"
            )}
          </p>
          <div className="content">
            <ul>
              <li>
                <a href="https://zenodo.org/record/4748243">
                  {t("オーボエ演奏講評データ")}{" "}
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
              <li>{t("ピアノ演奏講評データ（近日公開予定）")}</li>
              <li>{t("ギター演奏講評データ（近日公開予定）")}</li>
            </ul>
          </div>
          <div className="mb-0 content">
            <span className="title is-5">{t("発表文献")}</span>
            <br />
            <ul>
              <li>
                {t(
                  "松原正樹, 辻功, 平野剛, 香川璃奈:演奏講評文書データベースの構築および講評文書の構造と効用の関係.情報処理学会第131回音楽情報科学研究会, 9 pages, 2021"
                )}
              </li>
              <li>
                {t(
                  `Masaki Matsubara, Rina Kagawa, Takeshi Hirano and Isao Tsuji, “CROCUS: Dataset of Musical Performance Critiques: Relationship between Critique Content and Its Utility”, the 15th International Symposium on Computer Music Multidisciplinary Research (CMMR 2021), pp. 279-288, 2021. `
                )}
              </li>
              <li>
                {t(
                  `Masaki Matsubara, Rina Kagawa, Takeshi Hirano and Isao Tsuji, “Analysis of Usefulness of Critique Documents on Musical Performance:Toward better Instructional Document Format”, The 23rd International Conference on Asia-Pacific Digital Libraries (ICADL 2021), 2021. (to appear)`
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className={`columns`}>
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
                        {t("楽譜をダウンロード")}
                      </a>
                    </p>
                  </object>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h5 className="title is-5">{t("プロジェクトメンバー")}</h5>
              <ul>
                <li>
                  <span className=".is-no-wrap ">
                    <a
                      href="https://www.slis.tsukuba.ac.jp/~masaki"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("松原 正樹")}{" "}
                    </a>
                    {t("（筑波大学）")}{" "}
                    <address className="is-inline-block">
                      masaki[at]slis.tsukuba.ac[dot]jp
                    </address>
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("開發 功太郎（筑波大学）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("辻 功（洗足音楽大学，国立音楽大学）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("平野 剛（電気通信大学）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    <a
                      href="https://sites.google.com/view/rinabou/home/CV_Japanese"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("香川璃奈")}
                    </a>{" "}
                    {t("（筑波大学）")}{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="column">
              <h5 className="title is-5">{t("謝辞")}</h5>
              <p>
                {t(
                  "データ収集にご協力いただいた協力者の皆様に深くお礼を申し上げます。"
                )}
                <br />
                {t(
                  "本プロジェクトはJST未来社会創造事業JPMJMI19G8「質的な知を客体化するドキュメンテーション基盤技術：芸術分野文書のフォーマット探索」の助成を受けました。"
                )}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default App;
