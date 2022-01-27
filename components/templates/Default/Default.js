// layout/default.js

import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";

import classes from "./Default.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
