import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer:FC<{ projectMembers: any,acknowledgment:string[] }> = (props) => {
  const [t, ] = useTranslation();

  let projectMembersList = [];
  if(props.projectMembers!=null) {
    for (let i = 0; i < props.projectMembers.length; i++) {
      let d=props.projectMembers[i];
      var sub=[];
      if(d.link!=null){
        sub.push(<a key={"a1_"+i}
            href={d.link}
            target="_blank"
            rel="noreferrer">
          {t(d.name)}{" "}
        </a>)
      }else{
        sub.push(<span key={"s1_"+i}>{t(d.name)}{" "}</span>)
      }
      if(d.org!=null){
        sub.push(<span key={"s2_"+i}>{t(d.org)}{" "}</span>)
      }
      if(d.address!=null){
        sub.push(<address key={"ad_"+i} className="is-inline-block">{d.address}</address>)
      }
      projectMembersList.push(<li key={"li_"+i}><span className=".is-no-wrap ">{sub}</span></li>)
    }
  }
  let acknowledgmentList=[];
  if(props.acknowledgment!=null){
    for (let i = 0; i < props.acknowledgment.length; i++) {
      let d=props.acknowledgment[i];
      acknowledgmentList.push(<span key={"a1_"+i}>{t(d)}</span>);
      acknowledgmentList.push(<br key={"br_"+i} />);
    }

  }

  return (
    <footer className="footer">
        <div className="container">
          <div className="columns">
            {props.projectMembers!=null &&
            <div className="column">
              <h5 className="title is-5">{t("プロジェクトメンバー")}</h5>
              <ul>
                {projectMembersList}
              </ul>
            </div>
            }
            {props.acknowledgment!=null &&
            <div className="column">
              <h5 className="title is-5">{t("謝辞")}</h5>
              <p>
                {acknowledgmentList}
              </p>
            </div>
            }
          </div>
        </div>
      </footer>
  )
}
export default Footer