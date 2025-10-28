import styles from "./styles.module.css"
export default function Header(){
  return(
    <>
    <header className={styles.items}>
      <span>React Stock</span>
      <nav>
       <a>Inicio</a>
       <a>Items</a>
      </nav>
    </header>
    
    </>
  )
}