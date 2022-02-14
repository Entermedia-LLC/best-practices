// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-shell-session";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Tools | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1} id="tools">
          Tools
        </Headline>
        <p>
          The following are tools we use at Entermedia. This list will grow and
          change over time and is not meant to be comprehensive. Generally, we
          encourage or require these tools to be used in favor of other ones.
          Rules governing tools to be used and packaged with a client site will
          be much stricter than those used on internal projects.
        </p>
        <Headline level={2} id="local-development" showAnchor>
          Local Development Environments
        </Headline>
        <Headline level={2} id="scaffolding" showAnchor>
          Scaffolding
        </Headline>
        <Headline level={2} id="task-runners" showAnchor>
          Task Runners
        </Headline>
        <p>
          <a
            href="https://webpack.github.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Webpack
          </a>{" "}
          - Webpack is a bundler for JS/CSS. It’s extremely useful when building
          larger JavaScript applications (i.e. React.js).
        </p>
        <Headline level={2} id="aria-package-managers" showAnchor>
          Package/Dependency Managers
        </Headline>
        <p>
          <a
            href="https://getcomposer.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            Composer
          </a>{" "}
          - We use Composer for managing PHP dependencies. Usually everything we
          need is bundled with frameworks like WordPress, but sometimes we need
          external PHP libraries like “Patchwork”. Composer is a great way to
          manage those external libraries.
        </p>
        <p>
          When a WordPress install is managed and maintained by an engineering
          team, and when the infrastructure supports it, plugins in a WordPress
          project can be easily managed using Composer.{" "}
          <a
            href="https://wpackagist.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            WordPress Packagist
          </a>{" "}
          provides a Composer repository that mirrors all public WordPress
          plugins and themes.
        </p>
        <Headline level={2} id="aria-version-control" showAnchor>
          Version Control
        </Headline>
        <p>
          <a
            href="https://git-scm.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Git
          </a>{" "}
          - At Entermedia we use Git for version control. We encourage people to
          use the command line for interacting with Git. GUIs are permitted but
          will not be supported internally.
        </p>
        <p>
          <a
            href="https://subversion.apache.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            SVN
          </a>{" "}
          - We use SVN, but only in the context of WordPress.com. Again, we
          encourage people to use the command line as we do not support GUIs
          internally.
        </p>
        <Headline level={2} id="aria-command-line" showAnchor>
          Command Line Tools
        </Headline>
        <p>
          <a
            href="https://wp-cli.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            WP-CLI
          </a>{" "}
          - A command line interface for WordPress. This is an extremely
          powerful tool that allows us to do imports, exports, run custom
          scripts, and more via the command line. Often this is the only way we
          can affect a large database.
        </p>
        <Headline level={2} id="aria-accessibility-testing" showAnchor>
          Accessibility Testing
        </Headline>
        <p>
          We use a variety of tools to test our sites for accessibility issues.
          WebAim has some great resources on{" "}
          <a
            href="http://webaim.org/articles/screenreader_testing/"
            target="_blank"
            rel="noreferrer noopener"
          >
            how to evaluate sites
          </a>{" "}
          with a screen reader.
        </p>
        <ul>
          <li>
            <a
              href="http://webaim.org/articles/voiceover/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Using VoiceOver
            </a>
          </li>
          <li>
            <a
              href="http://webaim.org/articles/nvda/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Using NVDA
            </a>
          </li>
          <li>
            <a
              href="http://webaim.org/articles/jaws/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Using JAWS
            </a>
          </li>
        </ul>
        <p>
          We’re also a fan of a few browser tools that lend us a hand when it
          comes to testing areas like color contrast, heading hierarchy, and
          ARIA application.
        </p>
        <ul>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=es"
              target="_blank"
              rel="noreferrer noopener"
            >
              Headings Map for Chrome
            </a>{" "}
            or{" "}
            <a
              href="https://addons.mozilla.org/en-us/firefox/addon/headingsmap/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Headings Map for Firefox
            </a>{" "}
            - A browser extension that allows you to see the heading structure
            of a webpage.
          </li>
          <li>
            <a
              href="http://whatsock.com/training/matrices/visual-aria.htm"
              target="_blank"
              rel="noreferrer noopener"
            >
              The Visual ARIA Bookmarklet
            </a>{" "}
            - A bookmarklet that can be run on a webpage and color codes ARIA
            roles.
          </li>
          <li>
            <a
              href="http://wave.webaim.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              WAVE
            </a>{" "}
            - A toolkit from WebAIM, that also has an extension for
            Chrome/Firefox. It evaluates a webpage and returns accessibility
            errors.
          </li>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb"
              target="_blank"
              rel="noreferrer noopener"
            >
              Accessibility Developer Tools
            </a>{" "}
            - A Chrome extension that adds an “Audit” tab in Chrome’s developer
            tools that can scan a webpage for accessibility issues.
          </li>
          <li>
            <a
              href="https://khan.github.io/tota11y/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tota11y
            </a>{" "}
            - A visualization toolkit that can be used as a bookmarklet, and
            reveals accessibility errors on a webpage.
          </li>
          <li>
            <a
              href="https://leaverou.github.io/contrast-ratio/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Contrast Ratio
            </a>{" "}
            - A color contrast tool to compare two colors against{" "}
            <a
              href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              levels of conformance
            </a>{" "}
            and see if they pass.
          </li>
          <li>
            <a
              href="http://contrast-finder.tanaguru.com/?lang=en"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tanagaru Contrast Finder
            </a>{" "}
            - Another color contrast tool that tests colors against the levels
            of conformance, but also provides you with alternatives should your
            provided colors fail.
          </li>
        </ul>
        <Headline level={2} id="aria-visual-testing" showAnchor>
          Visual Regression Testing
        </Headline>
        <p>
          We use visual regression testing to ensure code changes don’t have
          unforeseen repercussions. This provides a helpful visual aid to check
          against CSS changes, plugin updates, and third-party script updates.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/garris/BackstopJS"
              target="_blank"
              rel="noreferrer noopener"
            >
              BackstopJS
            </a>{" "}
            - A tool used to run visual regression tests that compares known
            reference states against updates.
          </li>
        </ul>
        <Headline level={2} id="aria-commitlint" showAnchor>
          commitlint
        </Headline>
        <p>
          Entermedia uses{" "}
          <a
            href="https://commitlint.js.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            commitlint
          </a>{" "}
          to organize and standarize commit messages which helps with:
        </p>
        <ul>
          <li>Automatically generating CHANGELOGs</li>
          <li>
            Automatically determining a semantic version bump (based on the
            types of commits landed).
          </li>
          <li>
            Communicating the nature of changes to teammates, the public, and
            other stakeholders
          </li>
          <li>Triggering build and publish processes</li>
          <li>
            Making it easier for people to contribute to your projects, by
            allowing them to explore a more structured commit history.
          </li>
        </ul>
        <p>Commit messages should follow this format:</p>
        <pre>
          <code className="language-sh">{`type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")`}</code>
        </pre>
        <p>Real world examples can look like this:</p>
        <pre>
          <code className="language-sh">{`"chore: run tests on travis ci"`}</code>
        </pre>
        <pre>
          <code className="language-sh">{`"fix(server): send cors headers"`}</code>
        </pre>
        <pre>
          <code className="language-sh">{`"feat(blog): add comment section"`}</code>
        </pre>
        <p>
          Common types according to{" "}
          <a
            href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum"
            target="_blank"
            rel="noopener noreferrer"
          >
            commitlint-config-conventional (based on the Angular convention)
          </a>{" "}
          can be:
        </p>
        <ul>
          <li>build</li>
          <li>chore</li>
          <li>ci</li>
          <li>docs</li>
          <li>feat</li>
          <li>fix</li>
          <li>perf</li>
          <li>refactor</li>
          <li>revert</li>
          <li>style</li>
          <li>test</li>
        </ul>
        <Headline level={3} id="aria-commitlint-install">
          Installing commitlint
        </Headline>
        <p>
          Install <code>commitlint</code> and{" "}
          <code>commitlint-config-conventional</code>, then configure commitlint
          to use it.
        </p>
        <pre>
          <code className="language-sh">{`# Install
npm install --save-dev commitlint @commitlint/config-conventional

# Configure commitlint to use conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`}</code>
        </pre>
        <Headline level={4}>Install husky</Headline>
        <p>
          Install <code>husky</code> as devDependency, a handy git hook helper
          available on npm.
        </p>
        <pre>
          <code className="language-sh">{`# Install Husky
npm install husky --save-dev

# Active hooks
npx husky install

# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'`}</code>
        </pre>
      </Template>
    </>
  );
}
