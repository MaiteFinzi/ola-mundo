import  Banner  from "componentes/banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            
            <Outlet />


           
        </main>
    )
}