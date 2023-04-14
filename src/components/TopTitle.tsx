import {FC} from "react";
import {useTranslation} from "react-i18next";

const TopTitle: FC <{ title: string }> = (props) => {
    const [t,] = useTranslation();
    return (
        <h1 className="title is-size-6-mobile is-size-5-touch is-size-3-desktop" style={{verticalAlign: "middle"}}>
        <span style={{whiteSpace: "nowrap"}} className="is-size-6-mobile">
          {t(props.title)}
        </span>
        </h1>
    );
};

export default TopTitle;
