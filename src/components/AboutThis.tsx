import {FC} from "react";
import {useTranslation} from "react-i18next";

const AboutThis: FC<{ aboutThis: any }> = (props) => {
    const [t] = useTranslation();

    var list = [];
    if(props.aboutThis!=null) {
        for (var i = 0; i < props.aboutThis.length; i++) {
            if (i > 0) {
                list.push(<br key={"b1_"+i} />);
            }
            list.push(<span key={"s1_"+i}>{t(props.aboutThis[i])}</span>);
        }
    }

    return (
        <p className="mb-4">
            {list}
        </p>
    );
};

export default AboutThis