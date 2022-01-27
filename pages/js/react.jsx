import { useEffect } from "react";

import Head from "next/head";
import Link from "next/link";

import Heading from "../../components/atoms/Headline/Headline";

import prismjs from "prismjs";

import "prismjs/themes/prism-coy.css";
require("prismjs/components/prism-scss");

import classes from "../../styles/layout.module.scss";

export default function CSS() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Heading section="1">React.js</Heading>
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
      </section>
    </>
  );
}
