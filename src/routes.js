import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/menu";
import PaginaPadrao from "./componentes/paginaPadrao";
import Rodape from './componentes/rodape';
import Post from "paginas/post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/scrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
       <ScrollToTop />
     <Menu />

    <Routes>
    <Route path='/' element={<PaginaPadrao />} />
        <Route index element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="posts/:id/*" element={<Post />} >
    </Route>

      <Route path="*" element={<NaoEncontrada />} />
     </Routes>

     <Rodape />
     
    </BrowserRouter>
  );
}

export default AppRoutes;
