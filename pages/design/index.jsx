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
import Link from "next/link";
require("prismjs/components/prism-markup");
require("prismjs/components/prism-json");

export default function Design() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Project Design | Entermedia Best Practices</title>
      </Head>

      <Template>
        <section>
          <Headline level={1} id="design">
            Project Design
          </Headline>
          <Headline level={2} id="organization" showAnchor>
            Project File Organization
          </Headline>
          <p>
            File structure unity across themes and plugins improves engineering
            efficiency and maintainability. We believe the following structure
            is segmented enough to keep projects organized—and thus
            maintainable—but also flexible and open ended enough to enable
            engineers to comfortably modify as necessary. All themes and plugins
            should derive from this structure:
          </p>
          <pre>
            <code className="language-markup">{`|- assets/
  |  |- styles/ _______________________________ # See below for details
  |  |- fonts/ _____________________________ # Custom/hosted fonts
  |  |- images/ ____________________________ # Theme images
  |  |- js/ ________________________________ # See below for details
  |  |- svg/ _______________________________ # Vector images that will be processed into icons
  |- .editorconfig _________________________ # Editor config settings`}</code>
          </pre>
          <p>
            The <code>styles</code> folder is described separately, below to
            improve readability (see{" "}
            <Link href="/css#aria-base-styles">
              CSS Structure &amp; Base Styles
            </Link>{" "}
            for defaults):
          </p>
          <pre>
            <code className="language-markup">{`|- styles/ ___________________________________ # Non-component specific styles
|    |- base.scss ____________________________ # Base HTML element styles
|    |- global/ ______________________________ # Sass variables, mixins & functions
|       |- _core.scss ________________________ # Includes all required core files
|       |- _mixins.scss ______________________ # Sass mixins
|       |- _variables.scss ___________________ # Sass variables
|    |- helpers/ _____________________________ # Helper classes
|       |- layout.module.scss ________________ # Layout helpers classes
|    |- theme/ _______________________________ # Theme styles
|       |- default.scss ______________________ # Default CSS theme variables`}</code>
          </pre>
          <Headline level={2} id="package-management" showAnchor>
            Dependencies and Package Management
          </Headline>
          <p>
            Projects generally use two different types of dependency management:
          </p>
          <ul>
            <li>
              <a href="https://npmjs.org" target="_blank" rel="noreferrer">
                npm
              </a>{" "}
              is used to manage relevant dependencies.
            </li>
            <li>
              <a
                href="https://getcomposer.org"
                target="_blank"
                rel="noreferrer"
              >
                Composer
              </a>{" "}
              is used primarily for back-end (i.e. admin or PHP-based)
              dependencies
            </li>
          </ul>
          <Headline level={3}>When and How to Use Packages</Headline>
          <p>
            When choosing a third-party library for inclusion in your project,
            see if it’s available on npm (JavaScript) or Packagist (PHP).
            Additionally, WordPress plugins and themes are often available on{" "}
            <a href="https://wpackagist.org/" target="_blank" rel="noreferrer">
              wpackagist.org
            </a>
            . Retrieving dependencies from a package repo helps slim down the
            code in our version control repos, meaning there’s less we need to
            retrieve when a new engineer starts on a project. It also
            contributes to easily keeping code up to date with security and
            performance improvements.
          </p>
          <p>
            Most package managers differentiate between dependencies and
            devDependencies:
          </p>
          <ul>
            <li>
              devDependencies are code, often build tools like Webpack or Gulp,
              needed to get a site to a production-ready state.
            </li>
            <li>
              Dependencies are code actually used in the functioning of the
              site, like Lodash or Normalize.css.
            </li>
          </ul>
          <p>
            Existing projects that weren’t built with package managers in mind
            offer an opportunity for engineering teams to implement them for all
            new development. Teams should also estimate and plan around the time
            needed to retrofit the existing codebase.
          </p>
          <p>
            If you are using a package where the naming and usage isn’t obvious
            to the average engineer, be sure to document its purpose in the
            README, style guide, or project documentation.
          </p>
          <Headline level={3}>Selecting Packages</Headline>
          <p>
            Packages are often a Matryoshka of their own dependencies. Though
            this code is almost certainly all open source, it’s not practical to
            apply the same scrutiny to packages’ code as is expected before
            selecting WordPress themes and plugins. Effective package selection,
            therefore, relies on other factors that engineers can quickly
            evaluate:
          </p>
          <ul>
            <li>Is the package actively developed and supported?</li>
            <li>Does the package have a solid reputation in the community?</li>
            <li>
              How frequently have security issues been reported, and how quickly
              have they historically been addressed?
            </li>
            <li>Does the package require a small number of dependencies?</li>
            <li>
              How easily could the packages’ code be forked in case it’s
              abandoned or a critical issue needs to be addressed right away?
              When evaluating this, consider the package’s open source license
              along with the ease of modifying the code.
            </li>
          </ul>
          <Headline level={3}>Package Versions and Lock</Headline>
          <p>
            When installing a package, engineers can specify a version string
            the package manager uses to select an appropriate package version.
            Never specify an exact x.y.z version or else security, performance,
            and functionality upgrades won’t be available. Most third-party
            packages follow the Semantic Versioning (semver.org) system, where
            packages’ version numbers are defined in terms of major, minor, and
            patch levels. Changes to semver-compliant packages are expected to
            trigger a new major version when breaking backward compatibility.
          </p>
          <p>
            Instead of a full x.y.z version, Specify major &amp; minor versions
            x.y to minimize the risk of breaking changes being introduced into
            your project. Start version number strings with a caret (^) for most
            dependencies, for example ^1.2
          </p>
          <p>
            For dependencies that don’t use semver, like many WordPress themes
            and plugins, engineers should still specify major and minor versions
            x.y. Start version numbers with a tilde (~) for most dependencies.
          </p>
          <p>
            Modern package managers create lock files, such as npm’s
            “package-lock.json” and Composer’s “composer.lock”. These files
            record the package versions each package manager chose to satisfy
            the version number constraints on the current version of the
            platform. Lock files should be committed to project version control
            repos so all engineers can be on the same page.
          </p>
          <Headline level={3}>Composer Based Project Structure</Headline>
          <p>Here’s how we might structure a project with Composer:</p>
          <pre>
            <code className="language-markup">{`|- composer.json ____________________________ # Define third party dependencies
  |- wp-config.php ____________________________ # WordPress configuration
  |- wp/ ______________________________________ # Composer install WordPress here
  |- wp-content/ ______________________________ # Composer dependencies
  |  |- themes/ _______________________________ # Themes directory
  |    |- custom-theme/ _______________________ # Custom theme
  |  |- plugins/ ______________________________ # Plugins directory
  |    |- custom-plugin/ ______________________ # Custom plugin`}</code>
          </pre>
          <p>
            Here’s what <code>composer.json</code> might look like with some
            example plugins:
          </p>
          <pre>
            <code className="language-json">{`{
    "name": "entermedia/project-slug",
    "description": "Project description",
    "repositories":[
      {
        "type":"composer",
        "url":"https://wpackagist.org"
      }
    ],
    "extra": {
      "wordpress-install-dir": "wp"
    },
    "require": {
      "johnpbloch/wordpress": "4.9",
      "wpackagist-plugin/wordpress-importer": "dev-trunk",
      "wpackagist-plugin/debug-bar": "dev-trunk",
      "wpackagist-plugin/debug-bar-extender": "dev-trunk",
    }
  }
  `}</code>
          </pre>
        </section>
      </Template>
    </>
  );
}
