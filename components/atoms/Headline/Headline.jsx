import Image from "next/image";

import classes from "./Headline.module.scss";

import imageLoader from "../../../utils/imageLoader";

const Headline = ({ section, id, showLink, children }) => {
  const SectionTag = `h${section}`;

  const slug = id ? id : "";

  const displayLink = () => {
    return (
      <a href={`#${slug}`} className={classes.headline_link}>
        <span className={classes.headline_link_text}>{slug}</span>
        <span className={classes.headline_link_icon}>
          <Image
            src="/images/icon-link.svg"
            width={14}
            height={14}
            alt={`Link to ${slug}`}
            loader={imageLoader}
          />
        </span>
      </a>
    );
  };

  return (
    <>
      <SectionTag className={classes.headline} id={slug}>
        {children}
        {showLink && slug && displayLink()}
      </SectionTag>
    </>
  );
};

export default Headline;
