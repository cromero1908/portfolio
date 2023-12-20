import React, { useRef } from "react";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";



const Contact: React.FC = () => {
 


  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();


  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


 

 

 

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-[--black] mb-10">
              <span className="text-[--huevopato]">&lt;</span>
              {language === "ES" ? contactData.title.ES : contactData.title.en}
              <span className="text-[--huevopato]">/&gt;</span>
            </h1>

            <h3 className="text-[--black] text-center">
              {language === "ES"
                ? contactData.description.ES
                : contactData.description.en}
            </h3>
            <br></br>
            <br></br>
            <br></br>
            {/* ✉ :&nbsp;  */}
     <a href="mailto:carlosfromerom@gmail.com" target="_blank"> <strong>carlosfromerom@gmail.com</strong></a><br></br>
     <a href="https://www.linkedin.com/in/carlos-romero-033a24248/" target="_blank"><strong>in:</strong>  &nbsp;Carlos Romero</a>
    
          </motion.div>
        </div>
        
      </section>
    </React.Fragment>
  );
};

export default Contact;
