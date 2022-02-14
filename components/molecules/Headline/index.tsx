import { ReactNode, useState } from "react";

import Image from "next/image";

import imageLoader from "../../../lib/image-loader";

import Anchor from "../../atoms/Anchor";
import Heading from "../../atoms/Heading";

import styles from "./headline.module.scss";

class PropsType {
  id?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  classes?: string[];
  showAnchor?: boolean;
  children: ReactNode;
}

const Headline: React.FC<PropsType> = ({
  id,
  level,
  classes = [],
  showAnchor,
  children,
}) => {
  const [isHover, setIsHover] = useState(false);

  const anchorClasses = [styles.anchor];

  if (isHover) {
    anchorClasses.push(styles["anchor--hover"]);
  }

  const anchor = (
    <Anchor href={`#${id}`} classes={anchorClasses}>
      <Image
        src="/images/icon-link.svg"
        width={14}
        height={14}
        alt="Link icon"
        loader={imageLoader}
      />
    </Anchor>
  );

  return (
    <Heading
      level={level}
      id={id}
      classes={classes}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {showAnchor && anchor}
    </Heading>
  );
};

export default Headline;
