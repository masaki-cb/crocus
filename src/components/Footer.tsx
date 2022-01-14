import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer:FC= () =>{
  const [t, ] = useTranslation();

  return (
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
                <li>
                  <span className=".is-no-wrap ">
                    {t("飯野 なみ（国立情報学研究所）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("武田 英明（国立情報学研究所）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("三浦 寛也（理化学研究所）")}
                  </span>
                </li>
                <li>
                  <span className=".is-no-wrap ">
                    {t("浜中 雅俊（理化学研究所）")}
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
  )
}
export default Footer