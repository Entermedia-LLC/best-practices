(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{1013:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/js",function(){return t(5101)}])},2819:function(e,n,t){"use strict";var s=t(5893),o=t(5675),i=t(1220),a=t.n(i),r=function(e){var n=e.src;return"https://entermedia-llc.github.io/best-practices/".concat(n)};n.Z=function(e){var n=e.section,t=e.id,i=e.showLink,l=e.children,c="h".concat(n),d=t?"#".concat(t):"";return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c,{className:a().headline,id:d,children:[l,i&&d&&(0,s.jsxs)("a",{href:d,className:a().headline_link,children:[(0,s.jsx)("span",{className:a().headline_link_text,children:d}),(0,s.jsx)("span",{className:a().headline_link_icon,children:(0,s.jsx)(o.default,{src:"/images/icon-link.svg",width:14,height:14,alt:"Link to ".concat(d),loader:r})})]})]})})}},5101:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(5893),o=t(7294),i=t(9008),a=(t(1664),t(2819)),r=t(4725),l=t.n(r),c=(t(1804),t(2597)),d=t.n(c);function h(){return(0,o.useEffect)((function(){l().highlightAll()}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:"Javascript Best Practices"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)(a.Z,{section:"1",id:"javascript",children:"JavaScript"}),(0,s.jsx)(a.Z,{section:"2",id:"code-style",showLink:!0,children:"Code Style, Tooling & Documentation"}),(0,s.jsxs)("p",{children:["Entermedia maintains a"," ",(0,s.jsx)("a",{href:"https://github.com/10up/eslint-config",target:"_blank",rel:"noreferrer",children:"eslint shareable config"})," ","that is used across all 10up projects. It exposes several different configs and engineers should opt-in to the config that best fits the project. We also maintain a"," ",(0,s.jsx)("a",{href:"https://github.com/10up/babel-preset-default/",target:"_blank",rel:"noreferrer",children:"babel-preset"})," ","that works well for most of our projects."]}),(0,s.jsxs)("p",{children:["As far as JavaScript documentation goes, we conform to the"," ",(0,s.jsx)("a",{href:"https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/",target:"_blank",rel:"noreferrer",children:"WordPress JavaScript documentation standards"})," ","and those standards are enforced by Entermedia's eslint config."]}),(0,s.jsx)(a.Z,{section:"2",showLink:!0,children:"Design Patterns"}),(0,s.jsx)("p",{children:"Standardizing the way we structure our JavaScript allows us to collaborate more effectively with one another. Using intelligent design patterns improves maintainability, code readability, and even helps to prevent bugs."}),(0,s.jsx)(a.Z,{section:"3",children:"Writing Modern JavaScript"}),(0,s.jsx)("p",{children:"It\u2019s important we use language features that are intended to be used. This means not using deprecated functions, methods, or properties. Whether we are using plain JavaScript or a library, we should not use deprecated features. Using deprecated features can have negative effects on performance, security, maintainability, and compatibility."}),(0,s.jsxs)("p",{children:["On all new projects you should be using up to date JavaScript methodologies combined with a build process tool like Babel to ensure browser compatibility. This allows us to utilize modern techniques while being certain our code will not break in older systems. The"," ",(0,s.jsx)("a",{href:"https://github.com/10up/wp-scaffold",target:"_blank",rel:"noreferrer",children:"Entermedia WP Scaffold"})," ","have this functionality built in."]}),(0,s.jsx)("p",{children:"Some older projects that have not yet been upgraded may not have the capability to use the most modern techniques, but it is still important to have processes in place that allow us to grow the technology stack as a project matures. In these cases, you should still follow best practice recommendations even if the newest patterns are not yet available to you."}),(0,s.jsx)(a.Z,{section:"4",children:"Using Classes"}),(0,s.jsx)("p",{children:"Before ES6, classes in JavaScript were created by building a constructor function and adding properties by extending the prototype object. This created a fairly complex way to extend classes and deal with prototypal inheritance. Modern techniques allow us to create and extend classes directly and write cleaner code:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"class BasicExample {\n\tconstructor(el) {\n\t\tsuper(); // if you're extending\n\t}\n\n\tinit() {\n\t\tconsole.log('Hello world.');\n\t}\n}"})}),(0,s.jsx)("p",{children:"Classes in modern JavaScript offer a nicer syntax to access the standard prototypal inheritance we\u2019ve already had for a while, but can also help guide the structure of componentized code. When deciding whether or not to use a Class, think of the code you\u2019re writing in the greater context of the application."}),(0,s.jsx)("p",{children:"Classes will not always be the answer for creating modular code in your application, but you should consider them when you need to create discrete components or when those components need to inherit behaviors from other components, while still functioning as a single unit. For example, a utility function that searches a string for text may not be a good utilization of Classes, but an accordion menu with children components would."}),(0,s.jsx)(a.Z,{section:"4",children:"Using Arrow Functions"}),(0,s.jsx)("p",{children:"Arrow functions are a great way to slim down easily executable code blocks. When using this style of function be sure not to over engineer a simple action just to make it smaller. For example, this is a good use of a simple multiline function being compressed into a single line:"}),(0,s.jsx)("p",{children:"Multi-line:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const init = (msg) => {\n\tconsole.log(msg);\n};"})}),(0,s.jsx)("p",{children:"Single line:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const init = (msg) => console.log(msg);"})}),(0,s.jsx)("p",{children:"This is a very simple function, so compressing it down into a single line won\u2019t cause any readability issues. However, the more complicated this function gets, the less likely it should be on a single line."}),(0,s.jsx)("p",{children:"Even though single argument arrow functions don\u2019t require parenthesis around the argument itself, it is best to include the parenthesis for improved readability and scalability of the function."}),(0,s.jsxs)("p",{children:["Something important to remember is that arrow functions are not always the answer. Their release addressed a very specific problem many engineers were facing with preserving the context of ",(0,s.jsx)("code",{children:"this"}),". In a traditional function ",(0,s.jsx)("code",{children:"this"})," is bound to different values depending on the context it is called. With arrow functions, it is bound to the code that contains the arrow function. Because arrow functions also have syntax benefits, as a general rule, use arrow functions unless you need a more traditional treatment of"," ",(0,s.jsx)("code",{children:"this"})," (like in an event listener)."]}),(0,s.jsx)(a.Z,{section:"4",children:"Concatenating Strings and Templating"}),(0,s.jsxs)("p",{children:["When dealing with strings in JavaScript, it is very common to need some form of concatenation along the way. Before ES6 we were concatenating string with the ",(0,s.jsx)("code",{children:"+"})," operator:"]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"/* eslint-disable */\nvar first = 'hello';\nvar last = 'world';\nvar msg = 'I said, \"' + first + ' ' + last + '\" to the crowd.';"})}),(0,s.jsx)("p",{children:"Modern techniques give us something called, \u201ctemplate literals\u201d, which let us concatenate strings in a much more straightforward manner utilizing the back tick and some basic templating:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const first = 'hello';\nconst last = 'world';\nconst msg = `I said, \"${first} ${last},\" to the crowd.`;"})}),(0,s.jsx)(a.Z,{section:"4",children:"Destructuring Arrays and Objects"}),(0,s.jsx)("p",{children:"Destructuring is a JavaScript technique that allows you to easily assign values and properties from arrays and objects into specific variables. This direct mapping affords an easy way to access data from objects and arrays in a more convenient syntax."}),(0,s.jsx)("p",{className:d()["error-text"],children:"The old way:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\nconst a = arr[0];\nconst b = arr[1];\nconst c = arr[2];\nconst d = arr[3];"})}),(0,s.jsx)("p",{className:d()["success-text"],children:"The new way:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const [a, b, c, d] = [1, 2, 3, 4];\nconsole.log(a); // 1\nconsole.log(b); // 2\nconsole.log(c); // 3\nconsole.log(d); // 4"})}),(0,s.jsx)("p",{children:"Use destructuring whenever possible to slim down your code and improve overall readability."}),(0,s.jsx)(a.Z,{section:"4",children:"Componentizing Your Code"}),(0,s.jsxs)("p",{children:["Keeping different bits of functionality in your code reasonably separated is important to building and maintaining a scalable system over time. In the past we\u2019ve had to accomplish this with our build systems leaning on concatenation as an abstraction layer to the project. Modern JavaScript techniques allow us to utilize"," ",(0,s.jsx)("code",{children:"import"})," statements to break apart and reassemble your code into consumable chunks."]}),(0,s.jsxs)("p",{children:["When you\u2019re building your project, be sure to lean on imports to wire your application together. As of right now, we do still need a build system to process the code so it can be consumed by a browser, but using this modern technique will make sure our code is well structured as the project ages. You can also use ",(0,s.jsx)("code",{children:"import"})," statements to load parts of an external library you may need for any given component. The code below will give you an example:"]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"// Only loading in the map method from lodash, because that's all we need!\nimport map from 'lodash/map';"})}),(0,s.jsx)("p",{children:"This also allows you to build one component and import it into another."}),(0,s.jsx)("p",{children:"It\u2019s also worth noting that named exports can be imported by wrapping the exported function within curly braces:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"import { example } from 'example/lib';"})}),(0,s.jsx)("p",{children:"This is only possible if the exported component is a named export like so:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"export const example = 66;"})}),(0,s.jsx)(a.Z,{section:"3",children:"Modules"}),(0,s.jsx)("p",{children:"When creating your own modules be sure to think about how it should be used by others. Luckily ES6 modules makes this a simple task."}),(0,s.jsx)("p",{children:"There are many ways you can export a module, but typically exposing specific functions and/or data structures through an ES6 module is the preferred way."}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"// datastructure.js\n// private variable to the module\nconst data = {};\n\n// private function to the module\nconst process = (value) => {\n\t// complex logic\n\treturn value;\n};\n\n// the two functions below are public\nexport const getData = (field) => {\n\treturn process(data[field]);\n};\n\nexport const addData = (field, value) => {\n\tdata[field] = value;\n};"})}),(0,s.jsx)("p",{children:"In the module above only two functions are being exposed, everything else is private to the module, therefore this module can be used as following."}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"import { addData, getData } from './datastructure';\n\naddData('key', 'myvalue');\n\nconst value = getData('key');"})}),(0,s.jsx)("p",{children:"Avoid using classes unless there\u2019s a good reason to. Consider the following example:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"import Module from './mymodule';\n/* Module is a ES6 class */\nnew Module('.element-selector', {\n\t/* options */\n\tonEvent1: () => {},\n\tonEvent2: () => {},\n});"})}),(0,s.jsxs)("p",{children:["A good indicator that you don\u2019t need classes is when you don\u2019t need the instance of that class. For this reason our eslint config has the"," ",(0,s.jsx)("a",{href:"https://eslint.org/docs/rules/no-new",target:"_blank",rel:"noreferrer",children:"no-new"})," ","rule enabled. The code sample below provides a better alternative."]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"// Option 1: still using classes but with a better design\nimport Module from './mymodule';\n\nconst module1 = new Module('.element-selector', {\n\t/* options */\n});\nmodule1.addEventListener('onEvent1', () => {});\nmodule1.addEventListener('onEvent2', () => {});\nmodule1.doSomething();\nmodule1.hide();"})}),(0,s.jsx)("p",{children:"The example above changes the design of the module API a bit and assumes multiple and separate instance of the module are desired. However, sometimes that might not even be necessary. If all you need is to abstract some complex logic and accept a couple of parameter, exposing a factory/init function is all you need."}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"// Option 2: not using classes\nimport module from './mymodule';\n\nmodule('.element-selector', {\n\t/* options */\n});"})}),(0,s.jsx)(a.Z,{section:"3",children:"Don\u2019t Pollute the Window Object"}),(0,s.jsxs)("p",{children:["Adding methods or properties to the ",(0,s.jsx)("code",{children:"window"})," object or the global namespace should be done carefully. ",(0,s.jsx)("code",{children:"window"})," object pollution can result in collisions with other scripts. If you need to expose data to the rest of your application, you should first consider using some sort of state management. Sometimes however, exposing methods or properties to the ",(0,s.jsx)("code",{children:"window global"})," is necessary and when doing so wrap your code in closures and expose methods and properties to window with caution."]}),(0,s.jsxs)("p",{children:["When a script is not wrapped in a closure, the current context or"," ",(0,s.jsx)("code",{children:"this"})," is actually ",(0,s.jsx)("code",{children:"window"}),":"]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"/console.log(this === window); // true\n\nfor (var i = 0; i < 9; i++) {\n\t// Do stuff\n}\n\nconst result = true;\n\nconsole.log(window.result === result); // true\nconsole.log(window.i === i); // true"})}),(0,s.jsx)("p",{children:"When we put our code inside a closure, our variables are private to that closure unless we expose them:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"(function () {\n\tfor (let i = 0; i < 9; i++) {\n\t\t// Do stuff\n\t}\n\n\twindow.result = true;\n})();\n\nconsole.log(typeof window.result !== 'undefined'); // true\nconsole.log(typeof window.i !== 'undefined'); // false"})}),(0,s.jsxs)("p",{children:["Notice how ",(0,s.jsx)("code",{children:"i"})," was not exposed to the window object."]}),(0,s.jsx)(a.Z,{section:"3",children:"Secure Your Code"}),(0,s.jsxs)("p",{children:["In JavaScript, we often have to insert new elements with dynamic attributes and content into the DOM. A common way to do this is to use the ",(0,s.jsx)("code",{children:"innerHTML"})," method like so:"]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-javascript",children:"const someElement = document.getElementById('someElement');\nconst someUrl = 'https://someurl.com/';\nconst someContent = 'Some content';\n\nsomeElement.innerHTML = `<div class=\"container\"><a href=\"${someUrl}\">${someContent}</a></div>`;"})}),(0,s.jsxs)("p",{children:["However, passing HTML strings to ",(0,s.jsx)("code",{children:"innerHTML"})," and methods like it can expose your code to"," ",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting",target:"_blank",rel:"noreferrer",children:"cross-site scripting"}),", also known as XSS\u2014the most common security vulnerability in JavaScript. Because these methods evaluate strings passed to them as HTML, they can execute potentially harmful code. For instance, if"," ",(0,s.jsx)("code",{children:"someContent"})," in the above example is"," ",(0,s.jsx)("code",{children:'<img src="fakeImage" onerror="alert( \'hacked!\' )" />'}),", the JavaScript in the ",(0,s.jsx)("code",{children:"onerror"})," attribute will be executed."]}),(0,s.jsx)("p",{children:"There are several measures you can take to circumvent this XSS vulnerability:"}),(0,s.jsxs)(a.Z,{section:"4",children:["Use ",(0,s.jsx)("code",{children:"textContent"})," instead of ",(0,s.jsx)("code",{children:"innerHTML"})]})]})]})}t(2447)},1220:function(e){e.exports={headline_link_icon:"Headline_headline_link_icon__4OS6G",headline_link_text:"Headline_headline_link_text__pt029",headline_link:"Headline_headline_link__EWxGu",headline:"Headline_headline__g2BIq"}},2597:function(e){e.exports={container:"layout_container__8mgcn","error-text":"layout_error-text__aVn46","success-text":"layout_success-text__P0J5P"}}},function(e){e.O(0,[770,774,888,179],(function(){return n=1013,e(e.s=n);var n}));var n=e.O();_N_E=n}]);