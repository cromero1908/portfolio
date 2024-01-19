import React, { useRef } from "react";
import { contactData } from "../assets/lib/data.tsx";

import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";


const Contact: React.FC = () => {
 



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
        className="contact-container w-full px-5 md:px-10 lg:px-16 xl:px-32 mt-16"
        id="contact"
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
            <div className="text-sm sm:text-lg max-w-full sm:max-w-screen-md mx-auto p-4">
    <div className="flex flex-col items-center">
      
      <a href="mailto:carlosfromerom@gmail.com" target="_blank" className="text-center">
        <strong className="break-words">carlosfromerom@gmail.com</strong>
      </a><br></br>
      <a href="https://www.linkedin.com/in/carlosromero26/" target="_blank" className="mt-2">
        <strong className="break-words">in: Carlos Romero</strong>
      </a>
    </div>
  </div>


          </motion.div>
      
        
      </section>
    </React.Fragment>
  );
};

export default Contact;
