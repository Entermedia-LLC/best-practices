import Header from "../../organisms/Header";
import Sidebar from "../../organisms/Sidebar";

import classes from "./Default.module.scss";

export default function Default({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </>
  );
}
