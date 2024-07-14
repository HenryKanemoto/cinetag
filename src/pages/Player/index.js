import Banner from "components/Banner"
import styles from "./Player.module.css"
import { useParams } from "react-router-dom"
import Titulo from "components/Titulo"
import NaoEncontrado from "pages/NaoEncontrado"
import { useEffect, useState } from "react"

const Player = () => {
    const [video, setVideo] = useState({})
    const parametros = useParams()
    useEffect(() => {
        console.log(parametros.id);
        fetch(`https://my-json-server.typicode.com/HenryKanemoto/cinetag-api/videos/${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(dados)
        })
    }, [])

    if(!video){
        return <NaoEncontrado />
    }

    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player