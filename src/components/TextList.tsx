import { FC } from "react";
import { useTranslation } from "react-i18next";

const TextList: FC<{ title:string,testList: any }> = (props) => {
  const [t] = useTranslation();

    var list = [];
    if(props.testList!=null) {
        for (var i = 0; i < props.testList.length; i++) {
            list.push(<li key={"l1_"+i}>{t(props.testList[i])}</li>)
        }
    }
  return (
    <>
      <span className="title is-5">{t(props.title)}</span>
      <br />
        <ul>
            {list}
        </ul>
    </>
  );
};

export default TextList;
