import _ from "lodash";
import Link from "next/link";

import content from "../../../store/content.jsx";

import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  // Next.
  const navMenu = (items, isChild) => {
    const navItem = (item, index) => {
      return (
        <li key={index}>
          <Link href={item.path}>
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
