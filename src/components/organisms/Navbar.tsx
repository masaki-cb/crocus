import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  lang: "en" | "ja";
  setLang: (param: "en" | "ja") => void;
    iconImg:any;
};
const Navbar = ({ lang, setLang,iconImg }: Props) => {
    console.log("PUBLIC_URL");
    console.log(process.env.PUBLIC_URL);
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   document.getElementById("dropdown-trigger")?.addEventListener("click", (e) => {
  //     const target = e.currentTarget as HTMLElement;
  //     console.log(target)
  //     if (target.id !== "dropdown-trigger") setIsOpen(false);
  //   });
  // }, []);
  return (
    <nav className="navbar"  role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to={`/`} className="navbar-item">
                <figure
                    className="image is-inline-block is-48x48"
                    style={{ verticalAlign: "middle" }}
                >
                    <img src={iconImg} alt="flower icon" />
                </figure>
                <h1 className="title is-size-6-mobile is-size-5-touch is-size-3-desktop  ">
                CROCUS (CRitique dOCUmentS)
                </h1>
            </Link>
        </div>


      <div className="navbar-end">
      <div
        className={`dropdown navbar-item is-right ${isOpen ? "is-active" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div onClick={()=>setIsOpen(false)} className="dropdown-trigger" aria-controls="dropdown-menu">
          <button className="button" id="dropdown-trigger">
            Language{" "}
            <span className="icon is-small mx-1">
              <FontAwesomeIcon icon={faAngleDown as IconProp} />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div
              onClick={() => setLang("en")}
              className={`dropdown-item ${
                lang === "en"
                  ? "has-background-primary has-text-primary-light"
                  : ""
              }`}
            >
              English
            </div>
            <div
              onClick={() => setLang("ja")}
              className={`dropdown-item ${
                lang === "ja"
                  ? "has-background-primary has-text-primary-light"
                  : ""
              }`}
            >
              日本語
            </div>
          </div>
        </div>
      </div>
   
      </div>
     </nav>
  );
};
export default Navbar;
