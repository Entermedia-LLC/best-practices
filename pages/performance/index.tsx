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
require("prismjs/components/prism-javascript");

// CSS module imports
import classes from "../../styles/helpers/layout.module.scss";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Performance | Entermedia Best Practices</title>
      </Head>

      <Template>
        <section>
          <Headline level={1} id="philosophy">
            Performance
          </Headline>
          <Headline level={2} id="philosophy">
            Philosophy
          </Headline>
          <p>
            At Entermedia, we understand the importance of performance in
            delivering a great user experience and ensuring that content is
            optimized for search engine rankings. As the web and application
            development has evolved, feature rich content can be problematic and
            slow to load, particularly on mobile devices. It is more important
            than ever to pay careful consideration towards performance when
            designing and engineering solutions.
          </p>
          <p>
            There are multiple factors to take into account when considering
            performance on a project. Third party embeds or scripts can often
            have a negative impact on performance, but in some cases the
            inherent value that they bring may justify the performance impact
            incurred.
          </p>
          <p>
            <strong>
              While performance is always important, actual needs vary by
              website. For example, an internal company tool might not place as
              much importance on it as an online store. As such, Entermedia has
              developed these baseline performance best practices to be
              implemented on all our projects. On some projects more will be
              done for performance, but we strive to achieve this baseline no
              matter what. Also worth mentioning is we don’t have any sort of
              standard “numbers” e.g. core web vitals, PSI score, or TTFB. This
              is because there is no one number that can apply to all websites.
            </strong>
          </p>
          <Headline level={2} id="base-line" showAnchor>
            Baseline Performance Best Practices
          </Headline>
          <Headline level={3}>Caching</Headline>
          <p>
            Caching is a key aspect in reaching optimal performance both from a
            server and browser optimization perspective, below are caching
            approaches:
          </p>
          <ul>
            <li>
              Ensure all static assets have cache busters in the form of either
              a version or fingerprint in the filename or unique query string in
              the URL. This needs to be implemented along with a cache-control
              header max-age of at least 1 month but optimally 1 year.
            </li>
            <li>
              A CDN is highly recommended, most popular CDN’s may offer page
              caching, browser caching and image optimizations.
            </li>
            <li>
              <Link href="php/#page-caching">Page caching</Link> should be set
              up, a lot of common hosting companies including WP Engine and
              WordPress VIP offer full page caching.
            </li>
            <li>
              <a href="https://10up.github.io/Engineering-Best-Practices/php/#the-object-cache">
                Object caching
              </a>{" "}
              should be leveraged where applicable on the server.
            </li>
            <li>
              All projects should have a{" "}
              <a href="https://web.dev/add-manifest/">manifest file</a> to
              download static assets that will be rarely updated. The{" "}
              <a href="https://github.com/10up/wp-scaffold/blob/trunk/themes/10up-theme/manifest.json">
                manifest.json is included in 10ups WP Scaffold
              </a>{" "}
              and will require custom configuration.
            </li>
          </ul>
        </section>
      </Template>
    </>
  );
}
