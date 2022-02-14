import React from "react";

import Image from "next/image";
import Link from "next/link";

import imageLoader from "../../../lib/image-loader";

import classes from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Image
            src="images/logo.svg"
            width={121}
            height={23}
            alt="Logo"
            loader={imageLoader}
          />
        </a>
      </Link>
      <div className={classes.links}>
        <ul>
          <li>
            <a
              href="https://www.entermedia.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/website.svg"
                width={16}
                height={16}
                alt="Website"
                loader={imageLoader}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/entermedia"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/twitter.svg"
                width={16}
                height={16}
                alt="Twitter"
                loader={imageLoader}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/entermedia.llc/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/facebook.svg"
                width={16}
                height={16}
                alt="Facebook"
                loader={imageLoader}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/entermedia-llc/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/linkedin.svg"
                width={16}
                height={16}
                alt="LinkedIn"
                loader={imageLoader}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ENTERMEDIA"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/github.svg"
                width={16}
                height={16}
                alt="Github"
                loader={imageLoader}
              />
            </a>
          </li>
        </ul>

        <a
          href="https://github.com/Entermedia-LLC/best-practices"
          target="_blank"
          rel="noreferrer"
          className={classes.button}
        >
          Contribute on Github
        </a>
      </div>
    </header>
  );
};

export default Header;
