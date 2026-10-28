import "../styles/Home.css"
import IMG from "../assets/img-banner2.webp"
import terror from "../assets/iconos/icono-terror.svg"
import survival from "../assets/iconos/icono-survival.svg"
import shooter from "../assets/iconos/icono-shooter.svg"
import sandbox from "../assets/iconos/icono-sandbox.svg"
import { Link } from "wouter"

export default function Home(){
    return(
        <>
            <body>
                <div className="banner">
                    <img src={IMG} alt="Banner Fondo" />
                    <div className="texto-banner">
                        <p>
                            Descubre más
                            <br /> 
                            de nuestra
                            <br />
                            amplia variedad
                            <br />
                            de videojuegos
                        </p>
                        <Link href="/catalogo" className="btn-ver-mas">Ver más</Link>
                    </div>
                </div>
                <div className="cat-dest">
                    <div className="titulo">
                        <div className="linea-dec">
                        </div>
                        <h2>Categorías destacadas</h2>
                        <div className="linea-dec"> 
                        </div>
                    </div>
                    
                    <div className="cont-cat">
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={terror} alt="Terror" />
                            </Link>
                            <h3>Terror</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={survival} alt="Survival" />
                            </Link>
                            <h3>Survival</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={shooter} alt="Shooter" />
                            </Link>
                            <h3>Shooter</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={sandbox} alt="Sandbox" />
                            </Link>
                            <h3>Sandbox</h3>
                        </div>
                    </div>
                </div>
                <div className="juegos-dest">
                    <div className="titulo">
                        <div className="linea-dec">
                        </div>
                        <h2>Juegos destacados</h2>
                        <div className="linea-dec">
                        </div>
                    </div>
                    
                </div>
            </body>
            
        </>
    )
}