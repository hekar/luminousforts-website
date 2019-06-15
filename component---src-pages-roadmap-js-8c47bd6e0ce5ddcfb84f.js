(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167),s=a(165);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Documentation",keywords:["luminousforts","sourcesdk","sourceforts","halflife2","entities"]}),r.a.createElement("div",{className:"container mx-auto leading-normal"},r.a.createElement("h1",null,"Roadmap"),r.a.createElement("p",{className:"mt-4"},"The Roadmap for LuminousForts is constrained based on time and lack of concept art. There is also a lack of direction in regards to what is possible given current skill sets. Therefore, items in the roadmap are rather conservative and are not guaranteed to be added if deemed too complicated."),r.a.createElement("h2",{className:"mt-8"},"Gamemodes"),r.a.createElement("h3",{className:"mt-4"},"Classic"),r.a.createElement("p",{className:"mt-4"},'The goal behind the "Classic" or "CTF" gamemode is to recreate Sourceforts as an open source game that can be extended by the community. This is not the main focus of LuminousForts, but a prerequisite to all other gamemodes.'),r.a.createElement("h3",{className:"mt-4"},"Domination"),r.a.createElement("p",{className:"mt-4"},"The domination gamemode was"),r.a.createElement("h2",{className:"mt-8"},"Artistic Direction"),r.a.createElement("p",{className:"mt-4"},"The artistic direction is later stage cyberpunk, with a focus on science fiction, rather than fantasy."),r.a.createElement("h3",{className:"mt-4"},"Player Models"),r.a.createElement("ul",{className:"mt-2"},r.a.createElement("li",null,"Model animations will be based on HL2DM"),r.a.createElement("li",null,"Models will wear masks"),r.a.createElement("li",null,"Weapons will modeled after existing cyberpunk databases")),r.a.createElement("h2",{className:"mt-8"},"Releases & Versions"),r.a.createElement("p",{className:"mt-4"},"The modification does not have release version numbers. Releases are done through Github.")))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(162);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},162:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},165:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),s=a(4),l=a.n(s),o=a(168),c=a.n(o),m=a(161);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title;return i.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts",description:"Modification of Source SDK 2013",author:"@hekar"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),s=a(4),l=a.n(s),o=a(161);function c(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],s=a[1];return i.a.createElement("nav",{className:"bg-red-darkest"},i.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},i.a.createElement(o.a,{to:"/",className:"flex items-center no-underline text-white"},i.a.createElement("svg",{className:"h-8 mr-3 w-8 stroke-current text-grey",width:"54",height:"54",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",null,i.a.createElement("rect",{y:"1.879681",x:"1.9534023",height:"12.036263",width:"2.0214746"}),i.a.createElement("rect",{y:"11.794399",x:"3.9355807",height:"2.1221235",width:"6.0260615"}),i.a.createElement("rect",{y:"1.8920995",x:"7.9449863",height:"10.065925",width:"2.0214748"}),i.a.createElement("rect",{y:"6.8946781",x:"9.9164286",height:"2.021349",width:"3.0370996"}),i.a.createElement("rect",{y:"1.8955755",x:"9.8877001",height:"2.0095088",width:"5.0605369"}))),i.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),i.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return s(!n)}},i.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),i.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},i.a.createElement("div",{className:"text-sm lg:flex-grow"},i.a.createElement(o.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"},"Home"),i.a.createElement(o.a,{to:"/projects",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Projects"),i.a.createElement(o.a,{to:"/doc",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Docs"),i.a.createElement(o.a,{to:"/entities",className:"block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"},"Entities")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/hekar/luminousforts",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"},"Github")))))}c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var m=c;function d(e){var t=e.children;return i.a.createElement(o.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),i.a.createElement("footer",{className:"bg-blue-darkest"},i.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},i.a.createElement("p",{className:"text-white"},"Based on the Source SDK - Copyright 2019"),i.a.createElement("div",null,i.a.createElement("a",{href:"https://steamcommunity.com/groups/LuminousForts",className:"font-bold no-underline text-white"},"Community"),i.a.createElement("a",{href:"https://github.com/hekar/luminousforts-2013/",className:"pl-8 font-bold no-underline text-white"},"Source Code")))))},data:n})}d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-roadmap-js-8c47bd6e0ce5ddcfb84f.js.map