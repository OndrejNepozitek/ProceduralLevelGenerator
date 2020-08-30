(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(104)),i={id:"generatorPlanners",title:"Generator planners",sidebar_label:"Generator planners"},l={unversionedId:"generatorPlanners",id:"version-1.0.6/generatorPlanners",isDocsHomePage:!1,title:"Generator planners",description:"Complete layouts are created by adding chains one by one to valid partial layouts. One valid partial layout is often used as a base for generating multiple partial layouts with one more chain added. This process creates a tree-like structure with nodes being valid partial layouts and children nodes being partial layouts generated from the parent layout (by adding the next chain).",source:"@site/versioned_docs\\version-1.0.6\\generatorPlanners.md",permalink:"/Edgar-DotNet/docs/1.0.6/generatorPlanners",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-1.0.6/generatorPlanners.md",version:"1.0.6",sidebar_label:"Generator planners"},s=[{value:"Basic generator planner",id:"basic-generator-planner",children:[]},{value:"Possible improvements",id:"possible-improvements",children:[]},{value:"Implementing a custom generator planner",id:"implementing-a-custom-generator-planner",children:[{value:"Hooking into <code>ChainBasedGenerator</code>",id:"hooking-into-chainbasedgenerator",children:[]}]}],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Complete layouts are created by adding chains one by one to valid partial layouts. One valid partial layout is often used as a base for generating multiple partial layouts with one more chain added. This process creates a tree-like structure with nodes being valid partial layouts and children nodes being partial layouts generated from the parent layout (by adding the next chain)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Generator planners")," make it possible to control how is the tree built."),Object(o.b)("h2",{id:"basic-generator-planner"},"Basic generator planner"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"BasicGeneratorPlanner")," class is (as its name suggests) a basic implementation of a generator planner. It always picks a node on the deepest level of the tree (the one with the maximum number of chains) and tries to use it to generate layouts."),Object(o.b)("p",null,"Some nodes in the tree get marked as ",Object(o.b)("em",{parentName:"p"},"finished"),". This is because either a given layout evolver fails to generate more layouts or because the generator planner decides that the node is no longer good enough to be further explored. Such nodes are then not considered when deciding which node to expand."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BasicGeneratorPlanner")," tries to generate 5 layouts from each node before making the node ",Object(o.b)("em",{parentName:"p"},"finished"),"."),Object(o.b)("h2",{id:"possible-improvements"},"Possible improvements"),Object(o.b)("p",null,"Currently, the number of layouts generated from each node is fixed. It would be interesting to implement a generator planner that somehow adapts its parameters as it tries to generate layouts."),Object(o.b)("p",null,"And what about making one with a multi-threading support?"),Object(o.b)("h2",{id:"implementing-a-custom-generator-planner"},"Implementing a custom generator planner"),Object(o.b)("p",null,"All generator planners must implement ",Object(o.b)("inlineCode",{parentName:"p"},"IGeneratorPlanner<TLayout>")," interface. The source code with a detailed documentation can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/MapGeneration/blob/master/MapGeneration.Interfaces/Core/GeneratorPlanners/IGeneratorPlanner.cs"}),"on github"),". "),Object(o.b)("p",null,"There is also a ",Object(o.b)("inlineCode",{parentName:"p"},"GeneratorPlannerBase<TLayout>")," class with an abstract method that takes the current tree as an input and returns a node that should be further explored. You can look how it is being used by ",Object(o.b)("inlineCode",{parentName:"p"},"BasicGeneratorPlanner<TLayout>")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/MapGeneration/blob/master/MapGeneration/Core/GeneratorPlanners/BasicGeneratorPlanner.cs"}),"here"),"."),Object(o.b)("h3",{id:"hooking-into-chainbasedgenerator"},"Hooking into ",Object(o.b)("inlineCode",{parentName:"h3"},"ChainBasedGenerator")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ChainBasedGenerator")," provides a method with the following signature to inject your own ",Object(o.b)("inlineCode",{parentName:"p"},"IGeneratorPlanner<TLayout>")," implementation. The creator is then called everytime the generation is started. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),"void SetGeneratorPlannerCreator(Func<TMapDescription, IGeneratorPlanner> creator)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example usage"),": (generic parameters were omitted for simplicity)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-C#"}),"chainBasedGenerator.SetGeneratorPlannerCreator((mapDescription) => {\n    return new BasicGeneratorPlanner();\n});\n")))}p.isMDXComponent=!0}}]);