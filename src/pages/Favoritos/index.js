import Banner from "components/Banner";
import styles from "./Favoritos.module.css"
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";

const Favoritos = () => {
    const {favorito} = useFavoritoContext()
    return(
        <>
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;