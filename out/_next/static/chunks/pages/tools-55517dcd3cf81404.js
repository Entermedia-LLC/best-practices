(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{3519:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools",function(){return n(9274)}])},9274:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var s=n(5893),o=n(7294),t=n(9008),i=n(323),a=n(2430),l=n(4725),c=n.n(l);n(1804),n(2963);function h(){return(0,o.useEffect)((function(){c().highlightAll()}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.default,{children:(0,s.jsx)("title",{children:"Tools | Entermedia Best Practices"})}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(a.Z,{level:1,id:"tools",children:"Tools"}),(0,s.jsx)("p",{children:"The following are tools we use at Entermedia. This list will grow and change over time and is not meant to be comprehensive. Generally, we encourage or require these tools to be used in favor of other ones. Rules governing tools to be used and packaged with a client site will be much stricter than those used on internal projects."}),(0,s.jsx)(a.Z,{level:2,id:"local-development",showAnchor:!0,children:"Local Development Environments"}),(0,s.jsx)(a.Z,{level:2,id:"scaffolding",showAnchor:!0,children:"Scaffolding"}),(0,s.jsx)(a.Z,{level:2,id:"task-runners",showAnchor:!0,children:"Task Runners"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://webpack.github.io/",target:"_blank",rel:"noreferrer noopener",children:"Webpack"})," ","- Webpack is a bundler for JS/CSS. It\u2019s extremely useful when building larger JavaScript applications (i.e. React.js)."]}),(0,s.jsx)(a.Z,{level:2,id:"aria-package-managers",showAnchor:!0,children:"Package/Dependency Managers"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://getcomposer.org",target:"_blank",rel:"noreferrer noopener",children:"Composer"})," ","- We use Composer for managing PHP dependencies. Usually everything we need is bundled with frameworks like WordPress, but sometimes we need external PHP libraries like \u201cPatchwork\u201d. Composer is a great way to manage those external libraries."]}),(0,s.jsxs)("p",{children:["When a WordPress install is managed and maintained by an engineering team, and when the infrastructure supports it, plugins in a WordPress project can be easily managed using Composer."," ",(0,s.jsx)("a",{href:"https://wpackagist.org/",target:"_blank",rel:"noreferrer noopener",children:"WordPress Packagist"})," ","provides a Composer repository that mirrors all public WordPress plugins and themes."]}),(0,s.jsx)(a.Z,{level:2,id:"aria-version-control",showAnchor:!0,children:"Version Control"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://git-scm.com",target:"_blank",rel:"noreferrer noopener",children:"Git"})," ","- At Entermedia we use Git for version control. We encourage people to use the command line for interacting with Git. GUIs are permitted but will not be supported internally."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://subversion.apache.org/",target:"_blank",rel:"noreferrer noopener",children:"SVN"})," ","- We use SVN, but only in the context of WordPress.com. Again, we encourage people to use the command line as we do not support GUIs internally."]}),(0,s.jsx)(a.Z,{level:2,id:"aria-command-line",showAnchor:!0,children:"Command Line Tools"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{href:"https://wp-cli.org",target:"_blank",rel:"noreferrer noopener",children:"WP-CLI"})," ","- A command line interface for WordPress. This is an extremely powerful tool that allows us to do imports, exports, run custom scripts, and more via the command line. Often this is the only way we can affect a large database."]}),(0,s.jsx)(a.Z,{level:2,id:"aria-accessibility-testing",showAnchor:!0,children:"Accessibility Testing"}),(0,s.jsxs)("p",{children:["We use a variety of tools to test our sites for accessibility issues. WebAim has some great resources on"," ",(0,s.jsx)("a",{href:"http://webaim.org/articles/screenreader_testing/",target:"_blank",rel:"noreferrer noopener",children:"how to evaluate sites"})," ","with a screen reader."]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"http://webaim.org/articles/voiceover/",target:"_blank",rel:"noreferrer noopener",children:"Using VoiceOver"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"http://webaim.org/articles/nvda/",target:"_blank",rel:"noreferrer noopener",children:"Using NVDA"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"http://webaim.org/articles/jaws/",target:"_blank",rel:"noreferrer noopener",children:"Using JAWS"})})]}),(0,s.jsx)("p",{children:"We\u2019re also a fan of a few browser tools that lend us a hand when it comes to testing areas like color contrast, heading hierarchy, and ARIA application."}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=es",target:"_blank",rel:"noreferrer noopener",children:"Headings Map for Chrome"})," ","or"," ",(0,s.jsx)("a",{href:"https://addons.mozilla.org/en-us/firefox/addon/headingsmap/",target:"_blank",rel:"noreferrer noopener",children:"Headings Map for Firefox"})," ","- A browser extension that allows you to see the heading structure of a webpage."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"http://whatsock.com/training/matrices/visual-aria.htm",target:"_blank",rel:"noreferrer noopener",children:"The Visual ARIA Bookmarklet"})," ","- A bookmarklet that can be run on a webpage and color codes ARIA roles."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"http://wave.webaim.org/",target:"_blank",rel:"noreferrer noopener",children:"WAVE"})," ","- A toolkit from WebAIM, that also has an extension for Chrome/Firefox. It evaluates a webpage and returns accessibility errors."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb",target:"_blank",rel:"noreferrer noopener",children:"Accessibility Developer Tools"})," ","- A Chrome extension that adds an \u201cAudit\u201d tab in Chrome\u2019s developer tools that can scan a webpage for accessibility issues."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://khan.github.io/tota11y/",target:"_blank",rel:"noreferrer noopener",children:"Tota11y"})," ","- A visualization toolkit that can be used as a bookmarklet, and reveals accessibility errors on a webpage."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://leaverou.github.io/contrast-ratio/",target:"_blank",rel:"noreferrer noopener",children:"Contrast Ratio"})," ","- A color contrast tool to compare two colors against"," ",(0,s.jsx)("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html",target:"_blank",rel:"noreferrer noopener",children:"levels of conformance"})," ","and see if they pass."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"http://contrast-finder.tanaguru.com/?lang=en",target:"_blank",rel:"noreferrer noopener",children:"Tanagaru Contrast Finder"})," ","- Another color contrast tool that tests colors against the levels of conformance, but also provides you with alternatives should your provided colors fail."]})]}),(0,s.jsx)(a.Z,{level:2,id:"aria-visual-testing",showAnchor:!0,children:"Visual Regression Testing"}),(0,s.jsx)("p",{children:"We use visual regression testing to ensure code changes don\u2019t have unforeseen repercussions. This provides a helpful visual aid to check against CSS changes, plugin updates, and third-party script updates."}),(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://github.com/garris/BackstopJS",target:"_blank",rel:"noreferrer noopener",children:"BackstopJS"})," ","- A tool used to run visual regression tests that compares known reference states against updates."]})}),(0,s.jsx)(a.Z,{level:2,id:"aria-commitlint",showAnchor:!0,children:"commitlint"}),(0,s.jsxs)("p",{children:["Entermedia uses"," ",(0,s.jsx)("a",{href:"https://commitlint.js.org/",target:"_blank",rel:"noreferrer noopener",children:"commitlint"})," ","to organize and standarize commit messages which helps with:"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Automatically generating CHANGELOGs"}),(0,s.jsx)("li",{children:"Automatically determining a semantic version bump (based on the types of commits landed)."}),(0,s.jsx)("li",{children:"Communicating the nature of changes to teammates, the public, and other stakeholders"}),(0,s.jsx)("li",{children:"Triggering build and publish processes"}),(0,s.jsx)("li",{children:"Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history."})]}),(0,s.jsx)("p",{children:"Commit messages should follow this format:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:'type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "" and ",")'})}),(0,s.jsx)("p",{children:"Real world examples can look like this:"}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:'"chore: run tests on travis ci"'})}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:'"fix(server): send cors headers"'})}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:'"feat(blog): add comment section"'})}),(0,s.jsxs)("p",{children:["Common types according to"," ",(0,s.jsx)("a",{href:"https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum",target:"_blank",rel:"noopener noreferrer",children:"commitlint-config-conventional (based on the Angular convention)"})," ","can be:"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"build"}),(0,s.jsx)("li",{children:"chore"}),(0,s.jsx)("li",{children:"ci"}),(0,s.jsx)("li",{children:"docs"}),(0,s.jsx)("li",{children:"feat"}),(0,s.jsx)("li",{children:"fix"}),(0,s.jsx)("li",{children:"perf"}),(0,s.jsx)("li",{children:"refactor"}),(0,s.jsx)("li",{children:"revert"}),(0,s.jsx)("li",{children:"style"}),(0,s.jsx)("li",{children:"test"})]}),(0,s.jsx)(a.Z,{level:3,id:"aria-commitlint-install",children:"Installing commitlint"}),(0,s.jsxs)("p",{children:["Install ",(0,s.jsx)("code",{children:"commitlint"})," and"," ",(0,s.jsx)("code",{children:"commitlint-config-conventional"}),", then configure commitlint to use it."]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:"# Install\nnpm install --save-dev commitlint @commitlint/config-conventional\n\n# Configure commitlint to use conventional config\necho \"module.exports = { extends: ['@commitlint/config-conventional'] };\" > commitlint.config.js"})}),(0,s.jsx)(a.Z,{level:4,children:"Install husky"}),(0,s.jsxs)("p",{children:["Install ",(0,s.jsx)("code",{children:"husky"})," as devDependency, a handy git hook helper available on npm."]}),(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"language-sh",children:"# Install Husky\nnpm install husky --save-dev\n\n# Active hooks\nnpx husky install\n\n# Add hook\nnpx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'"})})]})]})}}},function(e){e.O(0,[247,521,864,774,888,179],(function(){return r=3519,e(e.s=r);var r}));var r=e.O();_N_E=r}]);