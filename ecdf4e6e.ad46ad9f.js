(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var o=n(0),r=n(20);t.a=function(){const e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(105),r=n(107);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.a)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const a=!n.startsWith(t)?t+n.replace(/^\//,""):n;return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},107:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var o=n(0),r=n.n(o),i=n(106);const a=e=>r.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),l=e=>r.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},r.a.Children.map(e.children,t=>r.a.cloneElement(t,{cols:e.cols||4}))),s=e=>e.withoutLinks?r.a.createElement(a,{cols:e.cols},r.a.createElement("img",{src:Object(i.a)(e.src),alt:"result"})):r.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},r.a.createElement(a,{cols:e.cols},r.a.createElement("img",{src:Object(i.a)(e.src),alt:"result"})))},123:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/0_0-45f764a60a9313c739ab37475d1fced3.png"},124:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/0_1-99b8f21a26dd3f165b06f9e8090dcc26.png"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/room_templates-2371dd7e708434efd8720ccf027750e2.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/graph-1c6f66e195992daac99428db9603c446.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/0_2-fe6b1160de3d67edb323672c2fddf410.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/0_3-2d25190f5e86f13bf0f1a0065d4b3a65.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(104)),a=n(108),l={title:"Basics"},s={unversionedId:"grid2d/basics",id:"version-2.0.0-alpha.0/grid2d/basics",isDocsHomePage:!1,title:"Basics",description:"In this example, we will generate a very simple level consisting of 5 rooms with rectangular shapes.",source:"@site/versioned_docs\\version-2.0.0-alpha.0\\grid2d\\basics.md",permalink:"/Edgar-DotNet/docs/grid2d/basics",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-2.0.0-alpha.0/grid2d/basics.md",version:"2.0.0-alpha.0",sidebar:"version-2.0.0-alpha.0/docs",previous:{title:"Guides",permalink:"/Edgar-DotNet/docs/grid2d/introduction"},next:{title:"Corridors",permalink:"/Edgar-DotNet/docs/grid2d/corridors"}},c=[{value:"Room templates",id:"room-templates",children:[{value:"Outline",id:"outline",children:[]},{value:"Doors",id:"doors",children:[]},{value:"Allowed transformations",id:"allowed-transformations",children:[]},{value:"Putting it all together",id:"putting-it-all-together",children:[]}]},{value:"Room description",id:"room-description",children:[]},{value:"Level description",id:"level-description",children:[]},{value:"Generating the level",id:"generating-the-level",children:[]},{value:"Saving the result",id:"saving-the-result",children:[]},{value:"Results",id:"results",children:[]},{value:"Source code",id:"source-code",children:[]}],d={rightToc:c};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this example, we will generate a very simple level consisting of 5 rooms with rectangular shapes."),Object(i.b)("h2",{id:"room-templates"},"Room templates"),Object(i.b)("p",null,"First, we will create our room templates. To do that, we need to create a ",Object(i.b)("em",{parentName:"p"},"polygon")," that defines the outline of the room template and also provide a list of possible door positions."),Object(i.b)("h3",{id:"outline"},"Outline"),Object(i.b)("p",null,"In the ",Object(i.b)("em",{parentName:"p"},"Grid2D")," setting, the outline of a room template is an orthogonal polygon where each point has integer coordinates. In other words, it is a polygon that we can draw on an integer grid using 1x1 square tiles."),Object(i.b)("p",null,"The first outline that we create is a 6x10 rectangle:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar squareRoomOutline = new PolygonGrid2DBuilder()\n    .AddPoint(0, 0)\n    .AddPoint(0, 10)\n    .AddPoint(6, 10)\n    .AddPoint(6, 0)\n    .Build();\n\n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," Orthogonal (or rectilinear) polygon is a polygon of whose edge intersections are at right angles. When on an integer grid, each side of an orthogonal polygon is aligned with one of the axes.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," There are several ways of constructing polygons:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PolygonGrid2D.GetSquare(width)")," for squares"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PolygonGrid2D.GetRectangle(width, height)")," for rectangles"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PolygonGrid2DBuilder")," with the ",Object(i.b)("inlineCode",{parentName:"li"},".AddPoint(x, y)")," method"),Object(i.b)("li",{parentName:"ul"},"or the ",Object(i.b)("inlineCode",{parentName:"li"},"PolygonGrid2D(IEnumerable<Vector2Int> points)")," constructor"))),Object(i.b)("h3",{id:"doors"},"Doors"),Object(i.b)("p",null,"In order to tell the generator how it can connect individual room templates, we need to specify all the available door positions. The main idea is that the more door positions we provide, the easier it is for the generator to find a valid layout. To define door positions, we use the ",Object(i.b)("inlineCode",{parentName:"p"},"IDoorModeGrid2D")," interface. The most simple ",Object(i.b)("em",{parentName:"p"},"door mode")," is the ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleDoorModeGrid2D")," - it lets us specify the length of doors and how far from corners of the outline they must be. In this tutorial, we will use doors with length of 1 tile and at least 1 tile away from corners."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar doors = new SimpleDoorModeGrid2D(doorLength: 1, cornerDistance: 1);\n\n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," There is also an additional door mode available - ",Object(i.b)("inlineCode",{parentName:"p"},"ManualDoorModeGrid2D"),". This mode lets you specify exactly which door positions are available. It is useful for example when we want to have doors only on the two opposite sides of a corridor.")),Object(i.b)("h3",{id:"allowed-transformations"},"Allowed transformations"),Object(i.b)("p",null,"Optionally, it is also possible to let the generator apply some transformations to the room, e.g. rotate it by 90 degrees or mirror it by the X axis. An advantage of this approach is that the algorithm automatically handles door positions and we do not have to manually define all the variations of the room template."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar transformations = new List<TransformationGrid2D>()\n{\n    TransformationGrid2D.Identity,\n    TransformationGrid2D.Rotate90\n};\n\n\n")),Object(i.b)("h3",{id:"putting-it-all-together"},"Putting it all together"),Object(i.b)("p",null,"We can now combine the ",Object(i.b)("em",{parentName:"p"},"outline"),", ",Object(i.b)("em",{parentName:"p"},"door mode")," and ",Object(i.b)("em",{parentName:"p"},"allowed transformations")," together to create our first room template. We also provide a ",Object(i.b)("em",{parentName:"p"},"name")," which is optional but it may come in handy if we need to debug something."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'\nvar rectangleRoomTemplate = new RoomTemplateGrid2D(\n    squareRoomOutline,\n    doors,\n    allowedTransformations: transformations,\n    name: "Rectangle 6x10"\n);\n\n\n')),Object(i.b)("p",null,"We can also create a room template in-place with a single expression."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'\nvar squareRoomTemplate = new RoomTemplateGrid2D(\n    PolygonGrid2D.GetSquare(8),\n    new SimpleDoorModeGrid2D(doorLength: 1, cornerDistance: 1),\n    name: "Square 8x8"\n);\n\n\n')),Object(i.b)("p",null,"Below we can see a visualization of the two room templates. Individual door positions are shown in red."),Object(i.b)("p",null,Object(i.b)("img",{src:n(199).default})),Object(i.b)("h2",{id:"room-description"},"Room description"),Object(i.b)("p",null,"When we have our room templates ready, we need to create an instance of the ",Object(i.b)("inlineCode",{parentName:"p"},"RoomDescriptionGrid2D")," class which describes the properties of individual rooms in the level. In this tutorial, all the rooms use the same pool of room templates, so we can create only a single room description and reuse it. However, it is also possible to use different room description for different types of rooms. For example, we may want to have a boss room and a spawn room that should use different room templates than normal rooms."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar roomDescription = new RoomDescriptionGrid2D\n(\n    isCorridor: false,\n    roomTemplates: new List<RoomTemplateGrid2D>() { rectangleRoomTemplate, squareRoomTemplate }\n);\n\n\n")),Object(i.b)("h2",{id:"level-description"},"Level description"),Object(i.b)("p",null,"The final step is to describe the structure of the level. We will use a very simple graph of rooms that we can see below:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(200).default})),Object(i.b)("p",null,"First, we have to create an instance of the ",Object(i.b)("inlineCode",{parentName:"p"},"LevelDescriptionGrid2D<TRoom>")," class. For simplicity, We will use ",Object(i.b)("inlineCode",{parentName:"p"},"integers")," to identify individual rooms. But it is also possible to use a custom room type by using a different generic type parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar levelDescription = new LevelDescriptionGrid2D<int>();\n\n\n")),Object(i.b)("p",null,"Next, we add individual rooms to the level description."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nlevelDescription.AddRoom(0, roomDescription);\nlevelDescription.AddRoom(1, roomDescription);\nlevelDescription.AddRoom(2, roomDescription);\nlevelDescription.AddRoom(3, roomDescription);\nlevelDescription.AddRoom(4, roomDescription);\n\n\n")),Object(i.b)("p",null,"And lastly, we describe how should individual rooms be connected."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nlevelDescription.AddConnection(0, 1);\nlevelDescription.AddConnection(0, 3);\nlevelDescription.AddConnection(0, 4);\nlevelDescription.AddConnection(1, 2);\nlevelDescription.AddConnection(2, 3);\n\n\n\n")),Object(i.b)("h2",{id:"generating-the-level"},"Generating the level"),Object(i.b)("p",null,"To generate the level, we need to create an instance of the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphBasedGenerator<TRoom>")," class. As we use integers to identify individual rooms, we will substitute the generic type parameter with ",Object(i.b)("inlineCode",{parentName:"p"},"int")," and pass the level description to the constructor of the generator."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar generator = new GraphBasedGeneratorGrid2D<int>(levelDescription);\n\n\n")),Object(i.b)("p",null,"When we have an instance of the generator, we simply call the ",Object(i.b)("inlineCode",{parentName:"p"},"GenerateLayout()")," method and wait until the generator finds a valid layout based on our level description."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nvar layout = generator.GenerateLayout();\n\n\n")),Object(i.b)("p",null,"The result contains information about all the rooms in the level such as outline of the room or its position."),Object(i.b)("h2",{id:"saving-the-result"},"Saving the result"),Object(i.b)("p",null,"If we want to quickly visualize the result, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"DungeonDrawer<TRoom>")," class and export the layout as a PNG image."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'\nvar drawer = new DungeonDrawer<int>();\ndrawer.DrawLayoutAndSave(layout, "basics.png", new DungeonDrawerOptions()\n{\n    Width = 2000,\n    Height = 2000,\n});\n\n\n')),Object(i.b)("h2",{id:"results"},"Results"),Object(i.b)("p",null,"Below you can see some of the results generated from this example:"),Object(i.b)(a.a,{cols:2,mdxType:"Gallery"},Object(i.b)(a.b,{src:n(123).default,mdxType:"GalleryImage"}),Object(i.b)(a.b,{src:n(124).default,mdxType:"GalleryImage"}),Object(i.b)(a.b,{src:n(201).default,mdxType:"GalleryImage"}),Object(i.b)(a.b,{src:n(202).default,mdxType:"GalleryImage"})),Object(i.b)("div",{style:{textAlign:"center",marginTop:"-15px"}},Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Average time to generate the level: 0.01s (0.00s init, 0.01s generation itself)"))),Object(i.b)("h2",{id:"source-code"},"Source code"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'using System.Collections.Generic;\nusing System.Linq;\nusing Edgar.Geometry;\nusing Edgar.GraphBasedGenerator.Grid2D;\nusing Edgar.GraphBasedGenerator.Grid2D.Drawing;\n\nnamespace Examples\n{\n    public class BasicsExample \n    {\n        /// <summary>\n        /// Prepare level description.\n        /// </summary>\n        public LevelDescriptionGrid2D<int> GetLevelDescription()\n        {\n            var squareRoomOutline = new PolygonGrid2DBuilder()\n                .AddPoint(0, 0)\n                .AddPoint(0, 10)\n                .AddPoint(6, 10)\n                .AddPoint(6, 0)\n                .Build();\n            \n            var doors = new SimpleDoorModeGrid2D(doorLength: 1, cornerDistance: 1);\n\n            var transformations = new List<TransformationGrid2D>()\n            {\n                TransformationGrid2D.Identity,\n                TransformationGrid2D.Rotate90\n            };\n\n            var rectangleRoomTemplate = new RoomTemplateGrid2D(\n                squareRoomOutline,\n                doors,\n                allowedTransformations: transformations,\n                name: "Rectangle 6x10"\n            );\n\n            var squareRoomTemplate = new RoomTemplateGrid2D(\n                PolygonGrid2D.GetSquare(8),\n                new SimpleDoorModeGrid2D(doorLength: 1, cornerDistance: 1),\n                name: "Square 8x8"\n            );\n\n            var roomDescription = new RoomDescriptionGrid2D\n            (\n                isCorridor: false,\n                roomTemplates: new List<RoomTemplateGrid2D>() { rectangleRoomTemplate, squareRoomTemplate }\n            );\n            \n            var levelDescription = new LevelDescriptionGrid2D<int>();\n\n            levelDescription.AddRoom(0, roomDescription);\n            levelDescription.AddRoom(1, roomDescription);\n            levelDescription.AddRoom(2, roomDescription);\n            levelDescription.AddRoom(3, roomDescription);\n            levelDescription.AddRoom(4, roomDescription);\n\n            levelDescription.AddConnection(0, 1);\n            levelDescription.AddConnection(0, 3);\n            levelDescription.AddConnection(0, 4);\n            levelDescription.AddConnection(1, 2);\n            levelDescription.AddConnection(2, 3);\n\n            return levelDescription;\n        }\n\n        /// <summary>\n        /// Run the generator and export the result.\n        /// </summary>\n        public void Run()\n        {\n            var levelDescription = GetLevelDescription();\n\n            var generator = new GraphBasedGeneratorGrid2D<int>(levelDescription);\n\n            var layout = generator.GenerateLayout();\n\n            var drawer = new DungeonDrawer<int>();\n            drawer.DrawLayoutAndSave(layout, "basics.png", new DungeonDrawerOptions()\n            {\n                Width = 2000,\n                Height = 2000,\n            });\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);