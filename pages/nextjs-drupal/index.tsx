// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Import styles
import typographyStyles from "../../styles/helpers/typography.module.scss";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-shell-session";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js for Drupal | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1}>Next.js for Drupal</Headline>
        <p>
          The purpose of this document is to help guide you through working with
          a potential project using the framework,{" "}
          <a
            href="https://next-drupal.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js for Drupal
          </a>
          . Outside of the official documentation, you should find here
          personalized recommendations for using the framework based on the
          types of projects we typically see at Entermedia. We have broken these
          recommendations out into common elements we tend to interact with
          often in client work. If something you’re looking for isn’t
          represented you can either submit a pull request to this repository or
          refer to the official{" "}
          <a
            href="https://next-drupal.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js for Drupal
          </a>{" "}
          documentation.
        </p>
        <Headline level={2} id="aria-project-setup" showAnchor>
          Project Setup
        </Headline>
        <p>
          Entermedia follows a standardized approach for setting up new Next.js
          for Drupal projects. This allows developers to easily switch between
          projects, faster project initialization, and ramp-up for new
          developers. All of these types of projects should start with this same
          setup.
        </p>
        <p>
          <strong>
            To begin, follow the instructions for{" "}
            <a
              href="https://next-drupal.org/docs/quick-start#1-create-site"
              target="_blank"
              rel="noreferrer noopener"
            >
              creating a Next.js site
            </a>{" "}
            in Next.js for Drupal&apos;s docs.
          </strong>
        </p>
        <Headline level={3}>Install commitlint</Headline>
        <p>
          For projects using Git,{" "}
          <Link href="/tools#aria-commitlint-install">install commitlint</Link>.
        </p>
        <Headline level={3}>Install Sass</Headline>
        <p>
          Entermedia uses{" "}
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sass
          </a>{" "}
          to compile CSS. Next.js allows you to import Sass using both the{" "}
          <code>.scss</code> extension. You can use component-level Sass via CSS
          Modules and the <code>.module.scss</code> extension.
        </p>
        <p>
          Before you can use Next.js&apos; built-in Sass support, be sure to
          install{" "}
          <a
            href="https://github.com/sass/sass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>sass</code>
          </a>
          . Follow the instructions found in{" "}
          <a
            href="https://nextjs.org/docs/basic-features/built-in-css-support#sass-support"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js&apos; documentation
          </a>
          .
        </p>
        <Headline level={4}>Enable Sass in styled-jsx</Headline>
        <p>
          Next.js has sass support is built-in, but this doesn&apos;t extend to
          the styling inside styled-jsx tags. To extend this, you&apos;ll need
          to install{" "}
          <a
            href="https://www.npmjs.com/package/@styled-jsx/plugin-sass"
            target="_blank"
            rel="noreferrer noopener"
          >
            @styled-jsx/plugin-sass
          </a>{" "}
          and{" "}
          <a
            href="https://www.npmjs.com/package/sass"
            target="_blank"
            rel="noreferrer noopener"
          >
            dart-sass
          </a>{" "}
          dependencies:
        </p>
        <pre>
          <code className="language-sh">{`yarn install --save-dev @styled-jsx/plugin-sass sass`}</code>
        </pre>
        Then create a <code>.babelrc.json</code> file in the project folder
        with:
        <pre>
          <code className="language-json">{`{
  "presets": [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["@styled-jsx/plugin-sass"]
        }
      }
    ]
  ]
}`}</code>
        </pre>
        <Headline level={3}>Install Normalize.css</Headline>
        <p>
          It&apos;s important that projects have the same starting point for
          browsers when rendering elements. Entermedia uses{" "}
          <a
            href="https://necolas.github.io/normalize.css/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Normalize.css
          </a>{" "}
          to do this to make elements render more consistently and in line with
          modern standards.
        </p>
        <Headline level={3}>Install Storybook</Headline>
        <p>
          Entermedia uses{" "}
          <a href="" target="_blank" rel="noreferrer noopener">
            Storybook
          </a>{" "}
          for building UI components and pages in isolation, allowing for
          streamline UI development, testing, and documentation.
        </p>
        <p>
          Follow{" "}
          <a
            href="https://storybook.js.org/blog/get-started-with-storybook-and-next-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            these instructions
          </a>{" "}
          to get Storybook up and running in the Next.js project.
        </p>
        <p>
          Once Storybook is installed, add the{" "}
          <a
            href="https://storybook.js.org/addons/storybook-addon-next#csssassscss-modules"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js addon
          </a>
          .
        </p>
        <p>
          <strong>Having a problem running Storybook?</strong> There&apos;s are
          a few known issues when running <code>yarn storybook</code>:
        </p>
        <p className={typographyStyles["error-title"]}>Error:</p>
        <pre>
          <code className="language-sh">{`Error: Cannot find module 'webpack/lib/util/makeSerializable.js'`}</code>
        </pre>
        <p className={typographyStyles["fix-title"]}>Fix:</p>
        <p className={typographyStyles["no-margin"]}>
          If you run into this, you&apos;ll need to install webpack 5 as a dev
          dependency:
        </p>
        <pre>
          <code className="language-sh">{`npm install webpack@5.68.0 --save-dev`}</code>
        </pre>
        <p className={typographyStyles["error-title"]}>Error:</p>
        <pre>
          <code className="language-sh">{`ModuleNotFoundError: Module not found: Error: Can't resolve '@storybook/addon-docs'...`}</code>
        </pre>
        <p className={typographyStyles["fix-title"]}>Fix:</p>
        <p className={typographyStyles["no-margin"]}>
          If you run into this, you&apos;ll need to install the
          @storybook/addon-docs package as a dev dependency:
        </p>
        <pre>
          <code className="language-sh">{`npm install @storybook/addon-docs --save-dev`}</code>
        </pre>
        <p className={typographyStyles["error-title"]}>Error:</p>
        <pre>
          <code className="language-sh">{`ModuleNotFoundError: Module not found: Error: Can't resolve 'style-loader'...`}</code>
        </pre>
        <p className={typographyStyles["fix-title"]}>Fix:</p>
        <p className={typographyStyles["no-margin"]}>
          To fix, esnure the <code>storybook-addon-next</code> module is
          installed as a <code>devDependencies</code>:
        </p>
        <pre>
          <code className="language-sh">{`"devDependencies": {
    "storybook-addon-next": "^1.4.4",
  }`}</code>
        </pre>
        <p className={typographyStyles["error-title"]}>Error:</p>
        <pre>
          <code className="language-sh">{`Though the "loose" option was set to "false" in your @babel/preset-env config...`}</code>
        </pre>
        <p className={typographyStyles["fix-title"]}>Fix:</p>
        <p className={typographyStyles["no-margin"]}>
          Update the <code>.babelrc.json</code> config with the following:
        </p>
        <pre>
          <code className="language-json">{`"plugins": [
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  ]`}</code>
        </pre>
        <Headline level={4}>
          Update Storybook Config &amp; Remove Example Stories
        </Headline>
        <p>
          Once Storybook has been installed, update the{" "}
          <code>.storybook/main.js</code> config to look for stories in the
          components directory:
        </p>
        <pre>
          <code className="language-json">{`stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],`}</code>
        </pre>
        <p>
          Include the global styles &amp; set the default sorting order in
          Storybook&apos;s <code>preview.js</code> config:
        </p>
        <pre>
          <code className="language-javascript">{`// Import global styles
import "normalize.css";
import "../styles/theme/default.scss";
import "../styles/base.scss";`}</code>
        </pre>
        <pre>
          <code className="language-javascript">{`export const parameters = {
  options: {
    storySort: {
      order: [
        "Design System",
        [
          "Atoms",
          "Molecules",
          "Organisms",
          ["Header", "Footer"],
          "Templates",
          "Pages",
          "SVGs",
        ],
      ],
    },
  },
};`}</code>
        </pre>
        <Headline level={4}>Useful Storybook Links</Headline>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=i5tvZ9f7gJw"
              target="_blank"
              rel="noopener noreferrer"
            >
              5 Tips for Integrating Next.js with Storybook
            </a>
          </li>
        </ul>
        <Headline level={3}>Install Leasoft</Headline>
        <p>
          Entermedia uses{" "}
          <a
            href="https://github.com/pgilad/leasot"
            target="_blank"
            rel="noreferrer noopener"
          >
            Leasot
          </a>{" "}
          to intelligently parse and output TODOs and FIXMEs from comments in
          your files. Once installed, add a new npm command in the package.json
          file:
        </p>
        <pre>
          <code className="language-json">{`"todo": "leasot 'components/**/*.tsx' 'pages/**/*.tsx' 'components/**/*.scss' 'styles/**/*.scss' 'lib/**/*/ts'"`}</code>
        </pre>
        <Headline level={3}>Project Structure</Headline>
        <p>
          Next.js for Drupal&apos;s default project setup will need to be
          initially cleaned up to follow Entermedia&apos;s perferred project
          structure and to remove unused dependencies.
        </p>
        <ul>
          <li>
            <strong>/styles</strong> - See the{" "}
            <Link href="/js/nextjs#project-structure">
              styles structure for Next.js projects
            </Link>
          </li>
        </ul>
        <Headline level={3}>File Updates</Headline>
        <p>
          Once the project has been updated to follow the structure above and
          needed dependencies installed, some of the starter files will need to
          be updated.
        </p>
        <ul>
          <li>
            <strong>/pages/_app.tsx</strong>
            <pre>
              <code className="language-javascript">{`// Import Next dependencies
import { AppProps } from "next/app";

// Import component dependencies
import { DefaultTemplate } from "@/components/templates/DefaultTemplate/DefaultTemplate";

// Import global styles
import "normalize.css";
import "../styles/theme/default.scss";
import "../styles/base.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
  );
}
`}</code>
            </pre>
          </li>
        </ul>
      </Template>
    </>
  );
}
