(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},105:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(105),a=r(107);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},107:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n),o=r(106);const i=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4}))),s=e=>e.withoutLinks?a.a.createElement(i,{cols:e.cols},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result"})):a.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},a.a.createElement(i,{cols:e.cols},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result"})))},121:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/2_0-dce93eb78b1265908469a8787e999ede.png"},122:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/2_1-23d66b6e53fce20c41641ec15454b3a0.png"},123:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/0_0-45f764a60a9313c739ab37475d1fced3.png"},124:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/0_1-99b8f21a26dd3f165b06f9e8090dcc26.png"},125:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/0_0-9e20c4eb1ca5cc3c511c16209535c6c3.png"},126:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/0_1-a5618c682a8da5030a0ec9b74b35a3fe.png"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(104)),i=(r(106),r(108)),c={title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"introduction",id:"version-2.0.0-alpha.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"(Design of exported levels inspired by Watabou's One Page Dungeon)",source:"@site/versioned_docs\\version-2.0.0-alpha.0\\introduction.md",permalink:"/Edgar-DotNet/docs/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-2.0.0-alpha.0/introduction.md",version:"2.0.0-alpha.0",sidebar_label:"Introduction",sidebar:"version-2.0.0-alpha.0/docs",next:{title:"Motivation",permalink:"/Edgar-DotNet/docs/motivation"}},l=[{value:"Graph-based approach",id:"graph-based-approach",children:[]},{value:"Handmade room templates",id:"handmade-room-templates",children:[]},{value:"CAUTION!",id:"caution",children:[]},{value:"Key features",id:"key-features",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Examples",id:"examples",children:[]}],u={rightToc:l};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"https://ondrejnepozitek.github.io/Edgar-DotNet/readme/example_1.png",width:"32%"})," ",Object(o.b)("img",{src:"https://ondrejnepozitek.github.io/Edgar-DotNet/readme/example_2.png",width:"32%"})," ",Object(o.b)("img",{src:"https://ondrejnepozitek.github.io/Edgar-DotNet/readme/example_3.png",width:"32%"}),Object(o.b)("p",{style:{textAlign:"center"}},Object(o.b)("i",null,"(Design of exported levels inspired by ",Object(o.b)("a",{href:"https://watabou.itch.io/one-page-dungeon"},"Watabou's One Page Dungeon"),")")),Object(o.b)("p",null,"This project is a .NET library for procedural generation of 2D dungeons (and platformers) and aims to give game designers a ",Object(o.b)("strong",{parentName:"p"},"complete control")," over generated levels. It combines ",Object(o.b)("strong",{parentName:"p"},"graph-based approach")," to procedural generation with ",Object(o.b)("strong",{parentName:"p"},"handmade room templates")," to generate levels with a ",Object(o.b)("strong",{parentName:"p"},"feeling of consistency"),". If you are using Unity, make sure to check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/Edgar-Unity"}),"Edgar for Unity")," - Unity plugin based on this library. And I have also written a post about the graph-based approach on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondra.nepozitek.cz/blog/42/dungeon-generator-part-1-node-based-approach/"}),"my blog"),"."),Object(o.b)("h3",{id:"graph-based-approach"},"Graph-based approach"),Object(o.b)("p",null,"You decide exactly how many rooms you want in a level and how they should be connected, and the generator produces layouts that follow exactly that structure. Do you want a boss room at the end of each level? Or a shop room halfway through the level? Everything is possible with a graph-based approach."),Object(o.b)("h3",{id:"handmade-room-templates"},"Handmade room templates"),Object(o.b)("p",null,"The appearance of individual rooms is controlled with so-called room templates. These are pre-authored building blocks from which the algorithm chooses when generating a layout. Each room template consists of an outline polygon and a set of available door positions. You can also assign different room templates to different types of rooms. For example, a spawn room should probably look different than a boss room."),Object(o.b)("h2",{id:"caution"},"CAUTION!"),Object(o.b)("p",null,"The library is currently being refactored to make the API nicer and make it easier to add new features in the future. As a result, only the most important logic is documented and I would not recommend looking into the insides of the algorithm. If you want to know how the algorithm works, check out my ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondra.nepozitek.cz/blog/42/dungeon-generator-part-1-node-based-approach/"}),"blog post"),"."),Object(o.b)("h2",{id:"key-features"},"Key features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Procedural dungeon generator"),Object(o.b)("li",{parentName:"ul"},"Describe the structure of levels with a graph of rooms and connections "),Object(o.b)("li",{parentName:"ul"},"Control the appearance of rooms with handmade room templates "),Object(o.b)("li",{parentName:"ul"},"Connect rooms either directly with doors or with short corridors"),Object(o.b)("li",{parentName:"ul"},"Export to JSON or PNG"),Object(o.b)("li",{parentName:"ul"},"Supports .NET Standard 2.0"),Object(o.b)("li",{parentName:"ul"},"Currently works only on the 2D grid but may support 3D in future"),Object(o.b)("li",{parentName:"ul"},"Comprehensive ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/Edgar-DotNet/docs/introduction/"}),"documentation")," with multiple examples"),Object(o.b)("li",{parentName:"ul"},"Implicit support for keys and locks - just define the connectivity graph hovewer you like")),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The library is currently being refactored - see the caution above."),Object(o.b)("li",{parentName:"ul"},"Some level graphs may be too hard for the generator - see the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/Edgar-DotNet/docs/basics/performance-tips"}),"guidelines")),Object(o.b)("li",{parentName:"ul"},"The graph-based approach is not suitable for large levels - we recommend less than 30 rooms")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(i.a,{cols:2,mdxType:"Gallery"},Object(o.b)(i.b,{src:r(123).default,mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:r(124).default,mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:r(121).default,mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:r(122).default,mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:r(125).default,mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:r(126).default,mdxType:"GalleryImage"})))}p.isMDXComponent=!0}}]);