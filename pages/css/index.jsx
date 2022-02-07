// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Component imports
import Template from "../../components/templates/Default/Default";
import Heading from "../../components/atoms/Headline/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
require("prismjs/components/prism-scss");

// Component CSS module imports
import classes from "../../styles/helpers/layout.module.scss";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>CSS | Entermedia Best Practices</title>
      </Head>

      <Template>
        <section>
          <Heading section="1" id="css">
            CSS
          </Heading>
          <Heading section="2" id="philosophy" showLink>
            Philosophy
          </Heading>
          <p>
            At Entermedia, we value content and the experience users will have
            reading it. We write CSS with this in mind and don&apos;t sacrifice
            our clients&apos; most important assets over the latest, shiniest,
            half-supported CSS features just for the sake of using them. CSS
            should help enhance content, not bury it under “cool” distractions.
          </p>
          <p>
            Our websites are built mobile first, using performant CSS.
            Well-structured CSS yields maintainability and better collaboration
            which ultimately yields better client experiences.
          </p>
          <Heading section="2" id="accessibility" showLink>
            Accessibility
          </Heading>
          <Heading section="3">Animation</Heading>
          <p>
            Not every animation brings pleasure to the end user. In some cases
            motion can trigger harmful reactions from users with vestibular
            disorders, epilepsy or even migraines.
          </p>
          <p>
            The <code>prefer-reduced-motion</code> CSS media feature does not
            currently have the widest support, but is active in{" "}
            <a
              href="https://caniuse.com/#feat=prefers-reduced-motion"
              target="_blank"
              rel="noreferrer"
            >
              Safari and Firefox
            </a>
            ). However, we still recommend applying it, as it is simple to
            implement and affords a better experience for those using supported
            browsers.
          </p>
          <p>Here is an example:</p>
          <pre>
            <code className="language-css">{`.animation {
      animation: vibrate 0.3s linear infinite both;
  }

  @media (prefers-reduced-motion: reduce) {
      .animation {
          animation: none;
      }
  }`}</code>
          </pre>
          <p>
            Read more about{" "}
            <a
              href="https://alistapart.com/blog/post/more-resources-for-accessible-animations"
              target="_blank"
              rel="noreferrer"
            >
              creating accessible animations
            </a>
            .
          </p>
          <Heading section="2" id="performance" showLink>
            Performance
          </Heading>
          <p>
            Let&apos;s be honest, CSS “speed” and performance is not as
            important as PHP or JavaScript performance. However, this
            doesn&apos;t mean we should ignore it. A sum of small improvements
            equals better experience for the user.
          </p>
          <p>
            Three areas of concern are{" "}
            <Link href="/css#network-requests">network requests</Link>,{" "}
            <Link href="/css#css-specificity">CSS specificity</Link> and{" "}
            <Link href="/css#animations">animation performance</Link>.
          </p>
          <p>
            Performance best practices are not only for the browser experience,
            but for code maintenance as well.
          </p>
          <Heading section="2" id="responsive-design" showLink>
            Responsive Design
          </Heading>
          <p>
            We build our websites mobile first. We do not rely on JavaScript
            libraries such as <code>respond.js</code> as it does not work well
            in certain environments. Instead, we leverage a natural,
            mobile-first build process and allow sites gracefully degrade.
          </p>
          <Heading section="3">Min-width media queries</Heading>
          <p>
            A responsive website should be built with min-width media queries.
            This approach means that our media queries are consistent, readable
            and minimize selector overrides.
          </p>
          <ul>
            <li>
              For most selectors, properties will be added at later breakpoints.
              This way we can reduce the usage of overrides and resets.
            </li>
            <li>
              It targets the least capable browsers first which is
              philosophically in line with mobile first — a concept we often
              embrace for our sites
            </li>
            <li>
              When media queries consistently “point” in the same direction, it
              makes it easier to understand and maintain stylesheets.
            </li>
          </ul>
          <p>Avoid mixing min-width and max-width media queries.</p>
          <Heading section="3">Breakpoints</Heading>
          <p>
            Working with build tools that utilize Sass or PostCSS processing, we
            can take advantages of reusability and avoid having an
            unmaintainable number of breakpoints. Using variables and reusable
            code blocks we can lighten the CSS load and ease maintainability.
          </p>
          <Heading section="3">Media queries placement</Heading>
          <p>
            In your stylesheet files, nest the media query within the component
            it modifies. <strong>Do not</strong> create size-based partials
            (e.g. <code>_1024px.(s)css</code>, <code>_480px.(s)css</code>): it
            will be frustrating to hunt for a specific selector through all the
            files when we have to maintain the project. Putting the media query
            inside the component will allow developers to immediately see all
            the different styles applied to an element.
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`@media only screen and (min-width: 1024px) {
    @import "responsive/1024up";
  }
  .some-class {
    color: red;
  }
  .some-other-class {
    color: orange;
  }
  @media only screen and (min-width: 1024px) {
    .some-class {
      color: blue;
    }
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-scss">{`.some-class {
    color: red;
    @media only screen and (min-width: 1024px) {
      color: blue;
    }
  }
  .some-other-class {
    color: orange;
  }`}</code>
          </pre>
          <Heading section="3">IE8 and older browser support</Heading>
          <p>
            We prefer showing a fixed-width non-responsive desktop version to
            older IE users rather than showing a mobile version.
          </p>
          <ul>
            <li>Use a feature detection to target older browsers.</li>
            <li>Load a different stylesheet for older browsers.</li>
          </ul>
          <Heading section="2" id="syntax" showLink>
            Syntax and Formatting
          </Heading>
          <p>
            Syntax and formatting are keys to a maintainable project. By keeping
            our code style consistent, we not only help ourselves debug faster
            but we&apos;re also lessening the burden on those who will have to
            maintain our code (maybe ourselves too!).
          </p>
          <Heading section="3">CSS Syntax</Heading>
          <p>
            CSS syntax is not strict and will accept a lot of variations, but
            for the sake of legibility and fast debugging, we follow basic code
            styles:
          </p>
          <ul>
            <li>Write one selector per line</li>
            <li>Write one declaration per line</li>
            <li>Closing braces should be on a new line</li>
          </ul>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`.class-1, .class-2,
  .class-3 {
  width: 10px; height: 20px;
  color: red; background-color: blue; }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`.class-1,
  .class-2,
  .class-3 {
    width: 10px;
    height: 20px;
    color: red;
    background-color: blue;
  }`}</code>
          </pre>
          <ul>
            <li>Include one space before the opening brace</li>
            <li>Include one space before the value</li>
            <li>Include one space after each comma-separated values</li>
          </ul>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`.class-1,.class-2{
    width:10px;
    box-shadow:0 1px 5px #000,1px 2px 5px #ccc;
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`.class-1,
  .class-2 {
    width: 10px;
    box-shadow: 0 1px 5px #000, 1px 2px 5px #ccc;
  }`}</code>
          </pre>
          <ul>
            <li>Try to use lowercase for all values, except for font names</li>
            <li>Zero values don&apos;t need units</li>
            <li>
              End all declarations with a semi-colon, even the last one, to
              avoid errors
            </li>
            <li>Use double quotes instead of single quotes</li>
          </ul>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`section {
    background-color: #FFFFFF;
    font-family: 'Times New Roman', serif;
    margin: 0px
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`section {
    background-color: #fff;
    font-family: "Times New Roman", serif;
    margin: 0;
  }`}</code>
          </pre>
          <p>
            If you don&apos;t need to set all the values, don&apos;t use
            shorthand notation.
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`.header-background {
    background: blue;
    margin: 0 0 0 10px;
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`.header-background {
    background-color: blue;
    margin-left: 10px;
  }`}</code>
          </pre>
          <Heading section="3">Declaration ordering</Heading>
          <p>
            Declarations should be ordered alphabetically or by type
            (Positioning, Box model, Typography, Visual). Whichever order is
            chosen, it should be consistent across all files in the project.
          </p>
          <p>If you&apos;re using Sass, use this ordering:</p>
          <ol>
            <li>@extend</li>
            <li>Regular styles (allows overriding extended styles)</li>
            <li>
              @include (to visually separate mixins and placeholders) and media
              queries
            </li>
            <li>Nested selectors</li>
          </ol>
          <Heading section="3">Nesting</Heading>
          <p>
            Nesting has changed the lives of many, but like everything in life,
            abusing good things will ultimately be bad. Nesting makes the code
            more difficult to read and can create confusion. Too much nesting
            also adds unnecessary specificity, forcing us to add the same or
            greater specificity in overrides. We want to avoid selector nesting
            and over-specificity as much as possible.
          </p>
          <p>
            If you&apos;re using PostCSS or Sass{" "}
            <strong>nesting is required</strong> in the following cases, because
            it will make the code easier to read:
          </p>
          <ul>
            <li>pseudo-classes</li>
            <li>pseudo-elements</li>
            <li>component states</li>
            <li>media queries</li>
          </ul>
          <Heading section="3">Selector Naming</Heading>
          <p>
            Selectors should be lowercase, and words should be separated with
            hyphens. Please avoid camelcase, but underscores are acceptable if
            they&apos;re being used for BEM or another syntax pattern that
            requires them. The naming of selectors should be consistent and
            describe the functional purpose of the styles they&apos;re applying.
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`.btnRed {
    background-color: red;
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`.btn-warning {
    background-color: red;
  }`}</code>
          </pre>
          <p>
            For components that could possibly conflict with plugins or
            third-party libraries, use vendor prefixes. Don&apos;t use names
            that can be blocked by adblockers (e.g. “advertisement”). When in
            doubt, you can check a class name against{" "}
            <a
              href="https://easylist-downloads.adblockplus.org/easylist.txt"
              target="_blank"
              rel="noreferrer"
            >
              this list
            </a>{" "}
            to see if it&apos;s likely to be blocked.
          </p>
          <Heading section="2" id="documentation" showLink>
            Documentation
          </Heading>
          <p>
            Code documentation serves two purposes: it makes maintenance easier
            and it makes us stop and think about our code. If the explanation is
            too complex, maybe the code is overly complex too. Documenting helps
            keep our code simple and maintainable.
          </p>
          <Heading section="3">Commenting</Heading>
          <p>
            We follow WordPress official commenting standards. Do not hesitate
            to be very verbose with your comments, especially when documenting a
            tricky part of your CSS. Use comment blocks to separate the
            different sections of a partial, and/or to describe what styles the
            partial covers:
          </p>
          <pre>
            <code className="language-css">{`/**
  * Section title
  *
  * Description of section
  */`}</code>
          </pre>
          <p>For single selectors or inline comments, use this syntax:</p>
          <pre>
            <code className="language-css">{`/* Inline comment */`}</code>
          </pre>
          <p>
            Make sure to comment any complex selector or rule you write. For
            example:
          </p>
          <pre>
            <code className="language-css">{`/* Select list item 4 to 8, included */
  li:nth-child(n+4):nth-child(-n+8) {
    color: red;
  }`}</code>
          </pre>
          <Heading section="3">Network Requests</Heading>
          <ul>
            <li>
              Limit the number of requests by concatenating CSS files and
              encoding sprites and font files to the CSS file.
            </li>
            <li>Minify stylesheets</li>
            <li>
              Use GZIP compression when possible Automate these tasks with a PHP
              or/and JavaScript build process.
            </li>
          </ul>
          <Heading section="3">CSS Specificity</Heading>
          <p>
            Stylesheets should go from less specific rules to highly specific
            rules. We want our selectors specific enough so that we don&apos;t
            rely on code order, but not too specific so that they can be easily
            overridden.
          </p>
          <p>
            For that purpose, <strong>classes</strong> are our preferred
            selectors: pretty low specificity but high reusability.
          </p>
          <p>
            Avoid using <code>!important</code> whenever you can.
          </p>
          <p>
            Use{" "}
            <a
              href="https://csswizardry.com/2011/09/writing-efficient-css-selectors/"
              target="_blank"
              rel="noreferrer"
            >
              efficient selectors
            </a>
            .
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`div div header#header div ul.nav-menu li a.black-background {
    background: radial-gradient(ellipse at center,  #a90329 0%,#8f0222 44%,#6d0019 100%);
  }`}</code>
          </pre>
          <Heading section="3">Inheritance</Heading>
          <p>
            Fortunately, many CSS properties can be inherited from the parent.
            Take advantage of inheritance to avoid bloating your stylesheet but
            keep specificity in mind.
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`.sibling-1 {
    font-family: Arial, sans-serif;
  }
  .sibling-2 {
    font-family: Arial, sans-serif;
  }`}</code>
          </pre>
          <p className={classes["success-text"]}>Do:</p>
          <pre>
            <code className="language-css">{`.parent {
    font-family: Arial, sans-serif;
  }`}</code>
          </pre>
          <Heading section="3">Reusable code</Heading>
          Styles that can be shared, should be shared (aka DRY, Don&apos;t
          Repeat Yourself). This will make our stylesheets less bloated and
          prevent the browser from doing the same calculations several times.
          Make good use of Sass placeholders. (also see{" "}
          <Link href="/css/#inheritance">Inheritance</Link>)
          <Heading section="3">CSS over assets</Heading>
          <p>
            Don&apos;t add an extra asset if a design element can be translated
            in the browser using CSS only. We value graceful degradation over
            additional HTTP requests.
          </p>
          <p>Very common examples include gradients and triangles.</p>
          <Heading section="3">Animations</Heading>
          <p>
            It&apos;s a common belief that CSS animations are more performant
            than JavaScript animations. A few articles aimed to set the record
            straight (linked below).
          </p>
          <ul>
            <li>
              If you&apos;re only animating simple state changes and need good
              mobile support, go for CSS (most cases).
            </li>
            <li>
              If you need more complex animations, use a JavaScript animation
              framework or requestAnimationFrame.
            </li>
          </ul>
          <p>
            Limit your CSS animations to 3D transforms (translate, rotate,
            scale) and opacity, as those are aided by the GPU and thus smoother.
            Note that too much reliance on the GPU can also overload it.
          </p>
          <p className={classes["error-text"]}>Don&apos;t:</p>
          <pre>
            <code className="language-css">{`#menu li{
    left: 0;
    transition: all 1s ease-in-out;
  }
  #menu li:hover {
    left: 10px
  }`}</code>
          </pre>
          <p>
            Always test animations on a real mobile device loading real assets,
            to ensure the limited memory environment doesn&apos;t tank the site.{" "}
            <strong>Note:</strong>{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions"
              target="_blank"
              rel="noreferrer"
            >
              WCAG 2.1, Guideline 2.3.2 Motion from Animation
            </a>{" "}
            dictates that, “Motion animation triggered by interaction can be
            disabled, unless the animation is essential to the functionality or
            the information being conveyed.”
          </p>
          <p>Articles worth reading:</p>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://greensock.com/css-performance"
              >
                CSS animations performance: the untold story
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://css-tricks.com/myth-busting-css-animations-vs-javascript/"
              >
                Myth Busting: CSS Animations vs. JavaScript
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://davidwalsh.name/css-js-animation"
              >
                CSS vs. JS Animation: Which is Faster?
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/"
              >
                Why Moving Elements With Translate() Is Better Than Pos:abs
                Top/left
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developers.google.com/web/fundamentals/look-and-feel/animations/css-vs-javascript?hl=en"
              >
                CSS vs JavaScript Animations
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"
              >
                requestAnimationFrame
              </a>
            </li>
          </ul>
          <Heading section="2" id="frameworks" showLink>
            Frameworks
          </Heading>
          <Heading section="3">Grids</Heading>
          <p>
            Our preference is not to use a 3rd party grid system, use your best
            judgement and keep them simple! All too often we are faced with a
            design that isn&apos;t built on a grid or purposefully breaks a
            loosely defined grid. Even if the designer had a grid in mind, there
            are often needs that require more creative solutions. For example:
            fixed-width content areas to accommodate advertising.
          </p>
          <p>
            Sometimes a more complex grid system is warranted and leveraging a
            3rd party library will gain some efficiency. However, keep in mind
            that by adopting a grid system you are forcing all future
            collaborators on the project to learn this system.
          </p>
          <Heading section="3">Resets</Heading>
          <p>
            <a
              href="https://necolas.github.io/normalize.css/"
              target="_blank"
              rel="noreferrer"
            >
              Normalize.css
            </a>{" "}
            is our primary tool for CSS resets.
          </p>
          <Heading section="2" showLink>
            Further reading
          </Heading>
          <p>
            <a
              href="https://css-tricks.com/just-try-and-do-a-good-job/"
              target="_blank"
              rel="noreferrer"
            >
              CSS: Just Try and Do a Good Job
            </a>
          </p>
        </section>
      </Template>
    </>
  );
}
