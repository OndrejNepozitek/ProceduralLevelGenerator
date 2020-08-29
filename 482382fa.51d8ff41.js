(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),c=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),o=t(6),a=(t(0),t(100)),i={title:"Dungeon generator"},s={unversionedId:"api/dungeon-generator",id:"api/dungeon-generator",isDocsHomePage:!1,title:"Dungeon generator",description:"The DungeonGenerator class encapsulates the whole high-level API of the generator. It takes an instance of MapDescription and DungeonGeneratorConfiguration and produces a level.",source:"@site/docs\\api\\dungeon-generator.md",permalink:"/Edgar-DotNet/docs/next/api/dungeon-generator",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/docs/api/dungeon-generator.md",version:"next",sidebar:"docs",previous:{title:"Real-life example",permalink:"/Edgar-DotNet/docs/next/grid2d/real-life"}},u=[{value:"Configuration",id:"configuration",children:[]}],l={rightToc:u};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGenerator")," class encapsulates the whole high-level API of the generator. It takes an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"MapDescription")," and ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorConfiguration")," and produces a level."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Individual properties of the configuration can be seen below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'/// <summary>\n/// Configuration of the dungeon generator.\n/// </summary>\n/// <typeparam name="TNode"></typeparam>\npublic class DungeonGeneratorConfiguration<TNode> : IChainDecompositionConfiguration<TNode>,\n    ISimulatedAnnealingConfiguration, ISmartCloneable<DungeonGeneratorConfiguration<TNode>>\n{\n    /// <summary>\n    /// Whether non-neighboring rooms may touch (share walls) or not.\n    /// The setting is applied only to non-neighboring rooms because all neighbors\n    /// share walls as they must be connected by doors.\n    /// It is recommended to allow touching rooms if the dungeon is without corridors.\n    /// </summary>\n    public bool RoomsCanTouch { get; set; } = true;\n\n    /// <summary>\n    /// The number of iterations after which the algorithm is stopped even if it\n    /// was not able to generate a layout.\n    /// Defaults to null - algorithm is not stopped early.\n    /// </summary>\n    public int? EarlyStopIfIterationsExceeded { get; set; }\n\n    /// <summary>\n    /// The time interval after which the algorithm is stopped even if it\n    /// was not able to generate a layout.\n    /// Defaults to null - algorithm is not stopped early.\n    /// </summary>\n    public TimeSpan? EarlyStopIfTimeExceeded { get; set; }\n\n    /// <summary>\n    /// Whether to override repeat mode of individual room templates.\n    /// If this property is set, the chosen repeat mode will be used for all room templates\n    /// no matter what their own repeat mode was.\n    /// </summary>\n    public RepeatMode? RepeatModeOverride { get; set; }\n\n    /// <summary>\n    /// Whether to throw an exception when the algorithm is not able to satisfy all the repeat\n    /// mode requirements. If set to false, the algorithm will try to lower the requirements,\n    /// e.g. instead of no rooms being repeated, it at least tries to not repeat neighbors.\n    /// </summary>\n    public bool ThrowIfRepeatModeNotSatisfied { get; set; }\n\n    /// <summary>\n    /// Chain decomposition configuration that will be used to compute the chains from the input graph.\n    /// </summary>\n    /// <remarks>\n    /// Should not be changed manually.\n    /// </remarks>\n    public ChainDecompositionConfiguration ChainDecompositionConfiguration { get; set; }\n\n    /// <summary>\n    /// Decomposition of the input graph into disjunct subgraphs (chains).\n    /// In most cases, this property should not be set and the algorithm will use the ChainDecompositionConfiguration\n    /// to compute the chains. \n    /// </summary>\n    /// <remarks>\n    /// Should not be changed manually.\n    /// </remarks>\n    public List<Chain<TNode>> Chains { get; set; }\n\n    /// <summary>\n    /// Simulated annealing configuration.\n    /// </summary>\n    /// <remarks>\n    /// Should not be changed manually.\n    /// </remarks>\n    public SimulatedAnnealingConfigurationProvider SimulatedAnnealingConfiguration { get; set; }\n\n    /// <summary>\n    /// Maximum branching factor of simulated annealing.\n    /// </summary>\n    /// <remarks>\n    /// Should not be changed manually.\n    /// </remarks>\n    public int SimulatedAnnealingMaxBranching { get; set; } = 5;\n\n    /* ... */\n\n}\n')))}c.isMDXComponent=!0}}]);