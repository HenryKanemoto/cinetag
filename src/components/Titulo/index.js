import styles from "./Titulo.module.css"

const Titulo = ({children}) => {
    return(
        <div className={styles.texto}>
            {children} {/*não utilizamos h1 ou h2 pois este componente pode ser reutillizado para tos os h(1,2,3,4,5,6)*/}
        </div>
    )
}

export default Titulo