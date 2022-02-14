// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

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
        <Headline level={1}>Next.js</Headline>
        <p>
          The purpose of this document is to help guide you through working with
          a potential project using the JavaScript library,{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>
          . Outside of the official Next.js documentation, you should find here
          personalized recommendations for using the library based on the types
          of projects we typically see at Entermedia. We have broken these
          recommendations out into common elements we tend to interact with
          often in client work. If something you’re looking for isn’t
          represented you can either submit a pull request to this repository or
          refer to the{" "}
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            rel="noreferrer"
          >
            official Next.js documentation
          </a>
          .
        </p>
        <Headline level={2} id="project-structure" showAnchor>
          Project Structure
        </Headline>
        <p>
          Next.js is fairly loose in how you can organize your files and
          directories; if you establish a good structure from the start-up, your
          subsequent work will be easier, faster, predictable, and scalable
        </p>
        <p>
          As far as the required files and directories you must create to start
          a new project, Next.JS is not very strict (as opposed to, say Ember).
        </p>
        <pre>
          <code className="language-markup">{`|- components/ _______________________________ # See below for details
|- constants/ ________________________________ # Application constants
|    |- app.js _______________________________ # Application specific constants
|- pages/ ____________________________________ # File-based page routeing
|    |- _app.tsx _____________________________ # Global CSS
|    |- _document.tsx ________________________ # Common <head> code for all pages
|    |- [...slug].tsx ________________________ # Dynamic page by slug
|    |- index.tsx ____________________________ # Homepage
|    |- api/ _________________________________ # API endpoints
|       |- exit-preview.tsx __________________ # Drupal: exit preview
|       |- preview.tsx _______________________ # Drupal: preview
|- public/ ___________________________________ # Static files
|    |- images/ ______________________________ # Application images
|    |- .nojekyll ____________________________ # Used for Git Pages applications when exporting
|    |- favicon.ico __________________________ # Application favicon
|    |- robots.txt ___________________________ # Robots text file
|- styles/ ___________________________________ # See below for details
|- lib/ ______________________________________ # Utility functions
|    |- format-date.ts _______________________ # Formats a date
|    |- image-loader.js ______________________ # Custom image loader
|- .env.local ________________________________ # Local environment variables
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
  |          |- Headline.tsx ___________________ # Headline component
  |          |- Headline.stories.jsx ___________ # Headline story definition
  |          |- Headline.module.scss ___________ # Headline CSS scoped module
  |    |- molecules/ ___________________________ # Module components (groups of atoms)
  |       |- Grid/
  |          |- Grid.tsx _______________________ # Grid component
  |          |- Grid.stories.tsx _______________ # Grid story definition
  |          |- Grid.module.scss _______________ # Grid CSS scoped module
  |    |- organisms/ ___________________________ # Organism components (groups of molecules)
  |       |- Header/
  |          |- Header.tsx _____________________ # Header component
  |          |- Header.stories.tsx _____________ # Header story definition
  |          |- Header.module.scss _____________ # Header CSS scoped module
  |    |- templates/ ___________________________ # Template components (groups of organisms)
  |       |- Default/
  |          |- Default.jsx ____________________ # Default template component
  |          |- Default.stories.jsx ____________ # Default template story definition
  |          |- Default.module.scss ____________ # Default template CSS scoped module`}</code>
        </pre>
        <p>
          The <code>styles</code> folder is described in{" "}
          <Link href="/design#organization">Project File Organization</Link>.
        </p>
      </Template>
    </>
  );
}
