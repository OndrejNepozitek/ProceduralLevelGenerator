(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var o=r(2),n=r(6),a=(r(0),r(104)),i={title:"Guides",sidebar_label:"Introduction"},l={unversionedId:"grid2d/introduction",id:"grid2d/introduction",isDocsHomePage:!1,title:"Guides",description:"This section will walk you through the basics of the generator.",source:"@site/docs\\grid2d\\introduction.md",permalink:"/Edgar-DotNet/docs/next/grid2d/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/docs/grid2d/introduction.md",version:"next",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Installation",permalink:"/Edgar-DotNet/docs/next/installation"},next:{title:"Basics",permalink:"/Edgar-DotNet/docs/next/grid2d/basics"}},c=[{value:"Vocabulary",id:"vocabulary",children:[]}],s={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section will walk you through the basics of the generator."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./basics"}),"Basics")," - how to create a very simple level with rectangular room templates"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./corridors"}),"Corridors")," - how to add corridors to a level"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./minimum-room-distance"}),"Minimum room distance")," - how to control the minimum distance of rooms"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./complex-dungeon-setup"}),"Complex dungeon setup")," - how to setup a complex dungeon with different types of rooms"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./save-load"}),"Save and load")," - how to save and load level descriptions and generated layouts")),Object(a.b)("h2",{id:"vocabulary"},"Vocabulary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Room template")," describes one possible shape of a room. Each room template consists of:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"polygon")," which describes the outline of the room template."),Object(a.b)("li",{parentName:"ul"},"list of available ",Object(a.b)("strong",{parentName:"li"},"door positions")),Object(a.b)("li",{parentName:"ul"},"list of allowed ",Object(a.b)("strong",{parentName:"li"},"transformations"),", e.g. that the room template can be rotated by 180 degrees"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Room description")," describes the properties of a single room in a level, and it controls the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"which room templates are available for the room"),Object(a.b)("li",{parentName:"ul"},"whether the room is a corridor or not"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Level description")," is a graph-like data structure that controls the following:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"how many rooms are there in a level and what are their room descriptions"),Object(a.b)("li",{parentName:"ul"},"how are rooms connected"),Object(a.b)("li",{parentName:"ul"},"additonal properties like the minimum distance of rooms")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," In the older version of the library, it was also possible to use YAML config files to construct map descriptions. However, YAML support was dropped in favor of C# API as it is more flexible and it is currently not possible to support both.")))}b.isMDXComponent=!0},104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);