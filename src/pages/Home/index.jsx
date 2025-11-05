import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function HomeDashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <section className={styles.topGrid}>
        <div className={styles.card}>
          <p>Diversidade de itens</p>
          <p className={styles.number}>2</p>
        </div>
        <div className={styles.card}>
          <p>Inventário total</p>
          <p className={styles.number}>40</p>
        </div>
        <div className={styles.card}>
          <p>Itens recentes</p>
          <p className={styles.number}>2</p>
        </div>
        <div className={styles.card}>
          <p>Itens acabando</p>
          <p className={styles.number}>1</p>
        </div>
      </section>

 
      <section className={styles.bottomGrid}>
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <p>Itens Recentes</p>
            <p>Ações</p>
          </div>

          <div className={styles.tableRow}>
            <p>7 Wonders</p>
            <Link to="/stockItems" className={styles.btn}>Ver</Link>
          </div>

          <div className={styles.tableRow}>
            <p>O Senhor dos Anéis</p>
            <Link to="/stockItems" className={styles.btn}>Ver</Link>
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <p>Itens acabando</p>
            <p>Qtd.</p>
            <p>Ações</p>
          </div>

          <div className={styles.tableRow}>
            <p>7 Wonders</p>
            <p>8</p>
            <Link to="/stockItems"className={styles.btn}>Ver</Link>
          </div>
        </div>
      </section>
    </>
  )
}