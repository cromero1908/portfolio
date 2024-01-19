import React from "react";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";
import { FiUser} from "react-icons/fi";
const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (

    
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-max max-lg:text-sm"
      ref={ref}
      id="home"
    >
    
        
     
      <h1 className="max-lg:w-1/2 ">
        {language === "ES"
          ? headerIntroData.title.ES
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
     
      <p className="w-1/2 text-center max-lg:text-2xl">
        {language === "ES"
          ? headerIntroData.description.ES
          : headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "ES" ? button.label.ES : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
          
        ))}
        <Button label={language === "ES"
                ? "Descargar HV"
                : "Download CV"} 
                iconSVG={FiUser} 
                link={language === "ES"
                ? "https://carlosromero.tech/assets/HV_CARLOSROMERO_ES.pdf"
                : "https://carlosromero.tech/assets/HV_CARLOSROMERO_EN.pdf"} 
                 is_blank="_blank"
                 buttoncolor="main-btn"></Button>
       
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem] max-lg:items-center" />
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

export default HeaderIntro;