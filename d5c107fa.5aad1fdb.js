(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},101:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(101),a=n(103);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=!n.startsWith(t)?t+n.replace(/^\//,""):n;return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},103:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=n(0),a=n.n(r),o=n(102);const i=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),s=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4}))),c=e=>e.withoutLinks?a.a.createElement(i,{cols:e.cols},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result"})):a.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},a.a.createElement(i,{cols:e.cols},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result"})))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(100)),i=n(102),s=n(104),c={id:"basicMapDescription",title:"Basics",sidebar_label:"Basics"},l={unversionedId:"basicMapDescription",id:"version-1.0.6/basicMapDescription",isDocsHomePage:!1,title:"Basics",description:"In this tutorial, we will create a basic map description with 4 rooms that have rectangular shapes. The process has 2 steps - specifying the graph and assigning shapes to rooms.",source:"@site/versioned_docs\\version-1.0.6\\basicMapDescription.md",permalink:"/Edgar-DotNet/docs/basicMapDescription",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-1.0.6/basicMapDescription.md",version:"1.0.6",sidebar_label:"Basics",sidebar:"version-1.0.6/someSidebar",previous:{title:"Guides",permalink:"/Edgar-DotNet/docs/guides"},next:{title:"Different shapes",permalink:"/Edgar-DotNet/docs/differentShapesMapDescription"}},p=[{value:"Graph",id:"graph",children:[{value:"Using C# api",id:"using-c-api",children:[]},{value:"Using config files",id:"using-config-files",children:[]}]},{value:"Room shapes",id:"room-shapes",children:[{value:"Polygons",id:"polygons",children:[]},{value:"Door modes",id:"door-modes",children:[]},{value:"Using C# api",id:"using-c-api-1",children:[]},{value:"Using config files",id:"using-config-files-1",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Results",id:"results",children:[]}],d={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial, we will create a basic map description with 4 rooms that have rectangular shapes. The process has 2 steps - specifying the graph and assigning shapes to rooms."),Object(o.b)("h2",{id:"graph"},"Graph"),Object(o.b)("p",null,"First, we must create the underlying graph of rooms. Every vertex in the graph represents one room in the final layout. And every edge represents a connection of two rooms by doors. To make things simple, we will use a 4-cycle in this tutorial:"),Object(o.b)("img",{alt:"Graph",src:Object(i.a)("img/basics/graph.svg")}),";",Object(o.b)("p",null,"Let's create the graph:"),Object(o.b)("h3",{id:"using-c-api"},"Using C# api"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"var mapDescription = new MapDescription<int>();\n\n// Add rooms ( - you would normally use a for cycle)\nmapDescription.AddRoom(0);\nmapDescription.AddRoom(1);\nmapDescription.AddRoom(2);\nmapDescription.AddRoom(3);\n\n// Add passages\nmapDescription.AddPassage(0, 1);\nmapDescription.AddPassage(0, 3);\nmapDescription.AddPassage(1, 2);\nmapDescription.AddPassage(2, 3);\n")),Object(o.b)("h3",{id:"using-config-files"},"Using config files"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Maps/tutorial_basic.yml\n\n# We want 4 vertices\nroomsRange:\n  from: 0\n  to: 3\n\n# Define passages\npassages:\n  - [0,1]\n  - [0,3]\n  - [1,2]\n  - [2,3]\n")),Object(o.b)("h2",{id:"room-shapes"},"Room shapes"),Object(o.b)("p",null,"The next step is to add room shapes. We must create an instance of a ",Object(o.b)("inlineCode",{parentName:"p"},"RoomDescription")," class for each room shape. For that, we need a ",Object(o.b)("em",{parentName:"p"},"polygon")," and a ",Object(o.b)("em",{parentName:"p"},"door mode"),". "),Object(o.b)("h3",{id:"polygons"},"Polygons"),Object(o.b)("p",null,"We define polygons by a sequence of their vertices. In this tutorial, we will use an ",Object(o.b)("em",{parentName:"p"},"8x8 square")," and a ",Object(o.b)("em",{parentName:"p"},"6x10 rectangle")," but it is possible to use any orthogonal polygon."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Orthogonal (or rectilinear) polygon is a polygon of whose edge intersections are at right angles. When on an integer grid, each side of an orthogonal polygon is aligned with one of the axes."),Object(o.b)("h3",{id:"door-modes"},"Door modes"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"IDoorMode")," is an interface that specifies door positions of a given polygon. The most simple ",Object(o.b)("em",{parentName:"p"},"door mode")," is an ",Object(o.b)("inlineCode",{parentName:"p"},"OverlapMode")," - it lets us specify the lenght of doors and how far from corners they must be. In this tutorial, we will use doors with length of 1 unit and at least 1 unit away from corners."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," There is currently an additional door mode available - ",Object(o.b)("inlineCode",{parentName:"p"},"SpecificPositionsMode"),". This mode lets you specify exactly which door lines are to be used."),Object(o.b)("p",null,"Lets put it together:"),Object(o.b)("h3",{id:"using-c-api-1"},"Using C# api"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"// Rooms and passages are added here.\n\n// Add room shapes\nvar doorMode = new OverlapMode(1, 1);\n\nvar squareRoom = new RoomDescription(\n  GridPolygon.GetSquare(8),\n  doorMode\n);\nvar rectangleRoom = new RoomDescription(\n  GridPolygon.GetRectangle(6, 10),\n  doorMode\n);\n\nmapDescription.AddRoomShapes(squareRoom);\nmapDescription.AddRoomShapes(rectangleRoom);\n")),Object(o.b)("h3",{id:"using-config-files-1"},"Using config files"),Object(o.b)("p",null,"We first create a ",Object(o.b)("em",{parentName:"p"},"tutorial_basicRooms.yml")," file under the ",Object(o.b)("em",{parentName:"p"},"Resources/Rooms")," folder. Here we add our room descriptions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Resources/Rooms/tutorial_basicRooms.yml\n\nname: tutorial_basicRooms\nroomDescriptions:\n  # Create 8x8 square\n  8-square:\n    shape: [[0,0], [0,8], [8,8], [8,0]]\n    doorMode: !OverlapMode\n      doorLength: 1\n      cornerDistance: 1\n  # Create 6x10 rectangle\n  6-10-rectangle:\n    shape: [[0,0], [0,10], [6,10], [6,0]]\n    doorMode: !OverlapMode\n      doorLength: 1\n      cornerDistance: 1\n")),Object(o.b)("p",null,"And now we have to register them to be used in our map description:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Resources/Maps/tutorial_basic.yml\n\n# Rooms and passages are added here.\n\ndefaultRoomShapes:\n  - setName: tutorial_basicRooms\n")),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"The map description is now ready to be used in a layout generator. You can find the full C# source code ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/blob/master/Sandbox/Examples/BasicsExample.cs"}),"here")," and the config files ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/tree/master/Resources"}),"here"),"."),Object(o.b)("h2",{id:"results"},"Results"),Object(o.b)(s.a,{cols:2,mdxType:"Gallery"},Object(o.b)(s.b,{src:"img/basics/0.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/basics/1.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/basics/2.jpg",mdxType:"GalleryImage"}),Object(o.b)(s.b,{src:"img/basics/3.jpg",mdxType:"GalleryImage"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Click on images to see them in a full size."))}u.isMDXComponent=!0}}]);