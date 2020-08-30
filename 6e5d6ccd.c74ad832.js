(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){const e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(105),o=n(107);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=!n.startsWith(t)?t+n.replace(/^\//,""):n;return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},107:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=n(106);const i=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`}},e.children),c=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,t=>o.a.cloneElement(t,{cols:e.cols||4}))),s=e=>e.withoutLinks?o.a.createElement(i,{cols:e.cols},o.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})):o.a.createElement("a",{href:Object(a.a)(e.src),target:"_blank"},o.a.createElement(i,{cols:e.cols},o.a.createElement("img",{src:Object(a.a)(e.src),alt:"result"})))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(104)),i=n(106),c=n(108),s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},l={unversionedId:"introduction",id:"version-1.0.6/introduction",isDocsHomePage:!1,title:"Introduction",description:"This project is a library for procedural generation of 2D layouts based on a graph of rooms connections.",source:"@site/versioned_docs\\version-1.0.6\\introduction.md",permalink:"/Edgar-DotNet/docs/1.0.6/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-1.0.6/introduction.md",version:"1.0.6",sidebar_label:"Introduction",sidebar:"version-1.0.6/someSidebar",next:{title:"Installation",permalink:"/Edgar-DotNet/docs/1.0.6/installation"}},u=[{value:"Features",id:"features",children:[]},{value:"Inspiration",id:"inspiration",children:[]},{value:"Examples",id:"examples",children:[{value:"Input",id:"input",children:[]},{value:"Results",id:"results",children:[]}]}],p={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project is a library for procedural generation of 2D layouts based on a graph of rooms connections."),Object(a.b)("p",null,"To produce a game level, the algorithm takes a set of polygonal building blocks and a level connectivity graph (the level topology) as an input. Nodes in the graph represent rooms, and edges define connectivities between them. The graph has to be planar. The goal of the algorithm is to assign a room shape and a position to each node in the graph in a way that no two room shapes intersect and every pair of neighbouring room shapes can be connected by doors."),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/Edgar-DotNet/docs/1.0.6/guides"}),"Guides")," section to learn how to use the application and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/Edgar-DotNet/docs/1.0.6/chainBasedGenerator"}),"Chain based generator")," section if you want to find out how it all works or plan to extend the generator."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Any planar connected graph can be used as an input"),Object(a.b)("li",{parentName:"ul"},"Any orthogonal polygon can be used as a room shape"),Object(a.b)("li",{parentName:"ul"},"Complete control over shapes of individual rooms"),Object(a.b)("li",{parentName:"ul"},"Complete control over door positions of individual room shapes"),Object(a.b)("li",{parentName:"ul"},"Rooms either directly connected by doors or connected by corridors"),Object(a.b)("li",{parentName:"ul"},"Export to JSON, SVG, JPG"),Object(a.b)("li",{parentName:"ul"},"Majority of features available through a GUI and YAML config files"),Object(a.b)("li",{parentName:"ul"},"Implicit support for keys and locks - just define the connectivity graph hovewer you like")),Object(a.b)("h2",{id:"inspiration"},"Inspiration"),Object(a.b)("p",null,"The main idea of the algorithm used in this library comes from a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://chongyangma.com/publications/gl/index.html"}),"paper")," written by ",Object(a.b)("strong",{parentName:"p"},"Chongyang Ma")," and colleagues so be sure to check their work out."),Object(a.b)("p",null,"Some things in this library are done differently and/or improved:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Integer coordinates")," are used instead of reals - room shapes are therefore only orthogonal polygons."),Object(a.b)("li",{parentName:"ul"},"With integer coordinates, ",Object(a.b)("strong",{parentName:"li"},"optimized polygon operations")," (intersections, etc..) were implemented with a complete control over the process."),Object(a.b)("li",{parentName:"ul"},"User has a complete control over door positions of rooms."),Object(a.b)("li",{parentName:"ul"},"The algorithm was optimized to generate a layout as fast as possible."),Object(a.b)("li",{parentName:"ul"},"A specialized version of the generator was implemented to support ",Object(a.b)("strong",{parentName:"li"},"adding (usally) short corridors")," between rooms to the layout without sacrificing most of the convergence speed. (Average number of iterations usually stays the same but iterations themselves are slower.)")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"input"},"Input"),Object(a.b)("img",{alt:"Docusaurus with Keytar",src:Object(i.a)("img/introduction/introduction.svg")}),";",Object(a.b)("h3",{id:"results"},"Results"),Object(a.b)(c.a,{cols:2,mdxType:"Gallery"},Object(a.b)(c.b,{src:"img/introduction/0.jpg",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/introduction/1.jpg",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/introduction/2.jpg",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/introduction/3.jpg",mdxType:"GalleryImage"})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Click on images to see them in full size."))}d.isMDXComponent=!0}}]);