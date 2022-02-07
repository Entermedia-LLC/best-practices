// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";

// Component imports
import Template from "../../components/templates/Default/Default";
import Heading from "../../components/atoms/Headline/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
require("prismjs/components/prism-markup");

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js | Entermedia Best Practices</title>
      </Head>

      <Template>
        <section>
          <Heading section="1">Next.js</Heading>
          <p>
            The purpose of this document is to help guide you through working
            with a potential project using the JavaScript library,{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>
            . Outside of the official Next.js documentation, you should find
            here personalized recommendations for using the library based on the
            types of projects we typically see at Entermedia. We have broken
            these recommendations out into common elements we tend to interact
            with often in client work. If something you’re looking for isn’t
            represented you can either submit a pull request to this repository
            or refer to the{" "}
            <a
              href="https://nextjs.org/docs/getting-started"
              target="_blank"
              rel="noreferrer"
            >
              official Next.js documentation
            </a>
            .
          </p>
          <Heading section="2" id="project-structure" showLink>
            Project Structure
          </Heading>
          <p>
            Next.js is fairly loose in how you can organize your files and
            directories; if you establish a good structure from the start-up,
            your subsequent work will be easier, faster, predictable, and
            scalable
          </p>
          <p>
            As far as the required files and directories you must create to
            start a new project, Next.JS is not very strict (as opposed to, say
            Ember).
          </p>
          <pre>
            <code className="language-markup">{`|- components/ _______________________________ # See below for details
|- constants/ ________________________________ # Application constants
|    |- app.js _______________________________ # Application specific constants
|- pages/ ____________________________________ # File-based page routeing
|    |- _app.jsx _____________________________ # Global CSS
|    |- _document.jsx ________________________ # Common <head> code for all pages
|- public/ ___________________________________ # Static files
|    |- images/ ______________________________ # Application images
|    |- .nojekyll ____________________________ # Used for Git Pages applications when exporting
|    |- favicon.ico __________________________ # Application favicon
|- styles/ ___________________________________ # See below for details
|- utils/ ____________________________________ # Utility functions
|    |- imageLoader.js _______________________ # Custom image loader
|- .eslintrc.json ____________________________ # ESLint config settings
|- .gitignore ________________________________ # Git ignore
|- .next/
|- next.config.js ____________________________ # Next application configuration
|- package.json ______________________________ # npm package file
|- package-lock.json _________________________ # npm package lock file
|- README.md _________________________________ # Readme file`}</code>
          </pre>
          <p>
            The <code>components</code> folder is described separately, below to
            improve readability. Entermedia follows the{" "}
            <a
              href="https://bradfrost.com/blog/post/atomic-web-design/"
              target="_blank"
              rel="noreferrer"
            >
              Atomic Design
            </a>{" "}
            approach which mirrors the component folder structure:
          </p>
          <pre>
            <code className="language-markup">{`|- components/
  |    |- atoms/ _______________________________ # Atom components (base HTML elements)
  |       |- Headline/
  |          |- Headline.jsx ___________________ # Headline component
  |          |- Headline.stories.jsx ___________ # Headline story definition
  |          |- Headline.module.scss ___________ # Headline CSS scoped module
  |    |- molecules/ ___________________________ # Module components (groups of atoms)
  |       |- Grid/
  |          |- Grid.jsx _______________________ # Grid component
  |          |- Grid.stories.jsx _______________ # Grid story definition
  |          |- Grid.module.scss _______________ # Grid CSS scoped module
  |    |- organisms/ ___________________________ # Organism components (groups of molecules)
  |       |- Header/
  |          |- Header.jsx _____________________ # Header component
  |          |- Header.stories.jsx _____________ # Header story definition
  |          |- Header.module.scss _____________ # Header CSS scoped module
  |    |- templates/ ___________________________ # Template components (groups of organisms)
  |       |- Default/
  |          |- Default.jsx ____________________ # Default template component
  |          |- Default.stories.jsx ____________ # Default template story definition
  |          |- Default.module.scss ____________ # Default template CSS scoped module`}</code>
          </pre>
          <p>
            The <code>styles</code> folder is described separately, below to
            improve readability:
          </p>
          <pre>
            <code className="language-markup">{`|- styles/ ___________________________________ # Non-component specific styles
|    |- global/ ______________________________ # Sass variables, mixins & functions
|       |- _core.scss ________________________ # Includes all required core files
|       |- _mixins.scss ______________________ # Sass mixins
|       |- _variables.scss ___________________ # Sass variables
|    |- helpers/ _____________________________ # Helper classes
|       |- layout.module.scss ________________ # Layout helpers classes
|    |- theme/ _______________________________ # Theme styles
|       |- default.scss ________________ # Default CSS theme variables`}</code>
          </pre>
        </section>
      </Template>
    </>
  );
}
