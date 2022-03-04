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
require("prismjs/components/prism-javascript");

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>React.js | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1}>React.js</Headline>
        <p>
          The purpose of this document is to help guide you through working with
          a potential project using the JavaScript library,{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
          . Outside of the official React documentation, you should find here
          personalized recommendations for using the library based on the types
          of projects we typically see at Entermedia. We have broken these
          recommendations out into common elements we tend to interact with
          often in client work. If something you’re looking for isn’t
          represented you can either submit a pull request to this repository or
          refer to the{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            official React documentation
          </a>
          .
        </p>
        <Headline level={2} id="libraries" showAnchor>
          Libraries
        </Headline>
        <p>
          The following is a list of primary React libraries used by Entermedia.
        </p>
        <Headline level={3}>html-react-parser</Headline>
        <p>
          <a
            href="https://github.com/remarkablemark/html-react-parser"
            target="_blank"
            rel="noreferrer noopener"
          >
            html-react-parser
          </a>{" "}
          allows parsing HTML code both in Node.js and the browser. Entermedia
          uses this in place of <code>dangerouslySetInnerHTML</code>, which{" "}
          <strong>never be used</strong>.
        </p>
        <Headline level={2} id="aria-further-reading" showAnchor>
          Further Reading
        </Headline>
        <p>
          <a
            href="https://blog.blakez.dev/create-svg-components-with-react-and-typescript/"
            target="_blank"
            rel="noreferrer"
          >
            Create SVG Components with React and TypeScript
          </a>
        </p>
      </Template>
    </>
  );
}
