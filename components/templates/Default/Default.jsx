import Header from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";

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
