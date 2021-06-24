import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  lang: "en" | "ja";
  setLang: (param: "en" | "ja") => void;
};
const Navbar = ({ lang, setLang }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.getElementById("root")?.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      console.log(target);
      if (target.id !== "dropdown-trigger") setIsOpen(false);
    });
  }, []);
  return (
    <nav className="navbar is-flex is-flex-direction-row-reverse">
      <div>
      <div
        className={`dropdown navbar-item is-right ${isOpen ? "is-active" : ""}`}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <div onClick={()=>setIsOpen(false)} className="dropdown-trigger" aria-controls="dropdown-menu">
          <button className="button" id="dropdown-trigger">
            Language{" "}
            <span className="icon is-small mx-1">
              <FontAwesomeIcon icon={faAngleDown} />
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
