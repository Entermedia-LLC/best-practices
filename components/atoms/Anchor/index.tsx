import { ReactNode } from "react";

class PropsType {
  href: string;
  classes?: string[];
  isExternal?: boolean;
  children: ReactNode;
}

const Anchor: React.FC<PropsType> = ({
  href,
  classes = [],
  isExternal,
  children,
}) => {
  return (
    <a
      href={href}
      className={classes.join(" ")}
      rel={isExternal && "noreferrer noopener"}
    >
      {children}
    </a>
  );
};

export default Anchor;
