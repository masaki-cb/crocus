import { FC } from "react";
import { useTranslation } from "react-i18next";

const References: FC = () => {
  const [t] = useTranslation();

  return (
    <>
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
    </>
  );
};

export default References;
