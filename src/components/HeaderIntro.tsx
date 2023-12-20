import React from "react";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
  

      
      <h1 className="max-lg:w-1/2">
        {language === "ES"
          ? headerIntroData.title.ES
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h3>{language === "ES"
          ? headerIntroData.subtitle.ES
          : headerIntroData.subtitle.en}</h3>
      <p className="w-1/2 text-center max-lg:w-auto">
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
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[4rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
