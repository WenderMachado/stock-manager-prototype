import styles from "./styles.module.css"
import { Link } from "react-router-dom"
export default function Header(){
  return(
    <>
    <header className={styles.items}>
      <span>React Stock</span>
      <nav>
       <Link to="/">Inicio</Link>
       <Link to="/stockItems">Items</Link>
      </nav>
    </header>
    
    </>
  )
}