import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrado from "pages/NaoEncontrado";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path="favoritos" element={<Favoritos />}></Route>
                            <Route path=":id" element={<Player />}></Route>
                            <Route path="*" element={<NaoEncontrado />}></Route>
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;