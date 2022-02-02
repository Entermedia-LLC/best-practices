// organisms/Header/Header.js

import Image from "next/image";
import Link from "next/link";

import imageLoader from "../../../utils/imageLoader";

import classes from "./Header.module.scss";

export const Header = () => {
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
              href="https://github.com/ENTERMEDIA"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="images/github.svg"
                width={18}
                height={18}
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
