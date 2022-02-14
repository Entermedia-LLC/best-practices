import Link from "next/link";

import content from "../../../store/content";

import classes from "./sidebar.module.scss";

type NavItem = {
  id: string;
  title: string;
  path: string;
  children?: NavItem[];
};

const Sidebar: React.FC = () => {
  // Next.
  const navMenu = (items: NavItem[], isChild?: boolean) => {
    const navItem = (item: NavItem, index: number) => {
      return (
        <li key={index}>
          <Link href={`${item.path}#${item.id}`}>
            <a className={classes.sidebar_link}>{item.title}</a>
          </Link>
          {item.children && navMenu(item.children, true)}
        </li>
      );
    };

    const listItems = items.map((item, index) => navItem(item, index));
    const listClasses = [classes.sidebar_list];

    if (isChild) listClasses.push(classes.sidebar_list__child);

    return <ul className={listClasses.join(" ")}>{listItems}</ul>;
  };

  return (
    <aside className={classes.sidebar}>
      <nav>{navMenu(content)}</nav>
    </aside>
  );
};

export default Sidebar;
