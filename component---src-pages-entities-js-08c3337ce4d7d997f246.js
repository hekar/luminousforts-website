(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t);a(166),a(74),a(56),a(36),a(167);var n=a(0),i=a.n(n),s=a(156),o=a(154),l={classic:a(169),domination:a(170),custom:a(171),shared:a(172)};function r(e){var t=e.entities,a=function(e){if(e){var t=Object.keys(e).map(function(t){return{key:t,val:e[t]}}).map(function(e){var t,a,n=e.key,s=e.val;return"object"==typeof s?{key:s.name,val:(t=s,a=Object.keys(t).map(function(e){return{key:e,val:t[e]}}).filter(function(e){return"name"!==e.key}).map(function(e){var t=e.key,a=e.val;return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"text-left font-medium pr-8"},t),i.a.createElement("td",{className:"text-left"},JSON.stringify(a,null,2)))}),i.a.createElement("table",{className:""},i.a.createElement("thead",null,i.a.createElement("th",{className:"text-left"},"Key"),i.a.createElement("th",{className:"text-left"},"Value")),i.a.createElement("tbody",null,a)))}:{key:n,val:i.a.createElement("p",{className:"py-2 px-4"},"String(val)")}}).map(function(e){var t=e.key,a=e.val;return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"text-left py-2 px-4 font-bold"},t),i.a.createElement("td",{className:"text-left py-2 px-4"},a))});return i.a.createElement("table",{className:"max-w-lg"},i.a.createElement("tbody",null,t))}return i.a.createElement("p",{className:"py-2 px-4"},"N/A")};return t.map(function(e){return i.a.createElement("div",{className:"mt-8 max-w-md"},i.a.createElement("h3",{name:e.name},i.a.createElement("a",{className:"text-black",href:"#"+e.name},e.name)),i.a.createElement("p",{className:"mt-4"},"Type: ",i.a.createElement("span",{className:"font-bold"},e.type?e.type:"...")),i.a.createElement("h5",{className:"mt-4"},"Description"),i.a.createElement("p",null,e.description?e.description:"none"),i.a.createElement("h5",{className:"mt-4"},"Properties"),a(e.properties),i.a.createElement("h5",{className:"mt-4"},"Inputs"),a(e.inputs),i.a.createElement("h5",{className:"mt-4"},"Outputs"),a(e.outputs),i.a.createElement("h5",{className:"mt-4"},"Parameters"),a(e.parameters))})}t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(o.a,{title:"Entities",keywords:["luminousforts","sourcesdk","sourceforts","halflife2","entities"]}),i.a.createElement("div",{className:"container leading-normal"},i.a.createElement("h1",{className:""},"Entities"),i.a.createElement("p",{className:"mt-4"},"The LuminousForts entities visible in Hammer"),i.a.createElement("p",{className:"mt-4"},i.a.createElement("a",{href:"https://developer.valvesoftware.com/wiki/FGD"},"FGD")," files are found in the ",i.a.createElement("a",{href:"https://github.com/hekar/luminousforts/tree/master/fgd"},"repository fgd folder")),i.a.createElement("h2",{className:"mt-16"},"Shared"),i.a.createElement("p",{className:"mt-4"},"Entities available in any gamemode"),i.a.createElement("div",{className:"mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3",role:"alert"},i.a.createElement("p",{className:"text-sm"},"All these entities are prefixed with lf_* and apply to multiple gamemodes")),r(l.shared),i.a.createElement("h2",{className:"mt-16"},"Classic Gamemode"),i.a.createElement("p",{className:"mt-4"},"Entities only available in the Classic (Capture the flag) gamemode"),i.a.createElement("div",{className:"mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3",role:"alert"},i.a.createElement("p",{className:"text-sm"},"All entities are prefixed with lfc_*")),r(l.classic),i.a.createElement("h2",{className:"mt-16"},"Domination Gamemode"),i.a.createElement("p",{className:"mt-4"},"Entities only available in the Domination gamemode"),i.a.createElement("div",{className:"mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3",role:"alert"},i.a.createElement("p",{className:"text-sm"},"All entities are prefixed with lfd_*")),r(l.domination),i.a.createElement("h2",{className:"mt-16"},"Custom Gamemode"),i.a.createElement("p",{className:"mt-4"},"Available for custom gamemodes"),i.a.createElement("div",{className:"mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3",role:"alert"},i.a.createElement("p",{className:"text-sm"},"All these entities are for custom gameplay")),r(l.custom)))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(33),r=a.n(l);a.d(t,"a",function(){return r.a});a(151);var c=i.a.createContext({}),m=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(55),r=a(2),c=function(e){var t=e.location,a=r.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(155),i=a(0),s=a.n(i),o=a(4),l=a.n(o),r=a(157),c=a.n(r),m=a(150);function p(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title;return s.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var d="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"LuminousForts",description:"Modification of Source SDK 2013",author:"@hekar"}}}}},156:function(e,t,a){"use strict";var n=a(152),i=a(0),s=a.n(i),o=a(4),l=a.n(o),r=a(150);function c(e){var t=e.siteTitle,a=Object(i.useState)(!1),n=a[0],o=a[1];return s.a.createElement("nav",{className:"bg-red-darkest"},s.a.createElement("div",{className:"flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8"},s.a.createElement(r.a,{to:"/",className:"flex items-center no-underline text-white"},s.a.createElement("svg",{className:"h-8 mr-3 w-8 stroke-current text-grey",width:"54",height:"54",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",null,s.a.createElement("rect",{y:"1.879681",x:"1.9534023",height:"12.036263",width:"2.0214746"}),s.a.createElement("rect",{y:"11.794399",x:"3.9355807",height:"2.1221235",width:"6.0260615"}),s.a.createElement("rect",{y:"1.8920995",x:"7.9449863",height:"10.065925",width:"2.0214748"}),s.a.createElement("rect",{y:"6.8946781",x:"9.9164286",height:"2.021349",width:"3.0370996"}),s.a.createElement("rect",{y:"1.8955755",x:"9.8877001",height:"2.0095088",width:"5.0605369"}))),s.a.createElement("span",{className:"font-bold text-xl tracking-tight"},t)),s.a.createElement("button",{className:"block md:hidden border border-white flex items-center px-3 py-2 rounded text-white",onClick:function(){return o(!n)}},s.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("title",null,"Menu"),s.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),s.a.createElement("div",{className:(n?"block":"hidden")+" md:block md:flex md:items-center w-full md:w-auto"},s.a.createElement("div",{className:"text-sm lg:flex-grow"},s.a.createElement(r.a,{to:"/",className:"block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"},"Home"),s.a.createElement(r.a,{to:"/projects",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Projects"),s.a.createElement(r.a,{to:"/doc",className:"block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"},"Docs"),s.a.createElement(r.a,{to:"/entities",className:"block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"},"Entities")),s.a.createElement("div",null,s.a.createElement("a",{href:"https://github.com/hekar/luminousforts",className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"},"Github")))))}c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var m=c;function p(e){var t=e.children;return s.a.createElement(r.b,{query:"2994927498",render:function(e){return s.a.createElement("div",{className:"flex flex-col font-sans min-h-screen text-grey-darkest"},s.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:"flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full"},t),s.a.createElement("footer",{className:"bg-blue-darkest"},s.a.createElement("div",{className:"flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm"},s.a.createElement("p",{className:"text-white"},"Based on the Source SDK - Copyright 2019"),s.a.createElement("div",null,s.a.createElement("a",{href:"https://steamcommunity.com/groups/LuminousForts",className:"font-bold no-underline text-white"},"Community"),s.a.createElement("a",{href:"https://github.com/hekar/luminousforts-2013/",className:"pl-8 font-bold no-underline text-white"},"Source Code")))))},data:n})}p.propTypes={children:l.a.node.isRequired};t.a=p},166:function(e,t,a){var n=a(25).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||a(19)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},167:function(e,t,a){var n=a(26),i=a(35);a(168)("keys",function(){return function(e){return i(n(e))}})},168:function(e,t,a){var n=a(11),i=a(18),s=a(20);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*s(function(){a(1)}),"Object",o)}},169:function(e){e.exports={includes:[],entities:[{name:"TwoTeams",type:"BaseClass",properties:[{type:"choices",name:"team",title:"Team",deflt:2,choices:{2:"Blue",3:"Red"}}]},{name:"ThreeTeams",type:"BaseClass",properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Both",2:"Blue",3:"Red"}}]},{name:"BlockBase",type:"BaseClass",properties:[{type:"choices",name:"CountBlock",title:"CountBlock",deflt:1,choices:{0:"False",1:"True"}},{type:"choices",name:"Frozen",title:"Frozen",deflt:1,choices:{0:"False",1:"True"}},{type:"choices",name:"team",title:"Team",deflt:2,choices:{2:"Blue",3:"Red"}},{type:"integer",name:"BlockWorth",title:"BlockHealth",deflt:4e3},{type:"choices",name:"BlockDestructable",title:"BlockDestructable",deflt:1,choices:{0:"False",1:"True"}}],inputs:[{name:"Freeze",description:"Freeze the block",type:"void"},{name:"UnFreeze",description:"UnFreeze the block",type:"void"},{name:"Dispose",description:"Dispose the block",type:"void"},{name:"EnableDestructable",description:"Enable Destruction on the block",type:"void"},{name:"DisableDestructable",description:"Disable Destruction on the block",type:"void"},{name:"SetHealth",description:"Change the block health",type:"integer"}],outputs:[{name:"OnDisposed",description:"On Block Being Disposed",type:"void"},{name:"OnFrozen",description:"On Block Frozen",type:"void"},{name:"OnUnFrozen",description:"On Block UnFrozen",type:"void"}]},{name:"lfc_prop_block1x2",type:"PointClass",description:"Luminousforts 1.0: 1x2 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_1x2.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block1x3",type:"PointClass",description:"Luminousforts 1.0: 1x3 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_1x3.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block1x4",type:"PointClass",description:"Luminousforts 1.0: 1x4 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_1x4.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block1x5",type:"PointClass",description:"Luminousforts 1.0: 1x5 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_1x5.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block2x2",type:"PointClass",description:"Luminousforts 1.0: 2x2 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_2x2.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block2x3",type:"PointClass",description:"Luminousforts 1.0: 2x3 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_2x3.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block2x4",type:"PointClass",description:"Luminousforts 1.0: 2x4 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_2x4.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block2x5",type:"PointClass",description:"Luminousforts 1.0: 2x5 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_2x5.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block3x3",type:"PointClass",description:"Luminousforts 1.0: 3x3 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_3x3.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block3x4",type:"PointClass",description:"Luminousforts 1.0: 3x4 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_3x4.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_block3x5",type:"PointClass",description:"Luminousforts 1.0: 3x5 Block",parameters:[{name:"base",values:["Angles","Targetname","BlockBase"]},{name:"studio",values:["models/construct/blocks/rect_3x5.mdl"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Neutral",2:"Blue",3:"Red"}},{type:"choices",name:"skin",title:"Skin",deflt:0,choices:{0:"Neutral",7:"Blue",14:"Red"}}]},{name:"lfc_prop_flag",type:"PointClass",description:"Luminousforts 1.0: Flag",parameters:[{name:"base",values:["Angles","Targetname","ThreeTeams","EnableDisable"]},{name:"studio",values:["models/roller.mdl"]}],inputs:[{name:"ChangeSpawnLocation",description:"Change the respawn location for the flag",type:"void"}],outputs:[{name:"OnScore",description:"On flag capture",type:"void"},{name:"OnPickup",description:"On the flag being picked up",type:"void"},{name:"OnDropped",description:"On dropping of flag",type:"void"},{name:"OnReturned",description:"On return of flag",type:"void"}]},{name:"lfc_item_ammo_crate",type:"PointClass",description:"Luminousforts 1.0: Ammo Crate",parameters:[{name:"base",values:["Targetname","Angles","ThreeTeams"]},{name:"studio",values:["models/crate/crate.mdl"]}],properties:[{type:"choices",name:"skin",title:"Skin",deflt:1,choices:{1:"Blue",2:"Red",3:"Both"}}],inputs:[{name:"InputKill",description:"Kill the crate",type:"void"}],outputs:[{name:"OnUsed",description:"On crate opened",type:"void"}]},{name:"lfc_item_healthcharger",type:"PointClass",description:"Luminousforts 1.0: Health Charger",parameters:[{name:"base",values:["Targetname","Angles","ThreeTeams"]},{name:"studio",values:["models/props_combine/health_charger001.mdl"]}],properties:[{type:"string",name:"_minlight",title:"Minimum light level"}],outputs:[{name:"OutRemainingHealth",description:"Remaining Health.",type:"float"},{name:"OnPlayerUse",description:"Fired when the player +USEs the charger.",type:"void"}]},{name:"lfc_point_blockspawner",type:"PointClass",description:"Luminousforts 1.0: Block spawner",parameters:[{name:"base",values:["Angles","Targetname","TwoTeams","EnableDisable"]},{name:"iconsprite",values:["editor/blockspawner.vmt"]}],properties:[{type:"choices",name:"block",title:"Block Number",deflt:1,choices:{1:"1x2",2:"1x3",3:"1x4",4:"1x5",5:"2x2",6:"2x3",7:"2x4",8:"2x5",9:"3x3",10:"3x4",11:"3x5"}}],inputs:[{name:"Spawn",description:"Spawns a block",type:"void"}],outputs:[{name:"OnSpawn",description:"On block spawn",type:"void"}]},{name:"lfc_random_blockspawner",type:"PointClass",description:"Luminousforts 1.0: Random Block spawner",parameters:[{name:"base",values:["Angles","Targetname","TwoTeams","EnableDisable"]},{name:"iconsprite",values:["editor/blockspawner_rand.vmt"]}],inputs:[{name:"RandomSpawn",type:"void"}]},{name:"lfc_trigger_flagzone",type:"SolidClass",description:"Luminousforts 1.0: FlagCap Zone",parameters:[{name:"base",values:["EnableDisable","ThreeTeams"]}],properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Both teams score",2:"Blue Scores",3:"Red Scores"}}]},{name:"lfc_trigger_nofreeze",type:"SolidClass",description:"Luminousforts 1.0: No blocks may be frozen in this zone",properties:[{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Both teams cannot freeze",2:"Blue cannot freeze",3:"Red cannot freeze"}}],inputs:[{name:"AllowFreeze",type:"void"},{name:"DisallowFreeze",type:"void"},{name:"AllowRedFreeze",type:"void"},{name:"DisallowRedFreeze",type:"void"},{name:"AllowBlueFreeze",type:"void"},{name:"DisallowBlueFreeze",type:"void"}],outputs:[{name:"OnBlockTouch",type:"void"},{name:"OnRedBlockTouch",type:"void"},{name:"OnBlueBlockTouch",type:"void"},{name:"OnRedPlayerTouch",type:"void"},{name:"OnBluePlayerTouch",type:"void"}]},{name:"lfc_trigger_disposer",type:"SolidClass",description:"Luminousforts 1.0: disposer",properties:[{type:"choices",name:"dissolve",title:"Dissolve Blocks",deflt:0,choices:{0:"Do not dissolve, just remove",1:"Use dissolve effect on blocks"}},{type:"choices",name:"team",title:"Team",deflt:1,choices:{1:"Everything is disposed",2:"Blue team may touch",3:"Red team may touch"}}],outputs:[{name:"OnDisposeBlock",description:"On the disposal of a block",type:"void"},{name:"OnDisposePlayer",description:"On the disposal of a player (dissolve a player)",type:"void"}]},{name:"lfc_button_build",type:"SolidClass",description:"func_button that only works in the build phase",parameters:[{name:"base",values:["Targetname","Parentname","Origin","RenderFields","DamageFilter","Button"]}],properties:[{type:"angle",name:"movedir",title:"Move Direction (Pitch Yaw Roll)",description:"Specifies the direction of motion to move when the button is used.",deflt:"0 0 0"},{type:"integer",name:"speed",title:"Speed",description:"The speed that the button moves, in inches per second.",deflt:5},{type:"integer",name:"health",title:"Health (Obsolete)",description:"Legacy method of specifying whether or not the button can be shot to activate it. Use the 'Damage Activates' spawnflag instead.",deflt:0},{type:"integer",name:"lip",title:"Lip",description:"The amount, in inches, of the button to leave sticking out of the wall it recedes into when pressed. Negative values make the button recede even further into the wall.",deflt:0},{type:"string",name:"master",title:"Master (Obsolete)",description:"Legacy support: The name of a master entity. If the master hasn't been activated, this button cannot be pressed."},{type:"choices",name:"sounds",title:"Sounds",deflt:0,choices:{0:"None (Silent)",1:"Big zap & Warmup",2:"Access Denied",3:"Access Granted",4:"Quick Combolock",5:"Power Deadbolt 1",6:"Power Deadbolt 2",7:"Plunger",8:"Small zap",9:"Keycard Sound",10:"Buzz",11:"Buzz Off",12:"latch locked",13:"Latch Unlocked",14:"Lightswitch",15:"small bleek",16:"small deny",17:"small doop",18:"small tech deny",19:"click and combine screen fuzz",20:"roomy beep",21:"lever or wheel: turn + move sqeek",22:"lever or wheel: latch + release gas",23:"lever or wheel: ratchet + sqeek",24:"lever or wheel: large ratchet",25:"lever or wheel: clanky + gas release",26:"lever or wheel: latch + large metal thud",27:"lever or wheel: smaller ratchet",28:"lever or wheel: smaller lever move",31:"shock buzz",32:"clickbeep",33:"tech blip",34:"clickbeepbeep open",35:"small high blip",36:"small tech fuzz blip",37:"small click bleep (change to lightswitch)",40:"combine door lock - locked",41:"combine blip growl",42:"combine squick growl",43:"combine whine purr",44:"combine click talk",45:"combine click growl fizz",46:"combine click fizz (deny)",47:"combine click talker"}},{type:"integer",name:"wait",title:"Delay Before Reset (-1 stay)",description:"Amount of time, in seconds, after the button has been pressed before it returns to the starting position. Once it has returned, it can be used again. If the value is set to -1, the button never returns.",deflt:3},{type:"choices",name:"locked_sound",title:"Locked Sound",description:"Sound played when the player tries to use the button, and fails because it's locked.",deflt:0,choices:{0:"None",2:"Access Denied",8:"Small zap",10:"Buzz",11:"Buzz Off",12:"Latch Locked"}},{type:"choices",name:"unlocked_sound",title:"Unlocked Sound",description:"Sound played when the button is unlocked.",deflt:0,choices:{0:"None",1:"Big zap & Warmup",3:"Access Granted",4:"Quick Combolock",5:"Power Deadbolt 1",6:"Power Deadbolt 2",7:"Plunger",8:"Small zap",9:"Keycard Sound",10:"Buzz",13:"Latch Unlocked",14:"Lightswitch"}},{type:"choices",name:"locked_sentence",title:"Locked Sentence",description:"A sentence played when the player tries to use the button, and fails because it's locked.",deflt:0,choices:{0:"None",1:"Gen. Access Denied",2:"Security Lockout",3:"Blast Door",4:"Fire Door",5:"Chemical Door",6:"Radiation Door",7:"Gen. Containment",8:"Maintenance Door",9:"Broken Shut Door"}},{type:"choices",name:"unlocked_sentence",title:"Unlocked Sentence",description:"A sentence played when the button is unlocked.",deflt:0,choices:{0:"None",1:"Gen. Access Granted",2:"Security Disengaged",3:"Blast Door",4:"Fire Door",5:"Chemical Door",6:"Radiation Door",7:"Gen. Containment",8:"Maintenance area"}},{type:"string",name:"_minlight",title:"Minimum Light Level",description:"The minimum level of ambient light that hits this brush."}],flags:[{title:"Don't move",value:1,enabled:!1},{title:"Toggle",value:32,enabled:!1},{title:"Touch Activates",value:256,enabled:!1},{title:"Damage Activates",value:512,enabled:!1},{title:"Use Activates",value:1024,enabled:!0},{title:"Starts locked",value:2048,enabled:!1},{title:"Sparks",value:4096,enabled:!1}]}]}},170:function(e){e.exports={includes:[],entities:[{name:"lfd_capture_zone",type:"SolidClass",description:"Luminousforts 1.0: Domination Capture Zone",parameters:[{name:"base",values:["EnableDisable"]}],properties:[{type:"integer",name:"SecondsToCapture",title:"Seconds to Capture",deflt:12},{type:"integer",name:"PointIncrease",title:"Points Increase per Interval",deflt:0},{type:"integer",name:"PointIncreaseInterval",title:"Point Increase Interval (seconds)",deflt:5},{type:"choices",name:"DisableInBuild",title:"Disable in Build",deflt:1,choices:{1:"True",2:"False"}},{type:"choices",name:"Locked",title:"Capture point is locked and cannot be captured",deflt:0,choices:{0:"Unlocked",1:"Locked"}},{type:"integer",name:"ZoneId",title:"Zone id of the Node",deflt:0},{type:"integer",name:"ParentZone1",title:"Id of the 1st parent Node",deflt:0},{type:"integer",name:"ParentZone2",title:"Id of the 2nd parent Node ",deflt:0},{type:"integer",name:"ParentZone3",title:"Id of the 3rd parent Node",deflt:0}],inputs:[{name:"DisablesCaptures",description:"Disable the ability to capture",type:"void"},{name:"EnableCaptures",description:"Enable the ability to capture",type:"void"},{name:"Lock",description:"Lock the capture point (same as disable, but shows the lock icon)",type:"void"},{name:"Unlock",description:"Unlock the capture point (same as enable, but removes the lock icon)",type:"void"}],outputs:[{name:"OnCaptured",description:"Fired on capture",type:"void"},{name:"OnCapturedBy",description:"Fired on capture with teamnumber",type:"integer"},{name:"OnLost",description:"Fired on capture point lost with teamnumber",type:"integer"}]}]}},171:function(e){e.exports={includes:[],entities:[{name:"lfcus_point_blockspawner",type:"PointClass",description:"Luminousforts Custom: Custom Blockspawner",parameters:[{name:"base",values:["Angles","Targetname","TwoTeams","EnableDisable","Studiomodel"]},{name:"iconsprite",values:["editor/blockspawner_cus.vmt"]}],properties:[{type:"choices",name:"FollowBlockLimit",title:"FollowBlockLimit",deflt:1,choices:{1:"True",2:"False"}},{type:"choices",name:"BlockDestructable",title:"BlockDestructable",deflt:1,choices:{0:"False",1:"True"}},{type:"integer",name:"BlockHealth",title:"BlockHealth",deflt:4e3},{type:"choices",name:"BlockWorth",title:"BlockWorth",deflt:1,choices:{1:"1x2",2:"1x3",3:"1x4",4:"1x5",5:"2x2",6:"2x3",7:"2x4",8:"2x5",9:"3x3",10:"3x4",11:"3x5"}}],inputs:[{name:"Spawn",description:"Spawn block",type:"void"}],outputs:[{name:"OnSpawn",description:"On block spawn",type:"void"}]},{name:"lfcus_prop_block_custom",type:"PointClass",description:"Luminousforts 1.0: Custom Block",parameters:[{name:"base",values:["Angles","Targetname","ThreeTeams","BlockBase"]},{name:"iconsprite",values:["editor/blockspawner_prop.vmt"]}],properties:[{type:"string",name:"BlockModel",title:"BlockModel",deflt:"models/construct/blocks/rect_1x2.mdl"}]},{name:"lfcus_block_manager",type:"PointClass",description:"Luminousforts Custom: Global manager for blocks",parameters:[{name:"iconsprite",values:["editor/blockmanager.vmt"]}],inputs:[{name:"DisableBlockDestruction",description:"Enable the destructable attribute on blocks",type:"void"},{name:"EnableBlockDestruction",description:"Disable the destructable attribute on blocks",type:"void"},{name:"SetBlockLimit",description:"Change the block limit for both teams",type:"integer"},{name:"SetRedBlockLimit",description:"Change the block limit for the red team",type:"integer"},{name:"SetBlueBlockLimit",description:"Change the block limit for the blue team",type:"integer"}],outputs:[{name:"OnRedBlockLimitReached",description:"Triggered when the Red team reaches their block limit",type:"void"},{name:"OnBlueBlockLimitReached",description:"Triggered when the Blue team reaches their block limit",type:"void"},{name:"OnRedBlockSpawned",description:"Triggered when a Red block is spawned",type:"void"},{name:"OnBlueBlockSpawned",description:"Triggered when a Blue block is spawned",type:"void"}]},{name:"lfcus_manager_hud",type:"PointClass",description:"Luminousforts Custom: Hud Manager",flags:[{title:"No Hud Elements",value:0,enabled:!1},{title:"All Hud Elements",value:1,enabled:!0},{title:"Block Health",value:2,enabled:!1},{title:"Flag Carrier",value:4,enabled:!1},{title:"Flag Compass",value:8,enabled:!1},{title:"Flag Position",value:16,enabled:!1},{title:"Phase Time",value:32,enabled:!1},{title:"Player Markers",value:64,enabled:!1},{title:"Freeze Progress",value:128,enabled:!1},{title:"Capture Points",value:256,enabled:!1},{title:"Capture Positions",value:512,enabled:!1}],inputs:[{name:"EnableHudElement",type:"integer"},{name:"DisableHudElement",type:"integer"}]},{name:"lfcus_score_manager",type:"PointClass",description:"Luminousforts Custom: Score Manager",inputs:[{name:"GiveRedPoints",type:"integer"},{name:"GiveBluePoints",type:"integer"},{name:"TakeRedPoints",type:"integer"},{name:"TakeBluePoints",type:"integer"}]}]}},172:function(e){e.exports={includes:[],entities:[{name:"lf_logic_gamecontrol",type:"PointClass",description:"Luminousforts 1.0: GameController",parameters:[{name:"base",values:["Targetname"]},{name:"iconsprite",values:["editor/gamecontrol.vmt"]}],inputs:[{name:"TogglePhase",description:"Toggle the phase (Build/Combat)",type:"void"},{name:"SwitchToBuild",description:"Switch to Build phase",type:"void"},{name:"SwitchToCombat",description:"Switch to Combat phase",type:"void"}],outputs:[{name:"OnBuildPhase",description:"On Build Phase",type:"void"},{name:"OnCombatPhase",description:"On Combat Phase",type:"void"}]},{name:"filter_activator_team",type:"FilterClass",description:"A filter that filters by the team of the activator.",parameters:[{name:"base",values:["BaseFilter"]},{name:"iconsprite",values:["editor/filterteam.vmt"]}],properties:[{type:"choices",name:"filterteam",title:"Filter Team Number",description:"The team number to filter by.  If the filter mode is Allow, only entities whose team number matches the given team will pass the filter. If the filter mode is Disallow, all entities EXCEPT those whose team number matches the given team will pass the filter.",deflt:2,choices:{2:"Blue",3:"Red"}}]},{name:"lf_player_spawnpoint",type:"PointClass",description:"Luminousforts 1.0: Spawnpoint",parameters:[{name:"base",values:["Targetname","Angles","EnableDisable","ThreeTeams"]},{name:"studio",values:["models/editor/playerstart.mdl"]}],inputs:[{name:"Disable",description:"Disables Spawnpoint",type:"void"},{name:"Enable",description:"Enables Spawnpoint",type:"void"}]},{name:"lf_copyright",type:"PointClass",description:"Luminousforts 1.0: Copyright entity for Mappers",parameters:[{name:"iconsprite",values:["editor/copyright.vmt"]}],properties:[{type:"string",name:"oauthor",title:"Original Author",description:"Original Author of the map",deflt:""},{type:"string",name:"odate",title:"Original Date",description:"Date of Original Author's release",deflt:""},{type:"string",name:"odescription",title:"Original Description",description:"Description by original author of the map",deflt:""},{type:"string",name:"uauthor",title:"Updated Author",description:"Updated Author of the map",deflt:""},{type:"string",name:"udate",title:"Updated Date",description:"Date of Updated Author's release",deflt:""},{type:"string",name:"udescription",title:"Updated Description",description:"Description by updated author of the map",deflt:""}]},{name:"info_player_red",type:"PointClass",description:"",parameters:[{name:"base",values:["Targetname","Angles","EnableDisable"]},{name:"studio",values:["models/editor/player_red.mdl"]}]},{name:"info_player_blue",type:"PointClass",description:"",parameters:[{name:"base",values:["Targetname","Angles","EnableDisable"]},{name:"studio",values:["models/editor/player_blue.mdl"]}]},{name:"lf_func_spawndoor",type:"SolidClass",description:"Luminousforts 1.0: Team based spawn door",properties:[{type:"choices",name:"team",title:"Team",deflt:2,choices:{2:"Blue team may pass through",3:"Red team may pass through"}}]}]}}}]);
//# sourceMappingURL=component---src-pages-entities-js-08c3337ce4d7d997f246.js.map