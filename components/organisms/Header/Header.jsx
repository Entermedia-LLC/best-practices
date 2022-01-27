// organisms/Header/Header.js

import Image from "next/image";
import Link from "next/link";

import classes from "./Header.module.scss";

const imageLoader = ({ src }) =>
  `https://entermedia-llc.github.io/best-practices/${src}`;

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            width={121}
            height={23}
            alt="Logo"
            loader={imageLoader}
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
