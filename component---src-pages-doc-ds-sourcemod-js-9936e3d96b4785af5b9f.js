(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(161),i=a(167),l=a(165);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Documentation - Sourcemod",keywords:["luminousforts","sourcesdk","sourcemod"]}),r.a.createElement("div",{className:"container leading-loose mx-auto"},r.a.createElement("span",null,r.a.createElement(o.a,{className:"no-underline text-blue-700 uppercase tracking-wide",to:"/doc"},"< Documentation")),r.a.createElement("h1",null,"Sourcemod"),r.a.createElement("div",{className:"bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4",role:"alert"},r.a.createElement("p",{className:"font-bold"},"Warning"),r.a.createElement("p",null,"This Tutorial only covers Linux and Sourcemod only works on Dedicated Servers. You cannot use Sourcemod on a Linux listen server.")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.sourcemod.net/about.php"},"SourceMod")," is server modification for any game that runs on the Half-Life 2 engine. It is a powerful, highly optimized platform for scripting plugins and handling server administration. The default package comes with a base set of plugins, but there are over 2,500 plugins in the community. "),r.a.createElement("p",null,"Sourcemod requires ",r.a.createElement("a",{href:"https://www.metamodsource.net/"},"Metamod")),r.a.createElement("h2",null,"Installation"),r.a.createElement("p",null,"Setting up ",r.a.createElement("a",{href:"https://www.sourcemod.net/about.php"},"SourceMod")," requires download and unzipping Metamod and Sourcemod to the LuminousForts game folder."),r.a.createElement("pre",null,r.a.createElement("code",null,"cd ~/.steam/steam/steamapps/sourcemods/luminousforts\nwget https://mms.alliedmods.net/mmsdrop/1.10/mmsource-1.10.7-git970-linux.tar.gz\ntar -zxvf mmsource-1.10.7-git970-linux.tar.gz\nrm mmsource-1.10.7-git970-linux.tar.gz\nwget https://sm.alliedmods.net/smdrop/1.9/sourcemod-1.9.0-git6281-linux.tar.gz\ntar -zxvf sourcemod-1.9.0-git6281-linux.tar.gz\nrm sourcemod-1.9.0-git6281-linux.tar.gz"))))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(162);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},162:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},165:function(e,t,a){"use strict";var n=a(166),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(168),c=a.n(s),m=a(161);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts",description:"Modification of Source SDK 2013",author:"@hekar"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(161);function c(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],i=a[1];return o.a.createElement("nav",{className:"bg-red-darkest"},o.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},o.a.createElement(s.a,{to:"/",className:"flex items-center no-underline text-white"},o.a.createElement("svg",{className:"h-8 mr-3 w-8 stroke-current text-grey",width:"54",height:"54",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",null,o.a.createElement("rect",{y:"1.879681",x:"1.9534023",height:"12.036263",width:"2.0214746"}),o.a.createElement("rect",{y:"11.794399",x:"3.9355807",height:"2.1221235",width:"6.0260615"}),o.a.createElement("rect",{y:"1.8920995",x:"7.9449863",height:"10.065925",width:"2.0214748"}),o.a.createElement("rect",{y:"6.8946781",x:"9.9164286",height:"2.021349",width:"3.0370996"}),o.a.createElement("rect",{y:"1.8955755",x:"9.8877001",height:"2.0095088",width:"5.0605369"}))),o.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),o.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return i(!n)}},o.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),o.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},o.a.createElement("div",{className:"text-sm lg:flex-grow"},o.a.createElement(s.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"},"Home"),o.a.createElement(s.a,{to:"/projects",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Projects"),o.a.createElement(s.a,{to:"/doc",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Docs"),o.a.createElement(s.a,{to:"/entities",className:"block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"},"Entities")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/hekar/luminousforts",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"},"Github")))))}c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var m=c;function u(e){var t=e.children;return o.a.createElement(s.b,{query:"2994927498",render:function(e){return o.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),o.a.createElement("footer",{className:"bg-blue-darkest"},o.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},o.a.createElement("p",{className:"text-white"},"Based on the Source SDK - Copyright 2019"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://steamcommunity.com/groups/LuminousForts",className:"font-bold no-underline text-white"},"Community"),o.a.createElement("a",{href:"https://github.com/hekar/luminousforts-2013/",className:"pl-8 font-bold no-underline text-white"},"Source Code")))))},data:n})}u.propTypes={children:l.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-doc-ds-sourcemod-js-9936e3d96b4785af5b9f.js.map