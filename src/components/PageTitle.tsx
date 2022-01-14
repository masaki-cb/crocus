import { FC } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../CROCUS_small.png";

const PageTitle: FC = () => {
  const [t, ] = useTranslation();
  return (
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
        <span style={{ whiteSpace: "nowrap" }} className="is-size-6-mobile">
          {t("音楽演奏講評データセット")}
        </span>
      </span>
    </h1>
  );
};

export default PageTitle;
