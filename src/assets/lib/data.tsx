import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import oracleicon from "../../assets/icons/oracleicon.svg";

import plsqlicon from "../../assets/icons/plsqlicon.svg";
import gitdark from "../../assets/icons/gitdark.svg";
import gitWhite from "../../assets/icons/gitWhite.svg";
import ordsicon from "../../assets/icons/ordsicon.svg";
import pwaicon from "../../assets/icons/pwa_icon.svg";

import apexicon from "../../assets/icons/apex_icon.svg";

import jaspericon from "../../assets/icons/jasper_icon.svg";

import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/ttl_screen.png";
import assetsicon from "../../assets/img/assetsicon.png";
import complianceicon from "../../assets/img/compliance_example.png";
import ddicon from "../../assets/img/DDicon.png";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    ES: "Hola, soy Carlos Romero",
    en: "Hi, I'm Carlos Romero",
  },
  subtitle:{
    ES: "Desarrollador Oracle Senior 👨🏾‍💻" ,
    en: "Senior Oracle Developer 👨🏾‍💻",
  },
  
  description: {
    ES: "Desarrollador Oracle con sólidas bases en lógica de programación y amplia experiencia en OCI y Oracle Apex, creando aplicaciones complejas con Javascript, CSS y PL/SQL. Apasionado a nuevas tecnologías, trabajo en equipo y bajo presión. Conocimiento extenso de PL/SQL para el manejo de datos en bases Oracle. Experiencia en desarrollo ágil (Scrum).",
    en: "Oracle developer with solid foundations in programming logic and extensive experience in Oracle Apex, creating complex applications with Javascript, CSS and PL/SQL. Expertise in OCI for resource management. Adaptable to new technologies, teamwork and under pressure. Extensive knowledge of PL/SQL for data management in Oracle databases. Experience in agile development (Scrum).",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        ES: "Contáctame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        ES: "Mis proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Time Tracker Live",
    description:
      "Una aplicacion para que en una empresa se puede hacer un control de horas trabajadas, con un sistema de calculo de horas que calculas horas totales a la semana, y durante el dia. Incluye sistema de aprobacion donde un jefe aprueba o rechaza un registro de horas de un empleado, manejando estados. Tiene un sistema de manejo de proyectos, donde el empleado en cada registro debe indicar a que proyecto o area de trabajo le dedicó esas horas.",
    description_EN:
      "An application so that a company can control hours worked, with an hour calculation system that calculates total hours per week, and during the day. It includes an approval system where a boss approves or rejects an employee's time record, managing statuses. It has a project management system, where the employee in each record must indicate which project or work area they dedicated those hours to.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Oracle APEX", icon: apexicon },
      { name: "PWA", icon: pwaicon },

    ],
    image: tastyMockup,
    deploymenturl: "https://carlosromero.tech/ords/r/portfolio/time-tracker-live/login",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Registro Proveedores",
    description:
      "Esta es una aplicacion  en la cual una empresa puede automatizar u organizar el sistema de Debida Diligencia al momento de contratar o trabajar con un tercero o proveedor. Esta aplicacion tiene un sistema de aprobacion donde se dan niveles (Gerente, aprobador, proveedor). Donde el proveedor realizar una solicitud de registro, y dependiendo del pais se le asigna un aprobador. La aplicacion cuenta con manejo de documentos en solicitud, escalamientos, comentarios y estados de solicitud.",
    description_EN:
      "This is an application in which a company can automate or organize the Due Diligence system when hiring or working with a third party or supplier. This application has an approval system where levels are given (Manager, approver, supplier). Where the provider makes a registration request, and depending on the country an approver is assigned. The application has document management in applications, escalations, comments and application statuses.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Oracle APEX", icon: apexicon },
      { name: "Jasper Report", icon: jaspericon },
      
    ],
    image: ddicon,
    deploymenturl: "https://carlosromero.tech/ords/r/portfolio/registroproveedores/login",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "VeranoAssets",
    description:
      "Una aplicacion para gestionar y organizar el inventario o activos que tiene una empresa. La aplicacion permite tomar fotos con cada registro de inventario creado, asignar items a usuarios creados, visualizar los usuarios con asignaciones, categorizar cada elemento, Ver un reporte global con la visualizacion de fotos (o evidencias), asignacion de valor monetario por item. ",
    description_EN:
      "An application to manage and organize the inventory or assets that a company has. The application allows you to take photos with each inventory record created, assign items to created users, view users with assignments, categorize each item, View a global report with the display of photos (or evidence), assign monetary value per item.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Oracle APEX", icon: apexicon },
      { name: "PWA", icon: pwaicon },
    ],
    image: assetsicon,
    deploymenturl: "https://carlosromero.tech/ords/r/portfolio/veranoassets/login",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Compliance Connect",
    description:
      "Esta es una aplicacion que contiene dos funcionalidades, gestor documental y canal de denuncias. El gestor documental esta enfocado a la parte de audotoria de lectura de documentos en una empresa, este permite organizar carpetas y documentos dentro de estas,visualizar documentos por medio de una API, tiene un modulo donde muestra el estado de lectura de documentos de los usuarios presentes, con nombre y fecha. El canal de denuncias es un formulario donde se ingresara los datos de la denuncia a realizar, esta puede ser de forma anonima o con un usuario propio.",
    description_EN:
      "This is an application that contains two functionalities, a document manager and a complaints channel. The document manager is focused on the auditing part of document reading in a company, it allows you to organize folders and documents within them, view documents through an API, it has a module where it shows the status of users' document reading present, with name and date. The complaints channel is a form where the data of the complaint to be made will be entered, this can be anonymous or with your own user.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Oracle APEX", icon: apexicon },
      { name: "PWA", icon: pwaicon },
    ],
    image: complianceicon,
    deploymenturl: "https://carlosromero.tech/ords/r/portfolio/compliance-connect/login",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    ES: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "Oracle OCI",
        hash: "#Oracle OCI",
        icon: oracleicon,
        color: "#cc0000",
      },
      {
        title: "PL/SQL",
        hash: "#PL/SQL",
        icon: plsqlicon,
        color: "#d75418",
      },
     
      {
        title: "GitHub",
        hash: "#GitHub",
        icon: [gitdark, gitWhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Oracle REST Data Services",
        hash: "#Oracle REST Data Services",
        icon: ordsicon,
        color: "#d75418",
      },
      {
        title: "Oracle APEX",
        hash: "#Oracle APEX",
        icon: apexicon,
        color: "#18d729",
      },
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { ES: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { ES: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { ES: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { ES: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { ES: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { ES: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:carlosfromerom@gmail.com",
  text: "carlosfromerom@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/carlos-romero-033a24248/",
    icon: FiLinkedin,
    altimgname: "linkedin",
    width:"500"
  },
  {
    link: "https://github.com/cromero1908",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:carlosfromerom@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    ES: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    ES: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    ES: "Información de Contacto",
    en: "Contact Information",
  },
  description: {
    ES: "Escríbeme un correo y me comunicaré contigo, o me puedes contactar por medio de Linkedin",
    en: "Write me an email and I will contact you, or you can contact me through Linkedin",
  },
  
  privacyOptIn: {
    checkbox: {
      ES: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      ES: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    ES: "🦄 Redireccionando a demo, espera...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  
} as const;

export const buttonLabels = {
  language: {
    ES: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
