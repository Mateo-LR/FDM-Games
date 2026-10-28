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
                        <span className="material-symbols-outlined">search</span>
                    </div>

                    <button className="boton-icono" aria-label="Carrito">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>

                    <button className="boton-icono" aria-label="Perfil">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                </div>
            </nav>
        </>
    )
}