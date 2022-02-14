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

import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";

// CSS module imports
import classes from "../../styles/helpers/layout.module.scss";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>PHP | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1} id="php">
          PHP
        </Headline>
        <Headline level={2} id="performance">
          Performance
        </Headline>
        <p>
          Writing performant code is absolutely critical, especially at the
          enterprise level. There are a number of strategies and best practices
          we must employ to ensure our code is optimized for high-traffic
          situations.
        </p>
        <Headline level={3}>Efficient Queries</Headline>
        <Headline level={4}>
          Build arrays that encourage lookup by key instead of search by value
        </Headline>
        <p>
          <a
            href="https://secure.php.net/manual/en/function.in-array.php"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>in_array()</code>
          </a>{" "}
          is not an efficient way to find if a given value is present in an
          array. The worst case scenario is that the whole array needs to be
          traversed, thus making it a function with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions"
            target="_blank"
            rel="noreferrer noopener"
          >
            O(n)
          </a>{" "}
          complexity. VIP review reports <code>in_array()</code> use as an
          error, as it’s known not to scale.
        </p>
        <p>
          The best way to check if a value is present in an array is by building
          arrays that encourage lookup by key and use{" "}
          <a
            href="https://secure.php.net/manual/en/function.isset.php"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>isset()</code>
          </a>
          .<code>isset()</code> uses an{" "}
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions"
            target="_blank"
            rel="noreferrer noopener"
          >
            O(1)
          </a>{" "}
          hash search on the key and will scale.
        </p>
        <p>
          Here is an example of an array that encourages lookup by key by using
          the intended values as keys of an associative array
        </p>
        <pre>
          <code className="language-php">{`<?php
$array = array(
 'foo' => true,
 'bar' => true,
);
if ( isset( $array['bar'] ) ) {
  // value is present in the array
};`}</code>
        </pre>
        <p>
          In case you don’t have control over the array creation process and are
          forced to use <code>in_array()</code>, to improve the performance
          slightly, you should always set the third parameter to{" "}
          <code>true</code> to force use of strict comparison.
        </p>
        <Headline level={3}>Caching</Headline>
        <p>
          Caching is simply the act of storing computed data somewhere for later
          use, and is an incredibly important concept in WordPress and Drupal.
          There are different ways to employ caching, and often multiple methods
          will be used.
        </p>
      </Template>
    </>
  );
}
