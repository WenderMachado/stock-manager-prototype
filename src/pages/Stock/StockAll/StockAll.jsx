import styles from "./styles.module.css"

export default function StockAll(){
  return(
    <>
    <h1>Todos os itens</h1>


        <div className={styles.topGrid}>
          <div>
            <p>ID</p>
          </div>
           <div>
            <p>Nome</p>
          </div>
           <div>
            <p>Em Estoque</p>
          </div>
           <div>
            <p>Categoria</p>
            <div>
              algo
            </div>
          </div>
           <div>
            <p>Ações</p>
            <div className={styles.btnAll}>
              <button className={styles.btnBlue}>Ver</button>
              <button className={styles.btnWhite}>Atalizar</button>
              <button className={styles.btnRed}>Excuir</button>
            </div>
            
          </div>
         
        </div>

    </>


  )
}