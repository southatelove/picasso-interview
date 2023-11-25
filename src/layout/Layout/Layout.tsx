import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Header } from "../../components/Header/Header";
import logo from "../../assets/logo.png";

export function Layout() {
  return (
    <>
      <div className={styles["layout"]}>
        <Header className={styles["header"]}>
          <img src={logo} width={100}></img>
        </Header>
        <Outlet />
      </div>
    </>
  );
}
