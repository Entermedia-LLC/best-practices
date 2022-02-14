import React, { ReactNode } from "react";

class PropsType {
  id?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  classes: string[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading: React.FC<PropsType> = ({
  id,
  level,
  classes = [],
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const Tag: HeadingTag = `h${level}`;

  return (
    <Tag
      className={classes?.join(" ")}
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tag>
  );
};

export default Heading;
