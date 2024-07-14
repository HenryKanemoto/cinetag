const { default: Cabecalho } = require("components/Cabecalho")
const { default: Container } = require("components/Container")
const { default: Rodape } = require("components/Rodape")
const { FavoritosProvider } = require("contextos/Favoritos")
const { Outlet } = require("react-router-dom")

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase