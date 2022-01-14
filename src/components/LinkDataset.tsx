import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const LinkDataset: FC = () => {
  const [t, ] = useTranslation();

  return (
    <ul>
      <li>
        <a href="https://zenodo.org/record/4748243">
          {t("オーボエ演奏講評データ")} <FontAwesomeIcon icon={faLink} />
        </a>
      </li>
      <li>{t("ピアノ演奏講評データ（近日公開予定）")}</li>
      <li>{t("ギター演奏講評データ（近日公開予定）")}</li>
    </ul>
  );
};

export default LinkDataset;
