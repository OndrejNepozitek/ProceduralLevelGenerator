(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{100:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return o?r.a.createElement(m,s(s({ref:t},l),{},{components:o})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},101:function(e,t,o){"use strict";var n=o(0),r=o(20);t.a=function(){const e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o(101),r=o(103);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(r.b)(o))return o;if(n)return t+o;const i=!o.startsWith(t)?t+o.replace(/^\//,""):o;return a?e+i:i}(t,e,o,n)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},103:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}))},104:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return c}));var n=o(0),r=o.n(n),a=o(102);const i=e=>r.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),s=e=>r.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},r.a.Children.map(e.children,t=>r.a.cloneElement(t,{cols:e.cols||4}))),c=e=>e.withoutLinks?r.a.createElement(i,{cols:e.cols},r.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})):r.a.createElement("a",{href:Object(a.a)(e.src),target:"_blank"},r.a.createElement(i,{cols:e.cols},r.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})))},90:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(2),r=o(6),a=(o(0),o(100)),i=o(102),s=o(104),c={title:"Basics",sidebar_label:"Basics"},l={unversionedId:"guides/basics",id:"guides/basics",isDocsHomePage:!1,title:"Basics",description:"In this tutorial, we will create a basic map description with 4 rooms that have rectangular shapes. The process has 2 steps - specifying the graph and assigning shapes to rooms.",source:"@site/docs\\guides\\basics.md",permalink:"/Edgar-DotNet/docs/next/guides/basics",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/docs/guides/basics.md",version:"next",sidebar_label:"Basics",sidebar:"docs",previous:{title:"Guides",permalink:"/Edgar-DotNet/docs/next/guides/introduction"},next:{title:"Different room descriptions",permalink:"/Edgar-DotNet/docs/next/guides/different-room-descriptions"}},p=[{value:"Room templates",id:"room-templates",children:[{value:"Polygons",id:"polygons",children:[]},{value:"Doors",id:"doors",children:[]},{value:"(Optional) Allowed transformations",id:"optional-allowed-transformations",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}]},{value:"Room descriptions",id:"room-descriptions",children:[]},{value:"Graph",id:"graph",children:[]},{value:"Generating layouts",id:"generating-layouts",children:[]},{value:"Results",id:"results",children:[]}],d={rightToc:p};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we will create a basic map description with 4 rooms that have rectangular shapes. The process has 2 steps - specifying the graph and assigning shapes to rooms."),Object(a.b)("h2",{id:"room-templates"},"Room templates"),Object(a.b)("p",null,"First, we will create our room templates. We must create an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"RoomTemplate")," class for each room template. To do that, we need to create a ",Object(a.b)("em",{parentName:"p"},"polygon")," that defines the outline of the room template and also provide a list of possible door positions."),Object(a.b)("h3",{id:"polygons"},"Polygons"),Object(a.b)("p",null,"We define polygons with a sequence of their vertices. In this tutorial, we will use an ",Object(a.b)("em",{parentName:"p"},"8x8 square")," and a ",Object(a.b)("em",{parentName:"p"},"6x10 rectangle")," but it is possible to use any orthogonal polygon."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Orthogonal (or rectilinear) polygon is a polygon of whose edge intersections are at right angles. When on an integer grid, each side of an orthogonal polygon is aligned with one of the axes.")),Object(a.b)("h3",{id:"doors"},"Doors"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"IDoorMode")," is an interface that specifies door positions of a given polygon. The most simple ",Object(a.b)("em",{parentName:"p"},"door mode")," is the ",Object(a.b)("inlineCode",{parentName:"p"},"SimpleDoorMode")," - it lets us specify the lenght of doors and how far from corners they must be. In this tutorial, we will use doors with length of 1 unit and at least 1 unit away from corners."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," There is also an additional door mode available - ",Object(a.b)("inlineCode",{parentName:"p"},"ManualDoorMode"),". This mode lets you specify exactly which door lines are to be used.")),Object(a.b)("h3",{id:"optional-allowed-transformations"},"(Optional) Allowed transformations"),Object(a.b)("p",null,"Optionally, it is also possible to let the algorithm apply some transformations to the room, e.g. rotate it by 90 degrees or mirror it by the X axis. The algorithm then also handles all the door positions automatically."),Object(a.b)("h3",{id:"putting-it-all-together"},"Putting it all together"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var doorMode = new SimpleDoorMode(1, 1);\n\nvar squareRoom = new RoomTemplate(\n  new GridPolygonBuilder()\n    .AddPoint(0, 0)\n    .AddPoint(0, 8)\n    .AddPoint(8, 8)\n    .AddPoint(8, 0)\n    .Build(),\n  doorMode\n);\n\nvar rectangleRoom = new RoomTemplate(\n  GridPolygon.GetRectangle(6, 10),\n  doorMode,\n  new List<Transformation>() { Transformation.Identity, Transformation.Rotate90 }\n);\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," There are several ways of constructing polygons:"),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GridPolygon.GetSquare(width)")," for squares"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GridPolygon.GetRectangle(width, height)")," for rectangles"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GridPolygonBuilder")," with the ",Object(a.b)("inlineCode",{parentName:"li"},".AddPoint(x, y)")),Object(a.b)("li",{parentName:"ul"},"or the ",Object(a.b)("inlineCode",{parentName:"li"},"GridPolygon(IEnumerable<IntVector2> points)")," constructor"))),Object(a.b)("h2",{id:"room-descriptions"},"Room descriptions"),Object(a.b)("p",null,"There is one more step needed before we create the graph of rooms and connections. The algorithm works best if it can choose from multiple room templates when deciding how should a room look like. So we will create a so called ",Object(a.b)("em",{parentName:"p"},"room description")," which is simply a list of possible room templates which we later assign to a room."),Object(a.b)("p",null,"In this tutorial, we do not have any special rooms that should look different than other rooms so we can create only a single room description and reuse it for all rooms."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var basicRoomDescription = new BasicRoomDescription(new List<RoomTemplate>() { squareRoom, rectangleRoom });\n")),Object(a.b)("h2",{id:"graph"},"Graph"),Object(a.b)("p",null,"Now we are ready to create the graph of rooms. Every vertex in the graph represents one room in the final layout. And every edge represents a connection of two rooms by doors. To make things simple, we will use a 4-cycle in this tutorial:"),Object(a.b)("img",{style:{marginBottom:20},alt:"Graph",src:Object(i.a)("img/basics/graph.svg")}),Object(a.b)("p",null,"First, we will create an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"MapDescription")," class:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var mapDescription = new MapDescription<int>();\n")),Object(a.b)("p",null,"Then we will add all the rooms together with our room description:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"mapDescription.AddRoom(0, basicRoomDescription);\nmapDescription.AddRoom(1, basicRoomDescription);\nmapDescription.AddRoom(2, basicRoomDescription);\nmapDescription.AddRoom(3, basicRoomDescription);\n")),Object(a.b)("p",null,"And finally we add all the connections:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"mapDescription.AddConnection(0, 1);\nmapDescription.AddConnection(0, 3);\nmapDescription.AddConnection(1, 2);\nmapDescription.AddConnection(2, 3);\n")),Object(a.b)("p",null,"The map description is now ready to be used in the generator."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," For simplicity, we use the ",Object(a.b)("inlineCode",{parentName:"p"},"int")," version of the map description where each room is represented by an integer. But if we want to store additional data for each room, we can use the map description with a custom room type.")),Object(a.b)("h2",{id:"generating-layouts"},"Generating layouts"),Object(a.b)("p",null,"Now we are ready to create an instance of the dungeon generator and generate a layout:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var generator = new DungeonGenerator<int>(mapDescription);\nvar layout = generator.GenerateLayout();\n")),Object(a.b)("h2",{id:"results"},"Results"),Object(a.b)(s.a,{cols:4,mdxType:"Gallery"},Object(a.b)(s.b,{src:"img/basics/0.jpg",mdxType:"GalleryImage"}),Object(a.b)(s.b,{src:"img/basics/1.jpg",mdxType:"GalleryImage"}),Object(a.b)(s.b,{src:"img/basics/2.jpg",mdxType:"GalleryImage"}),Object(a.b)(s.b,{src:"img/basics/3.jpg",mdxType:"GalleryImage"})))}b.isMDXComponent=!0}}]);