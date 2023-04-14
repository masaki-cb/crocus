import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
const LinkDataset: FC<{ linkDataset: any }> = (props) => {
  const [t, ] = useTranslation();


    var dataList = [];
    if(props.linkDataset!=null) {
        for (var i = 0; i < props.linkDataset.length; i++) {
            var d=props.linkDataset[i];
            if(d.link!=null){
                if(d.link.startsWith("http")){
                    dataList.push(<li key={i+"l1_"+i}><a href={d.link}>{t(d.name)} <FontAwesomeIcon icon={faLink as IconProp} /></a></li>)
                }else{
                    dataList.push(<li key={i+"_l2"}><Link to={d.link}>{t(d.name)}</Link></li>)
                }

            }else{
                dataList.push(<li key={i+"_l3"}>{t(d.name)}</li>);
            }
        }
    }



    return (
    <ul>
        {dataList}
    </ul>
  );
};

export default LinkDataset;
