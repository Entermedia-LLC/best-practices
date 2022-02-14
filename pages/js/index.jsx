// React.js imports
import { useEffect } from "react";

// Utility imports
import imageLoader from "../../lib/image-loader";

// Next.js imports
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-javascript";

// CSS module imports
import classes from "../../styles/helpers/layout.module.scss";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Javascript | Entermedia Best Practices</title>
      </Head>

      <Template>
        <section>
          <Headline level={1} id="js">
            JavaScript
          </Headline>
          <Headline level={2} id="style" showAnchor>
            Code Style, Tooling &amp; Documentation
          </Headline>
          <p>
            Entermedia maintains a{" "}
            <a
              href="https://github.com/Entermedia-LLC/eslint-config"
              target="_blank"
              rel="noreferrer"
            >
              eslint shareable config
            </a>{" "}
            that is used across all Entermedia projects. It exposes several
            different configs and engineers should opt-in to the config that
            best fits the project.
          </p>
          <p>
            As far as JavaScript documentation goes, we conform to the{" "}
            <a
              href="https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/"
              target="_blank"
              rel="noreferrer"
            >
              WordPress JavaScript documentation standards
            </a>{" "}
            and those standards are enforced by Entermedia&apos;s eslint config.
          </p>
          <Headline level={2} id="design-patterns" showAnchor>
            Design Patterns
          </Headline>
          <p>
            Standardizing the way we structure our JavaScript allows us to
            collaborate more effectively with one another. Using intelligent
            design patterns improves maintainability, code readability, and even
            helps to prevent bugs.
          </p>
          <Headline level={3}>Writing Modern JavaScript</Headline>
          <p>
            It’s important we use language features that are intended to be
            used. This means not using deprecated functions, methods, or
            properties. Whether we are using plain JavaScript or a library, we
            should not use deprecated features. Using deprecated features can
            have negative effects on performance, security, maintainability, and
            compatibility.
          </p>
          <p>
            On all new projects you should be using up to date JavaScript
            methodologies combined with a build process tool like Babel to
            ensure browser compatibility. This allows us to utilize modern
            techniques while being certain our code will not break in older
            systems.
          </p>
          <p>
            Some older projects that have not yet been upgraded may not have the
            capability to use the most modern techniques, but it is still
            important to have processes in place that allow us to grow the
            technology stack as a project matures. In these cases, you should
            still follow best practice recommendations even if the newest
            patterns are not yet available to you.
          </p>
          <Headline level={4}>Using Classes</Headline>
          <p>
            Before ES6, classes in JavaScript were created by building a
            constructor function and adding properties by extending the
            prototype object. This created a fairly complex way to extend
            classes and deal with prototypal inheritance. Modern techniques
            allow us to create and extend classes directly and write cleaner
            code:
          </p>
          <pre>
            <code className="language-javascript">{`class BasicExample {
  constructor(el) {
    super(); // if you're extending
  }

  init() {
    console.log('Hello world.');
  }
}`}</code>
          </pre>
          <p>
            Classes in modern JavaScript offer a nicer syntax to access the
            standard prototypal inheritance we’ve already had for a while, but
            can also help guide the structure of componentized code. When
            deciding whether or not to use a Class, think of the code you’re
            writing in the greater context of the application.
          </p>
          <p>
            Classes will not always be the answer for creating modular code in
            your application, but you should consider them when you need to
            create discrete components or when those components need to inherit
            behaviors from other components, while still functioning as a single
            unit. For example, a utility function that searches a string for
            text may not be a good utilization of Classes, but an accordion menu
            with children components would.
          </p>
          <Headline level={4}>Using Arrow Functions</Headline>
          <p>
            Arrow functions are a great way to slim down easily executable code
            blocks. When using this style of function be sure not to over
            engineer a simple action just to make it smaller. For example, this
            is a good use of a simple multiline function being compressed into a
            single line:
          </p>
          <p>Multi-line:</p>
          <pre>
            <code className="language-javascript">{`const init = (msg) => {
    console.log(msg);
  };`}</code>
          </pre>
          <p>Single line:</p>
          <pre>
            <code className="language-javascript">{`const init = (msg) => console.log(msg);`}</code>
          </pre>
          <p>
            This is a very simple function, so compressing it down into a single
            line won’t cause any readability issues. However, the more
            complicated this function gets, the less likely it should be on a
            single line.
          </p>
          <p>
            Even though single argument arrow functions don’t require
            parenthesis around the argument itself, it is best to include the
            parenthesis for improved readability and scalability of the
            function.
          </p>
          <p>
            Something important to remember is that arrow functions are not
            always the answer. Their release addressed a very specific problem
            many engineers were facing with preserving the context of{" "}
            <code>this</code>. In a traditional function <code>this</code> is
            bound to different values depending on the context it is called.
            With arrow functions, it is bound to the code that contains the
            arrow function. Because arrow functions also have syntax benefits,
            as a general rule, use arrow functions unless you need a more
            traditional treatment of <code>this</code> (like in an event
            listener).
          </p>
          <Headline level={4}>Concatenating Strings and Templating</Headline>
          <p>
            When dealing with strings in JavaScript, it is very common to need
            some form of concatenation along the way. Before ES6 we were
            concatenating string with the <code>+</code> operator:
          </p>
          <pre>
            <code className="language-javascript">{`/* eslint-disable */
  var first = 'hello';
  var last = 'world';
  var msg = 'I said, "' + first + ' ' + last + '" to the crowd.';`}</code>
          </pre>
          <p>
            Modern techniques give us something called, “template literals”,
            which let us concatenate strings in a much more straightforward
            manner utilizing the back tick and some basic templating:
          </p>
          <pre>
            <code className="language-javascript">{`const first = 'hello';
  const last = 'world';
  const msg = \`I said, "\${first} \${last}," to the crowd.\`;`}</code>
          </pre>
          <Headline level={4}>Destructuring Arrays and Objects</Headline>
          <p>
            Destructuring is a JavaScript technique that allows you to easily
            assign values and properties from arrays and objects into specific
            variables. This direct mapping affords an easy way to access data
            from objects and arrays in a more convenient syntax.
          </p>
          <p className={classes["error-text"]}>The old way:</p>
          <pre>
            <code className="language-javascript">{`const arr = [1, 2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const d = arr[3];`}</code>
          </pre>
          <p className={classes["success-text"]}>The new way:</p>
          <pre>
            <code className="language-javascript">{`const [a, b, c, d] = [1, 2, 3, 4];
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  console.log(d); // 4`}</code>
          </pre>
          <p>
            Use destructuring whenever possible to slim down your code and
            improve overall readability.
          </p>
          <Headline level={4}>Componentizing Your Code</Headline>
          <p>
            Keeping different bits of functionality in your code reasonably
            separated is important to building and maintaining a scalable system
            over time. In the past we’ve had to accomplish this with our build
            systems leaning on concatenation as an abstraction layer to the
            project. Modern JavaScript techniques allow us to utilize{" "}
            <code>import</code> statements to break apart and reassemble your
            code into consumable chunks.
          </p>
          <p>
            When you’re building your project, be sure to lean on imports to
            wire your application together. As of right now, we do still need a
            build system to process the code so it can be consumed by a browser,
            but using this modern technique will make sure our code is well
            structured as the project ages. You can also use <code>import</code>{" "}
            statements to load parts of an external library you may need for any
            given component. The code below will give you an example:
          </p>
          <pre>
            <code className="language-javascript">{`// Only loading in the map method from lodash, because that's all we need!
  import map from 'lodash/map';`}</code>
          </pre>
          <p>
            This also allows you to build one component and import it into
            another.
          </p>
          <p>
            It’s also worth noting that named exports can be imported by
            wrapping the exported function within curly braces:
          </p>
          <pre>
            <code className="language-javascript">{`import { example } from 'example/lib';`}</code>
          </pre>
          <p>
            This is only possible if the exported component is a named export
            like so:
          </p>
          <pre>
            <code className="language-javascript">{`export const example = 66;`}</code>
          </pre>
          <Headline level={3}>Modules</Headline>
          <p>
            When creating your own modules be sure to think about how it should
            be used by others. Luckily ES6 modules makes this a simple task.
          </p>
          <p>
            There are many ways you can export a module, but typically exposing
            specific functions and/or data structures through an ES6 module is
            the preferred way.
          </p>
          <pre>
            <code className="language-javascript">{`// datastructure.js
  // private variable to the module
  const data = {};

  // private function to the module
  const process = (value) => {
    // complex logic
    return value;
  };

  // the two functions below are public
  export const getData = (field) => {
    return process(data[field]);
  };

  export const addData = (field, value) => {
    data[field] = value;
  };`}</code>
          </pre>
          <p>
            In the module above only two functions are being exposed, everything
            else is private to the module, therefore this module can be used as
            following.
          </p>
          <pre>
            <code className="language-javascript">{`import { addData, getData } from './datastructure';

  addData('key', 'myvalue');

  const value = getData('key');`}</code>
          </pre>
          <p>
            Avoid using classes unless there’s a good reason to. Consider the
            following example:
          </p>
          <pre>
            <code className="language-javascript">{`import Module from './mymodule';
  /* Module is a ES6 class */
  new Module('.element-selector', {
    /* options */
    onEvent1: () => {},
    onEvent2: () => {},
  });`}</code>
          </pre>
          <p>
            A good indicator that you don’t need classes is when you don’t need
            the instance of that class. For this reason our eslint config has
            the{" "}
            <a
              href="https://eslint.org/docs/rules/no-new"
              target="_blank"
              rel="noreferrer"
            >
              no-new
            </a>{" "}
            rule enabled. The code sample below provides a better alternative.
          </p>
          <pre>
            <code className="language-javascript">{`// Option 1: still using classes but with a better design
  import Module from './mymodule';

  const module1 = new Module('.element-selector', {
    /* options */
  });
  module1.addEventListener('onEvent1', () => {});
  module1.addEventListener('onEvent2', () => {});
  module1.doSomething();
  module1.hide();`}</code>
          </pre>
          <p>
            The example above changes the design of the module API a bit and
            assumes multiple and separate instance of the module are desired.
            However, sometimes that might not even be necessary. If all you need
            is to abstract some complex logic and accept a couple of parameter,
            exposing a factory/init function is all you need.
          </p>
          <pre>
            <code className="language-javascript">{`// Option 2: not using classes
  import module from './mymodule';

  module('.element-selector', {
    /* options */
  });`}</code>
          </pre>
          <Headline level={3}>Don’t Pollute the Window Object</Headline>
          <p>
            Adding methods or properties to the <code>window</code> object or
            the global namespace should be done carefully. <code>window</code>{" "}
            object pollution can result in collisions with other scripts. If you
            need to expose data to the rest of your application, you should
            first consider using some sort of state management. Sometimes
            however, exposing methods or properties to the{" "}
            <code>window global</code> is necessary and when doing so wrap your
            code in closures and expose methods and properties to window with
            caution.
          </p>
          <p>
            When a script is not wrapped in a closure, the current context or{" "}
            <code>this</code> is actually <code>window</code>:
          </p>
          <pre>
            <code className="language-javascript">{`/console.log(this === window); // true

  for (var i = 0; i < 9; i++) {
    // Do stuff
  }

  const result = true;

  console.log(window.result === result); // true
  console.log(window.i === i); // true`}</code>
          </pre>
          <p>
            When we put our code inside a closure, our variables are private to
            that closure unless we expose them:
          </p>
          <pre>
            <code className="language-javascript">{`(function () {
    for (let i = 0; i < 9; i++) {
      // Do stuff
    }

    window.result = true;
  })();

  console.log(typeof window.result !== 'undefined'); // true
  console.log(typeof window.i !== 'undefined'); // false`}</code>
          </pre>
          <p>
            Notice how <code>i</code> was not exposed to the window object.
          </p>
          <Headline level={3}>Secure Your Code</Headline>
          <p>
            In JavaScript, we often have to insert new elements with dynamic
            attributes and content into the DOM. A common way to do this is to
            use the <code>innerHTML</code> method like so:
          </p>
          <pre>
            <code className="language-javascript">{`const someElement = document.getElementById('someElement');
  const someUrl = 'https://someurl.com/';
  const someContent = 'Some content';

  someElement.innerHTML = \`<div class="container"><a href="\${someUrl}">\${someContent}</a></div>\`;`}</code>
          </pre>
          <p>
            However, passing HTML strings to <code>innerHTML</code> and methods
            like it can expose your code to{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"
              target="_blank"
              rel="noreferrer"
            >
              cross-site scripting
            </a>
            , also known as XSS—the most common security vulnerability in
            JavaScript. Because these methods evaluate strings passed to them as
            HTML, they can execute potentially harmful code. For instance, if{" "}
            <code>someContent</code> in the above example is{" "}
            <code>{`<img src="fakeImage" onerror="alert( 'hacked!' )" />`}</code>
            , the JavaScript in the <code>onerror</code> attribute will be
            executed.
          </p>
          <p>
            There are several measures you can take to circumvent this XSS
            vulnerability:
          </p>
          <Headline level={4}>
            Use <code>textContent</code> instead of <code>innerHTML</code>
          </Headline>
          <p>
            When setting the human-readable content of a single element, using{" "}
            <code>textContent</code> is safer than using <code>innerHTML</code>{" "}
            because it does not parse strings as HTML—meaning any malicious code
            passed to it will not be executed. Refer to{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"
              target="_blank"
              rel="noreferrer"
            >
              MDN’s documentation on <code>textContent</code>
            </a>{" "}
            for more info.
          </p>
          <Headline level={4}>
            Use the <code>DOM</code> API to create and add elements
          </Headline>
          <p>
            When you need to create multiple DOM elements, use the{" "}
            <code>document.createElement</code> method to create new elements
            and the <code>Element</code> API to set attributes and append them
            to the document. Creating your own elements and attributes will
            ensure that only those you explicitly define will make their way
            into the DOM.
          </p>
          <p>
            Note that appending new elements to the DOM is a relatively
            expensive operation, so in general you’ll want to build out the
            structure of new elements <em>before</em> adding them to the DOM,
            preferably within a single container element, then append them to
            the document all at once.
          </p>
          <p>
            Refer to MDN’s documentation on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"
              target="_blank"
              rel="noreferrer"
            >
              <code>document.createElement</code>
            </a>{" "}
            and the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Element"
              target="_blank"
              rel="noreferrer"
            >
              <code>Element</code> API
            </a>{" "}
            for more info.
          </p>
          <Headline level={4}>
            Sanitize HTML strings before adding to the DOM
          </Headline>
          <p>
            In general, using the <code>Element</code> API is the preferred best
            practice to safely create and add DOM elements. However, it tends to
            result in much more verbose code compared to HTML-parsing methods
            like <code>innerHTML</code>. This can become painful if you need to
            dynamically create a large number of new elements. In these cases,
            the convenience of methods like <code>innerHTML</code> can be
            extremely tempting.
          </p>
          <p>
            If you need to generate a large amount of HTML dynamically, consider
            using a <code>DOMParser</code> to parse and sanitize HTML strings
            before adding the HTML to the DOM with a method like{" "}
            <code>innerHTML</code>. Parsing HTML strings with a{" "}
            <code>DOMParser</code> will not automatically make the code any
            safer, but it will allow you to access the elements from the string
            and strip potentially unsafe tags and attributes before they have a
            chance to get executed. Refer to{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMParser">
              MDN’s documentation on <code>DOMParser</code>
            </a>{" "}
            for more info.
          </p>
          <p>
            Alternatively, you may consider adding a client-side sanitization
            library to your project so you can strip potentially malicious code
            from your HTML before you add it to the DOM. Passing your HTML
            strings through a sanitizer can help prevent XSS attacks when using
            methods like <code>innerHTML</code>. However, no library is perfect,
            so be aware that you are relying on the security of the sanitizer
            you choose. Also, remember to consider the effect on{" "}
            <a href="#performance">performance</a> when deciding whether to add
            any large library to your project.
          </p>
          <Headline level={2} id="performance" showAnchor>
            Performance
          </Headline>
          <p>
            Writing performant code is absolutely critical. Poorly written
            JavaScript can significantly slow down and even crash the browser.
            On mobile devices, it can prematurely drain batteries and contribute
            to data overages. Performance at the browser level is a major part
            of user experience which is part of the 10up mission statement.
          </p>
          <p>
            We have a published{" "}
            <a href="https://www.npmjs.com/package/@entermedia-llc/eslint-config">
              .eslint
            </a>{" "}
            configuration that’s used on Entermedia projects and should help you
            adhere to our coding standards.
          </p>
          <Headline level={3}>Only Load Libraries You Need</Headline>
          <p>
            JavaScript libraries should only be loaded on the page when needed.
            React + React DOM are around 650 KB together. This isn’t a huge deal
            on a fast connection but can add up quickly in a constrained
            bandwidth situation when we start adding a bunch of libraries.
            Loading a large number of libraries also increases the chance of
            conflicts.
          </p>
          <p>
            Not only should you only load the libraries you need, but using
            import statements, you should only load the <em>parts</em> of the
            libraries you need. For example, if you’re using{" "}
            <a href="https://lodash.com/" target="_blank" rel="noreferrer">
              Lodash
            </a>
            , it can be very large to load the entire system, especially if
            you’re not using all of it. You should always utilize import
            statements to target relevant parts of an external library to make
            sure you’re loading only what you need. The code block below will
            illustrate this point:
          </p>
          <pre>
            <code className="language-javascript">{`import map from 'lodash/map';
  import tail from 'lodash/tail';
  import times from 'lodash/times';
  import uniq from 'lodash/uniq';`}</code>
          </pre>
          <p>
            This code block imports four methods from Lodash instead of the
            entire library.{" "}
            <a
              href="https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark"
              target="_blank"
              rel="noreferrer"
            >
              Read more about the proper way to load Lodash
            </a>
            . These imports can also be reduced to a single line, but for Lodash
            specifically, it’s more performant to separate them.
          </p>
          <Headline level={3}>Cache DOM Selections</Headline>
          <p>
            It’s a common JavaScript mistake to reselect something
            unnecessarily. For example, every time a menu button is clicked, we
            do not need to reselect the menu. Rather, we select the menu once
            and cache its selector. This applies whether you are using a library
            or not. For example:
          </p>
          <p>Uncached:</p>
          <pre>
            <code className="language-javascript">{`const hideButton = document.querySelector('.hide-button');

  hideButton.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
  });`}</code>
          </pre>
          <p>Cached:</p>
          <pre>
            <code className="language-javascript">{`const menu = document.getElementById('menu');
  const hideButton = document.querySelector('.hide-button');

  hideButton.addEventListener('click', () => {
    menu.style.display = 'none';
  });`}</code>
          </pre>
          <p>
            Notice how, in cached versions, we are pulling the menu selection
            out of the event listener so it only happens once. The cached
            version is, not surprisingly, the{" "}
            <a
              href="https://jsperf.com/dom-selection-caching"
              target="_blank"
              rel="noreferrer"
            >
              fastest way to handle this situation
            </a>
            .
          </p>
          <Headline level={3}>Event Delegation</Headline>
          <p>
            Event delegation is the act of adding one event listener to a parent
            node to listen for events bubbling up from its children. This is
            much more performant than adding one event listener for each child
            element. Here is an example:
          </p>
          <pre>
            <code className="language-javascript">{`document.getElementById('menu').addEventListener('click', (event) => {
    const { currentTarget } = event;
    let { target } = event;

    if (currentTarget && target) {
      if (target.nodeName === 'LI') {
        // Do stuff with target!
      } else {
        while (currentTarget.contains(target)) {
          // Do stuff with a parent.
          target = target.parentNode;
        }
      }
    }
  });`}</code>
          </pre>
          <p>
            You may be wondering why we don’t just add one listener to the{" "}
            <code>&lt;body&gt;</code> for all our events. Well, we want the
            event to <em>bubble up the DOM as little as possible</em> for{" "}
            <a
              href="https://jsperf.com/event-delegation-distance"
              target="_blank"
              rel="noreferrer"
            >
              performance reasons
            </a>
            . This would also be pretty messy code to write.
          </p>
          <Headline level={3}>
            Debounce, Throttle, and requestAnimationFrame
          </Headline>
          <p>
            Browser events such as scrolling, resizing, and cursor movements
            happen as fast as possible and can cause performance issues. By
            debouncing, throttling, or using requestAnimationFrame on our
            functions, we can increase performance by controlling the rate at
            which an event listener calls them.
          </p>
          <Headline level={4}>Debouncing</Headline>
          <p>
            Debouncing a function will prevent it from being called again until
            a defined amount of time has passed, i.e., execute this function if
            200ms has passed since it was last called. A common use case would
            be when resizing a browser window; we can apply classes or move
            elements after the resize has happened.
          </p>
          <Headline level={4}>Throttling</Headline>
          <p>
            Throttling a function will cause it to only be called a maximum
            number of times over a defined period of time, i.e., only execute
            this function once every 50ms. A common use case would be when
            scrolling a browser window; we may want an element to show up as we
            scroll down the page, but killing performance by checking the scroll
            position constantly isn’t necessary. Debouncing wouldn’t work in
            this example because we don’t want to wait for the user to stop
            scrolling.
          </p>
          <Headline level={4}>requestAnimationFrame</Headline>
          <p>
            requestAnimationFrame is similar to throttling, but it’s a browser
            native API and tries to always throttle to 60fps. Its very name
            helps us know when it’s best to use: while animating things. This
            would be the case when our JavaScript function is updating element
            positions, sizes, or anything else that’s “painting” to the screen.
          </p>
          <p>
            Note that some of our recommended utility libraries already provide
            these functions, such as Underscore’s{" "}
            <a
              href="https://underscorejs.org/#debounce"
              target="_blank"
              rel="noreferrer"
            >
              debounce
            </a>{" "}
            and{" "}
            <a
              href="https://underscorejs.org/#throttle"
              target="_blank"
              rel="noreferrer"
            >
              throttle
            </a>{" "}
            and Lodash’s{" "}
            <a
              href="https://lodash.com/docs/4.17.11#debounce"
              target="_blank"
              rel="noreferrer"
            >
              debounce
            </a>{" "}
            and{" "}
            <a
              href="https://lodash.com/docs/4.17.11#throttle"
              target="_blank"
              rel="noreferrer"
            >
              throttle
            </a>
            .
          </p>
          <p>
            For more information and examples of debouncing, throttling, and
            requestAnimationFrame, see{" "}
            <a
              href="https://css-tricks.com/debouncing-throttling-explained-examples/"
              target="_blank"
              rel="noreferrer"
            >
              Debouncing and Throttling Explained Through Examples
            </a>
            ,{" "}
            <a
              href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/"
              target="_blank"
              rel="noreferrer"
            >
              The Difference Between Throttling and Debouncing{" "}
            </a>
            , and{" "}
            <a
              href="https://davidwalsh.name/javascript-debounce-function"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript Debounce Function
            </a>
            .
          </p>
          <Headline level={2} id="client-side-data" showAnchor>
            Client-side Data
          </Headline>
          <p>
            When dealing with client-side data requests (Ajax calls), there are
            a lot of different methods to consider. This portion of the document
            will walk you through various situations and talk about the
            different technologies and patterns you may encounter along the way.
          </p>
          <Headline level={3}>
            Using Fetch and Promises for Modern Environments
          </Headline>
          <p>
            The Fetch API is a modern replacement for the XMLHttpRequest. It is{" "}
            <a
              href="https://caniuse.com/#search=fetch"
              target="_blank"
              rel="noreferrer"
            >
              generally well supported
            </a>
            , having features present in all evergreen browsers (browsers that
            auto-update). Fetch is recommended to be used in all modern
            environments when making Ajax calls or dealing with client-side data
            requests. Visit the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noreferrer"
            >
              MDN Fetch documentation
            </a>{" "}
            for a basic example of how to use this API.
          </p>
          <p>
            To properly use fetch, support for Promises also needs to be present
            (Promises and Fetch have the same{" "}
            <a
              href="https://caniuse.com/#search=promise"
              target="_blank"
              rel="noreferrer"
            >
              browser support
            </a>
            ). The support requirement for both is an important distinction when
            your project needs to support non-evergreen browsers (IE 11 and
            under), because both APIs will need to be polyfilled to get Fetch
            working.
          </p>
          <p>
            To polyfill with NPM, we recommend adding the following packages to
            your dependencies:{" "}
            <a
              href="https://www.npmjs.com/package/promise-polyfill"
              target="_blank"
              rel="noreferrer"
            >
              promise-polyfill
            </a>{" "}
            and{" "}
            <a
              href="https://www.npmjs.com/package/whatwg-fetch"
              target="_blank"
              rel="noreferrer"
            >
              whatwg-fetch
            </a>
            . They are both applicable at different points in the build process.
            Promises are polyfilled at the file-level with an import and fetch
            is polyfilled at the build level in your task runner. Please see the{" "}
            <a
              href="https://www.npmjs.com/package/whatwg-fetch"
              target="_blank"
              rel="noreferrer"
            >
              official whatwg-fetch documentation
            </a>{" "}
            for detailed installation instructions.
          </p>
          <p>
            If you are unable to process the polyfills in a modern workflow, the
            files can also be downloaded and enqueued separately (
            <a
              href="https://cdnjs.com/libraries/fetch"
              target="_blank"
              rel="noreferrer"
            >
              fetch
            </a>
            ,{" "}
            <a
              href="https://cdn.jsdelivr.net/npm/promise-polyfill@8/"
              target="_blank"
              rel="noreferrer"
            >
              promise
            </a>
            ), but if possible, they should be implemented at the build level.
          </p>
          <Headline level={3}>
            Using A Normal Ajax Call for Older Environments
          </Headline>
          <p>
            For various reasons on a project, you may not be able to use a
            modern technique for dealing with client-side data requests. If you
            find yourself in that situation, it usually isn’t necessary to load
            an entire library like jQuery for a single feature. If you find
            yourself in this situation try writing a vanilla ajax call instead.
            Basic ajax calls do not require any pollyfills or fallbacks, with
            the exception of providing support on very old browsers like,
            Internet Explorer 6. You can reference the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Browser_compatibility"
              target="_blank"
              rel="noreferrer"
            >
              XMLHttpRequest Browser Compatibility table
            </a>{" "}
            on MDN for specific feature support.
          </p>
          <p>
            Please see the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
              target="_blank"
              rel="noreferrer"
            >
              MDN XMLHttpRequest documentation
            </a>{" "}
            for an example of a basic Ajax call.
          </p>
          <Headline level={3}>
            When to Use a Client-side Data Request Library
          </Headline>
          <p>
            Sometimes a project may require a more robust solution for managing
            your requests, especially if you will be making many requests to
            various endpoints. While Fetch can do most (and someday all) of the
            things we need, there may be a few areas where it could fall short
            in your project. A few main items where Fetch may fall short:
          </p>
          <ul>
            <li>Cancelable requests</li>
            <li>Timeout requests</li>
            <li>Request progress</li>
          </ul>
          <p>
            It should be noted that these are in{" "}
            <a
              href="https://github.com/github/fetch#aborting-requests"
              target="_blank"
              rel="noreferrer"
            >
              active development
            </a>{" "}
            and timeout requests can also be handled by using a{" "}
            <a
              href="https://davidwalsh.name/fetch-timeout"
              target="_blank"
              rel="noreferrer"
            >
              wrapper function
            </a>
            .
          </p>
          <p>
            Certain libraries have these built in already and are still
            promised-based, but can also come with a few other advantages that
            Fetch doesn’t have like:{" "}
            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noreferrer"
            >
              transformers
            </a>
            ,{" "}
            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noreferrer"
            >
              interceptors
            </a>
            , and built-in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Cross-site_request_forgery"
              target="_blank"
              rel="noreferrer"
            >
              XSRF protection
            </a>
            . If you find yourself needing these features that are outside the
            scope of native JavaScript you may want to evaluate the benefit of
            using a library.
          </p>
          <p>
            If you plan on making many requests over the lifetime of the
            application and you don’t need the features listed above, you should
            consider making a{" "}
            <a
              href="https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78"
              target="_blank"
              rel="noreferrer"
            >
              helper function or module
            </a>{" "}
            that will handle all of your application’s Fetch calls so you can
            easily include things like: expected error handling, a common URL
            base, any cookies you may need, any mode changes like CORS, etc..
            Overall, you should be able to accomplish what you need to with
            Fetch in the majority of cases.
          </p>
          <p>
            Certain codebases may already have such libraries in place. Many
            legacy projects use jQuery.ajax() to make their requests. If
            possible, attempt to phase out jQuery for a vanilla solution where
            appropriate. In many cases, replacing with Fetch or XMLHttpRequest
            will be possible.
          </p>
          <Headline level={3}>Concatenating Requests</Headline>
          <p>
            When constructing a page that contains a lot of client-side data
            requests you will want to consider concatenating your requests into
            a single Ajax call. This will help you avoid piling up requests or
            sending them through callbacks and nested promises when parts of the
            data depend on other parts.
          </p>
          <Headline level={4}>GraphQL</Headline>
          <p>
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              GraphQL
            </a>{" "}
            is an open source data query and manipulation language. It provides
            an alternative to REST because it allows for a consistent way to
            make declarative queries. We first define the data structure(s) we
            need, then request the data, and return only the data that was
            requested. This creates an environment of smaller, more targeted
            calls to an API. It also allows us to concatenate multiple calls
            into single data requests, reducing the overhead and time to load.
          </p>
          <p>
            An essential part of a GraphQL API is an API schema. GraphQL
            requires a human-readable schema which describes the types which are
            available, and how they relate to one another. While writing a
            schema is reasonably straightforward, utilizing the standardized
            nature of WordPress’s database could save time. It may well be
            possible to reuse a schema from other projects, such as generated by
            a plugin like,{" "}
            <a
              href="https://github.com/wp-graphql/wp-graphql"
              target="_blank"
              rel="noreferrer"
            >
              WPGraphQL
            </a>
            .
          </p>
          <Headline level={2} id="testing" showAnchor>
            Unit and Integration Testing
          </Headline>
          <p>
            At Entermedia, we generally employ unit and integration tests only
            when building applications that are meant to be distributed. Writing
            tests for client themes usually does not offer a huge amount of
            value (there are of course exceptions to this). When writing tests,
            it’s important to use the framework that best fits the situation and
            make sure it is well documented for future engineers coming onto the
            project.
          </p>
          <Headline level={2} id="libraries" showAnchor>
            Libraries
          </Headline>
          <p>
            With the influx of JavaScript upgrades in recent years, the need for
            a third-party library to polyfill functionality is becoming more and
            more rare (outside of a build script). Don’t load in extensions
            unless the benefit outweighs the size of and added load-time of
            using it. While it is often more efficient for coding to use a quick
            jQuery method, it is rarely worth bringing in an entire library for
            one-off instances.
          </p>
          <p>
            If you are working on a legacy project that already contains a
            library, make sure you’re still evaluating the need for it as you
            build out features to best set up clients for the future.
          </p>
          <p>
            There are many JavaScript libraries available today. Many of them
            directly compete with each other. We try to stay consistent with
            what WordPress uses. The following is a list of primary libraries
            used by Entermedia.
          </p>
          <Headline level={3}>Components</Headline>
          <p>
            WP Component Library (coming soon) - Provides us with a vetted,
            accessible, and standardized collection of UI component and Schema
            snippets we can use on projects.
          </p>
          <Headline level={3}>Utility</Headline>
          <p>
            <a href="http://underscorejs.org" target="_blank" rel="noreferrer">
              Underscore
            </a>{" "}
            - Provides a number of useful utility functions such as{" "}
            <code>clone()</code>, <code>each()</code>, and <code>extend()</code>
            . WordPress core uses this library quite a bit.
          </p>
          <Headline level={3}>Frameworks</Headline>
          <p>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>{" "}
            - Using React provides a library to create large-scale, stateful
            JavaScript applications. It aims to provide a flexible system of
            creating highly componentized user interfaces.{" "}
            <Link href="js/react">Learn more about how we use React</Link>.
          </p>
          <p>
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
              Vue
            </a>{" "}
            - Implementing Vue on a project allows us to take advantage of the
            statefulness built into something like React, but apply it on a much
            more lightweight and smaller scale as to not bog down performance by
            loading in a heavy library.{" "}
            <Link href="js/vue">Learn more about how we use Vue</Link>.
          </p>
          <Headline level={3}>Cookies</Headline>
          <p>
            Safari browser’s Intelligent Tracking Prevention (ITP) 2.1 sets the
            expiration period at 7 days for all first-party cookies set by
            in-line (or tag management solution injected) vendor JavaScript
            libraries like Google Analytics’ analytics.js.
          </p>
          <p>
            Authentication cookies (secure and HTTP-only) which have been
            properly implemented won’t be affected by the 7-day cap. These
            cookies should be deployed using the Set-Cookie header in the HTTP
            response and inaccessible via JavaScript’s document.cookie API.
          </p>
          <p>Solutions for other types of cookies include:</p>
          <ol>
            <li>
              Using localStorage to persist the unique identifier (i.e. the
              client ID) instead of relying solely on the _ga cookie
            </li>
            <li>
              Setting the _ga cookie with the HTTP response, rather than with
              JavaScript Keep in mind that these solutions come with caveats:
              using localStorage only works on the same domain and would not
              work for cross-domain tracking.
            </li>
          </ol>
          <p>
            As an alternative to local storage, server-side tracking via the
            proxy layer in Cloudflare is probably the best option for clients
            with significant traffic from Safari.
          </p>
          <Headline level={2} id="refresher" showAnchor>
            Code Reference/Refresher
          </Headline>
          <Headline level={3}>Working with Arrays</Headline>
          <Headline level={4}>Which Array Method to Use?</Headline>
          <Image
            src="/images/array-methods.jpg"
            width={820}
            height={461}
            alt="Which array method to use?"
            loader={imageLoader}
          />
        </section>
      </Template>
    </>
  );
}
