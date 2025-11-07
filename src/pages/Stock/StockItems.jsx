import {  NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.css";
export default function StockItems() {
  return (
    <>
      <h1>Stock Items</h1>
      <nav className={styles.nav}>
        <NavLink
          to="all"
          className={({ isActive }) =>
            isActive ? styles.active : ""
          }
          end
        >
          Todos os Itens
        </NavLink>

        <NavLink
          to="new"
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Novos Itens
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}