(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(161),s=a(167),i=a(165);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Documentation - Dedicated Server",keywords:["luminousforts","dedicated-server","server"]}),r.a.createElement("div",{className:"container leading-loose mx-auto"},r.a.createElement("span",null,r.a.createElement(l.a,{className:"no-underline text-blue-700 uppercase tracking-wide",to:"/doc"},"< Documentation")),r.a.createElement("h1",null,"Dedicated Server"),r.a.createElement("p",null,"Configuring a Dedicated Server for LuminousForts requires both LuminousForts and the command-line version of Steam."),r.a.createElement("p",null,"There are multiple methods to create a Dedicated Server. Some are partially automated and under development, but for the most reliable to manually configure your server by downloading all the necessary applications."),r.a.createElement("h2",null,"Automated Installation"),r.a.createElement("p",{class:"text-red-700 uppercase"},"Under Development"),r.a.createElement("h2",null,"Docker"),r.a.createElement("p",null,"Docker image is the preferred route to configure a dedicated server."),r.a.createElement("p",{class:"text-red-700 uppercase"},"Under Development"),r.a.createElement("h2",null,"Manual configuration"),r.a.createElement("p",null,"To manually configure a dedicated server for LuminousForts requires the installation of ",r.a.createElement("a",{href:""},"Steam CMD")),r.a.createElement("h4",null,"64 bit Ubuntu"),r.a.createElement("pre",null,r.a.createElement("code",null,"sudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install p7zip lib32gcc1 libstdc++6 libstdc++6:i386 libncurses5:i386 libtinfo5:i386")),r.a.createElement("h4",null,"32 bit Ubuntu"),r.a.createElement("pre",null,r.a.createElement("code",null,"sudo apt install p7zip libstdc++6 libncurses5 libtinfo5")),r.a.createElement("h4",null,"Create the folder"),r.a.createElement("pre",null,r.a.createElement("code",null,"cd ~ && mkdir lf && cd lf")),r.a.createElement("h4",null,"Download Steam CMD"),r.a.createElement("pre",null,r.a.createElement("code",null,"wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz\ntar xvzf steamcmd_linux.tar.gz")),r.a.createElement("h4",null,"Configure Steam CMD"),r.a.createElement("pre",null,r.a.createElement("code",null,'echo "login anonymous" > ds_lf.txt\necho "force_install_dir ./sdkbase" >> ds_lf.txt\necho "app_update 244310" >> ds_lf.txt\necho "quit" >> ds_lf.txt')),r.a.createElement("h4",null,"Run Steam CMD Update"),r.a.createElement("pre",null,r.a.createElement("code",null,"./steamcmd.sh +runscript ds_lf.txt")),r.a.createElement("h4",null,"Fix broken symbolic links"),r.a.createElement("pre",null,r.a.createElement("code",null,"cd ~/lf/sdkbase/bin/\nln -s datacache_srv.so datacache.so\nln -s dedicated_srv.so dedicated.so\nln -s engine_srv.so engine.so\nln -s materialsystem_srv.so materialsystem.so\nln -s replay_srv.so replay.so\nln -s scenefilecache_srv.so scenefilecache.so\nln -s shaderapiempty_srv.so shaderapiempty.so\nln -s soundemittersystem_srv.so soundemittersystem.so\nln -s studiorender_srv.so studiorender.so\nln -s vphysics_srv.so vphysics.so")),r.a.createElement("h4",null,"Install LuminousForts"),r.a.createElement("pre",null,r.a.createElement("code",null,"cd ~/lf/sdkbase\ngit clone https://github.com/hekar/luminousforts.git")),r.a.createElement("h4",null,"Run the LuminousForts server"),r.a.createElement("pre",null,r.a.createElement("code",null,"cd ~/lf\n./sdkbase/srcds_run -console -game luminousforts -secured +map lfc_pyramids +maxplayers 8"))))}},161:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),s=a.n(l),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(162);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},162:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),i=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},165:function(e,t,a){"use strict";var n=a(166),r=a(0),l=a.n(r),s=a(4),i=a.n(s),c=a(168),o=a.n(c),m=a(161);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title;return l.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d;var u="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts",description:"Modification of Source SDK 2013",author:"@hekar"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),l=a.n(r),s=a(4),i=a.n(s),c=a(161);function o(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],s=a[1];return l.a.createElement("nav",{className:"bg-red-darkest"},l.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},l.a.createElement(c.a,{to:"/",className:"flex items-center no-underline text-white"},l.a.createElement("svg",{className:"h-8 mr-3 w-8 stroke-current text-grey",width:"54",height:"54",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",null,l.a.createElement("rect",{y:"1.879681",x:"1.9534023",height:"12.036263",width:"2.0214746"}),l.a.createElement("rect",{y:"11.794399",x:"3.9355807",height:"2.1221235",width:"6.0260615"}),l.a.createElement("rect",{y:"1.8920995",x:"7.9449863",height:"10.065925",width:"2.0214748"}),l.a.createElement("rect",{y:"6.8946781",x:"9.9164286",height:"2.021349",width:"3.0370996"}),l.a.createElement("rect",{y:"1.8955755",x:"9.8877001",height:"2.0095088",width:"5.0605369"}))),l.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),l.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return s(!n)}},l.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),l.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},l.a.createElement("div",{className:"text-sm lg:flex-grow"},l.a.createElement(c.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"},"Home"),l.a.createElement(c.a,{to:"/projects",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Projects"),l.a.createElement(c.a,{to:"/doc",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Docs"),l.a.createElement(c.a,{to:"/entities",className:"block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"},"Entities")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/hekar/luminousforts",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"},"Github")))))}o.propTypes={siteTitle:i.a.string},o.defaultProps={siteTitle:""};var m=o;function d(e){var t=e.children;return l.a.createElement(c.b,{query:"2994927498",render:function(e){return l.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},l.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),l.a.createElement("footer",{className:"bg-blue-darkest"},l.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},l.a.createElement("p",{className:"text-white"},"Based on the Source SDK - Copyright 2019"),l.a.createElement("div",null,l.a.createElement("a",{href:"https://steamcommunity.com/groups/LuminousForts",className:"font-bold no-underline text-white"},"Community"),l.a.createElement("a",{href:"https://github.com/hekar/luminousforts-2013/",className:"pl-8 font-bold no-underline text-white"},"Source Code")))))},data:n})}d.propTypes={children:i.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-doc-ds-index-js-e0f75281ad72131fcb98.js.map