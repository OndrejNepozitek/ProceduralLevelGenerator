(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),i=(n(0),n(164)),a={title:"Installation",sidebar_label:"Installation"},c={id:"installation",title:"Installation",description:"### Prerequisites\r",source:"@site/docs\\installation.md",permalink:"/Edgar-DotNet/docs/next/installation",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/docs/installation.md",version:"next",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/Edgar-DotNet/docs/next/introduction"},next:{title:"Guides",permalink:"/Edgar-DotNet/docs/next/guides/introduction"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Using the precompiled binaries on Windows",id:"using-the-precompiled-binaries-on-windows",children:[]},{value:"Compiling the source code",id:"compiling-the-source-code",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},".NET 4.6.1 installed")),Object(i.b)("h3",{id:"using-the-precompiled-binaries-on-windows"},"Using the precompiled binaries on Windows"),Object(i.b)("p",null,"Donwload binaries from the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator/releases/latest"}),"latest release"),". Run ",Object(i.b)("em",{parentName:"p"},"GUI/GUI.exe")," to start the main GUI application. Or place the content of  ",Object(i.b)("em",{parentName:"p"},"ProceduralLevelGenerator")," directory next to the main exe file of your ",Object(i.b)("em",{parentName:"p"},".NET")," application and then include all dlls (except the BoostWrapper.dll which is an unmanaged C++ dll) to use the generator from your application."),Object(i.b)("h3",{id:"compiling-the-source-code"},"Compiling the source code"),Object(i.b)("p",null,"Open the ",Object(i.b)("em",{parentName:"p"},"MapGeneration.sln")," file in Visual Studio. Compile the ",Object(i.b)("em",{parentName:"p"},"GUI")," project to get GUI binaries or compile the ",Object(i.b)("em",{parentName:"p"},"MapGeneration")," project to get the layout generator as a ",Object(i.b)("em",{parentName:"p"},"DLL"),". The target platform must be set to ",Object(i.b)("em",{parentName:"p"},"x86"),"."))}s.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);