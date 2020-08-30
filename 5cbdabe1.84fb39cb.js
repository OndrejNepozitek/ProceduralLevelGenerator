(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,g=l["".concat(r,".").concat(f)]||l[f]||b[f]||i;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),i=(n(0),n(104)),r={id:"configurationSpaces",title:"Configuration spaces",sidebar_label:"Configuration spaces"},c={unversionedId:"configurationSpaces",id:"version-1.0.6/configurationSpaces",isDocsHomePage:!1,title:"Configuration spaces",description:"Following paragraphs describe configuration spaces in the context of this library. See the Motivation section for a more general description.",source:"@site/versioned_docs\\version-1.0.6\\configurationSpaces.md",permalink:"/Edgar-DotNet/docs/1.0.6/configurationSpaces",editUrl:"https://github.com/OndrejNepozitek/Edgar-DotNet/tree/docusaurus/versioned_docs/version-1.0.6/configurationSpaces.md",version:"1.0.6",sidebar_label:"Configuration spaces"},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Computing configuration spaces",id:"computing-configuration-spaces",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Implementing custom configuration spaces",id:"implementing-custom-configuration-spaces",children:[{value:"Hooking into <code>ChainBasedGenerator</code>",id:"hooking-into-chainbasedgenerator",children:[]}]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Following paragraphs describe configuration spaces in the context of this library. See the Motivation section for a more general description.")),Object(i.b)("p",null,"Configuration spaces let us quickly check whether two configurations are valid with respect to each other. In general, they have 3 main purposes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To check whether two configurations are valid with respect to each other"),Object(i.b)("li",{parentName:"ul"},"To suggest a new shape when perturbing a node"),Object(i.b)("li",{parentName:"ul"},"To suggest a new position when perturbing a node")),Object(i.b)("p",null,"The usual implementation checks if two neighbouring nodes are connected by doors, gives us a random shape from a predefined set of shapes and gets, for a given node, a position that is the best choice for optimizing door connectivity with neighbouring nodes."),Object(i.b)("p",null,"The speed of configuration spaces is crucial to the overall convergence speed. That means that majority of information ",Object(i.b)("strong",{parentName:"p"},"should be precomputed")," and the absolute minimum should be computed on the fly."),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"In motion planning for robotics, a ",Object(i.b)("em",{parentName:"p"},"configuration space")," of a robot is a set of all configurations it can attain (while avoiding obstacles). "),Object(i.b)("p",null,"In our context, for each pair of polygons (one fixed and one able to move) a configuration space is a set of such positions of the moving polygon that the two polygons do not overlap and can be connected by doors. When working with polygons, each configuration space can be represented by a (possibly empty) set of lines."),Object(i.b)("p",null,"With configuration spaces of all the pairs of room shapes, we can easily check if two configurations satisfy constraints defined above. We just take the shape of the first configuration as the fixed one and then look if the position of the other configuration is contained in the configuration space of the pair."),Object(i.b)("p",null,"When perturbing a position of a node, we can get configuration spaces for configurations of all its neighbours and then find a point that intersects most of them. By doing so, we always pick kind of good position which really helps the generator to converge faster."),Object(i.b)("h2",{id:"computing-configuration-spaces"},"Computing configuration spaces"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"This section is about the logic of working with already precomputed configuration spaces. For a description of how to compute configuration spaces, see the section above.")),Object(i.b)("p",null,"The implementation is pretty straightforward. ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractConfigurationSpaces")," class takes care of computing intersections of configuration spaces - either to check if two configurations are valid or to get a maximum intersection of a set of configuration spaces."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConfigurationSpaces")," class inherits from the abstract class and implements all the getters needed for ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractConfigurationSpaces")," to work. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConfigurationSpaces")," also supports adding weights to shapes. That means that some shapes have a bigger chance to be selected when asking for a random shape. This can be useful if we want a specific distribution of shapes (e.g. more squares than rectangles)."),Object(i.b)("h2",{id:"implementing-custom-configuration-spaces"},"Implementing custom configuration spaces"),Object(i.b)("p",null,"All configurations spaces implementations must implement ",Object(i.b)("inlineCode",{parentName:"p"},"IConfigurationSpaces")," interface. The source code with a detailed documentation can be found ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/MapGeneration/blob/master/MapGeneration.Interfaces/Core/ConfigurationSpaces/IConfigurationSpaces.cs"}),"on github"),". "),Object(i.b)("p",null,"The easiest way to add a custom behaviour is to implement your own generator that will construct an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigurationSpaces")," class. If thas is not enough, you can make your own class that inherits from ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractConfigurationSpaces")," or even implement the ",Object(i.b)("inlineCode",{parentName:"p"},"IConfigurationSpaces")," interface all by yourself."),Object(i.b)("h3",{id:"hooking-into-chainbasedgenerator"},"Hooking into ",Object(i.b)("inlineCode",{parentName:"h3"},"ChainBasedGenerator")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ChainBasedGenerator")," provides a method with the following signature to inject your own ",Object(i.b)("inlineCode",{parentName:"p"},"IConfigurationSpaces")," implementation. The creator is then called everytime the generation is started. "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-C#"}),"void SetConfigurationSpacesCreator(Func<TMapDescription, IConfigurationSpaces> creator);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example usage"),": (generic and constructor parameters were omitted for simplicity)"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-C#"}),"var chainBasedGenerator = new ChainBasedGenerator();\nvar configurationSpacesGenerator = new ConfigurationSpacesGenerator();\n\nchainBasedGenerator.SetConfigurationSpacesCreator((mapDescription) => {\n    return configurationSpacesGenerator.Generate(mapDescription)\n});\n")))}u.isMDXComponent=!0}}]);