import{c as r,u as m,h as x,j as e,i as a,B as l,F as d,k as g}from"./index-9f04c911.js";const j=()=>{const{language:t}=r(),{ref:n}=m("Home",.5),{setActiveSection:c,setTimeOfLastClick:o}=x();return e.jsxs("section",{className:"hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-max max-lg:text-sm",ref:n,id:"home",children:[e.jsxs("h1",{className:"max-lg:w-1/2 ",children:[t==="ES"?a.title.ES:a.title.en,e.jsx("span",{className:"wave text-7xl",children:"👋🏽"})]}),e.jsx("p",{className:"w-1/2 text-center max-lg:text-2xl",children:t==="ES"?a.description.ES:a.description.en}),e.jsxs("div",{className:"button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center",children:[a.buttons.map((s,i)=>e.jsx(l,{label:t==="ES"?s.label.ES:s.label.en,iconSVG:s.icon,link:`#${s.name.toLocaleLowerCase()}`,buttoncolor:s.color,onClick:()=>{c(s.name),o(Date.now())}},i)),e.jsx(l,{label:t==="ES"?"Descargar HV":"Download CV",iconSVG:d,link:"https://carlosromero.tech/assets/HV_CARLOSROMERO.pdf",is_blank:"_blank",buttoncolor:"main-btn"})]}),e.jsxs("div",{className:"scroll-down-container animate-bounce flex gap-6",children:[e.jsx(g,{className:"text-[2.6rem] max-lg:items-center"}),e.jsx("br",{}),e.jsx("br",{})]})]})};export{j as default};
