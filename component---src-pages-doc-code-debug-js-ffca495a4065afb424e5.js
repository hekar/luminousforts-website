(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),l=a(167),o=a(165);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Documentation - C++ Compile",keywords:["luminousforts","sourcesdk","sourceforts","halflife2","compile"]}),r.a.createElement("div",{className:"container leading-loose mx-auto"},r.a.createElement("span",null,r.a.createElement(i.a,{className:"no-underline text-blue-700 uppercase tracking-wide",to:"/doc"},"< Documentation")),r.a.createElement("h1",null,"C++ Compile"),r.a.createElement("p",null,"The LuminousForts project is compromised of C++ code, models in Blender, textures and maps in Hammer."),r.a.createElement("h2",null,"Code"),r.a.createElement("p",null,"The code for LuminousForts can be compiled under Ubuntu 14.04 using Docker or Visual Studio 2013 in Windows.")))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(162);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},162:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},165:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(168),s=a.n(c),m=a(161);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts",description:"Modification of Source SDK 2013",author:"@hekar"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(161);function s(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],l=a[1];return i.a.createElement("nav",{className:"bg-red-darkest"},i.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},i.a.createElement(c.a,{to:"/",className:"flex items-center no-underline text-white"},i.a.createElement("svg",{className:"h-8 mr-3 w-8 stroke-current text-grey",width:"54",height:"54",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("rect",{y:"1.879681",x:"1.9534023",height:"12.036263",width:"2.0214746"}),i.a.createElement("rect",{y:"11.794399",x:"3.9355807",height:"2.1221235",width:"6.0260615"}),i.a.createElement("rect",{y:"1.8920995",x:"7.9449863",height:"10.065925",width:"2.0214748"}),i.a.createElement("rect",{y:"6.8946781",x:"9.9164286",height:"2.021349",width:"3.0370996"}),i.a.createElement("rect",{y:"1.8955755",x:"9.8877001",height:"2.0095088",width:"5.0605369"}))),i.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),i.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return l(!n)}},i.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),i.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},i.a.createElement("div",{className:"text-sm lg:flex-grow"},i.a.createElement(c.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"},"Home"),i.a.createElement(c.a,{to:"/projects",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Projects"),i.a.createElement(c.a,{to:"/doc",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Docs"),i.a.createElement(c.a,{to:"/entities",className:"block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"},"Entities")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/hekar/luminousforts",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"},"Github")))))}s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var m=s;function u(e){var t=e.children;return i.a.createElement(c.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),i.a.createElement("footer",{className:"bg-blue-darkest"},i.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},i.a.createElement("p",{className:"text-white"},"Based on the Source SDK - Copyright 2019"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://steamcommunity.com/groups/LuminousForts",className:"font-bold no-underline text-white"},"Community"),i.a.createElement("a",{href:"https://github.com/hekar/luminousforts-2013/",className:"pl-8 font-bold no-underline text-white"},"Source Code")))))},data:n})}u.propTypes={children:o.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-doc-code-debug-js-ffca495a4065afb424e5.js.map