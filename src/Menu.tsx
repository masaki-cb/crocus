import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Navbar from "./components/organisms/Navbar";

import LinkDataset from "./components/LinkDataset";
import TopTitle from "./components/TopTitle";
import AboutThis from "./components/AboutThis";
import { usePersist } from './components/organisms/usePersist';
import Icon from "./CROCUS_small.png";
import Footer from "./components/Footer";
import TextList from "./components/TextList";

const Menu = () => {

    const [t, i18n] = useTranslation();
    const [lang, setLang] = usePersist("lang","en",["en","ja"]);

    const description = require(`./data/description.json`);

    console.log(description);

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.title = "CROCUS: " + t("講評データセット");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang, i18n]);

    return (
        <>
            <Navbar lang={lang} setLang={(p) => setLang(p)}  iconImg={Icon} />
            <div className="section pb-0">
                <div className="container">
                    <TopTitle title={description.title}  />
                    <AboutThis aboutThis={description.aboutThis}  />
                    <div className="content">
                        <LinkDataset linkDataset={description.linkDataset}  />
                    </div>
                    { description.references!=null &&
                    <div className="mb-0 content">
                        <TextList title={description.references.title} testList={description.references.textList} />
                    </div>
                    }
                </div>
            </div>
            <div className="section">
                <div className="container">
                </div>
            </div>
            <Footer projectMembers={description.projectMembers} acknowledgment={description.acknowledgment}/>
        </>
    );
};
export default Menu;
