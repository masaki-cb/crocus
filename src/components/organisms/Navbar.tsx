import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  lang: "en" | "ja";
  setLang: (param: "en" | "ja") => void;
};
const Navbar = ({ lang, setLang }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`dropdown is-right ${isOpen ? "is-active" : ""}`}
      style={{ position: "fixed", right: "1rem", top: "3rem", zIndex: 99 }}
    >
      <div className="dropdown-trigger" aria-controls="dropdown-menu">
        <button onClick={() => setIsOpen(!isOpen)} className="button">
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
          <div onClick={() => setLang("ja")} className={`dropdown-item ${
              lang === "ja"
                ? "has-background-primary has-text-primary-light"
                : ""
            }`}>
            日本語
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
