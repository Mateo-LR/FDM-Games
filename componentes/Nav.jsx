import "../styles/Nav.css"
import Logo from "../assets/Logo-fdm.png"
import {Link} from "wouter"

export default function Nav(){
    return(
        <>
            <nav className="navbar">
                <Link href="/" className="logo">
                    <img src={Logo} alt="Logo de FDM Games" />
                    <h1>FDM Games</h1>
                </Link>

                <div className="links">
                    <Link href="/catalogo" className="link-nav">
                        Catálogo
                    </Link>

                    <div className="separador-nav"></div>

                    <Link href="/biblioteca" className="link-nav">
                        Biblioteca
                    </Link>
                </div>

                <div className="botones">
                    <div className="busqueda">
                        <input type="text" placeholder="Buscar juego..." />
                    </div>

                    <button className="boton-icono" aria-label="Carrito">
                    </button>

                    <button className="boton-icono" aria-label="Perfil">

                    </button>
                </div>
            </nav>
        </>
    )
}