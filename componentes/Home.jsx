import "../styles/Home.css"
import IMG from "../assets/img-banner2.webp"
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
                    <div className="linea-dec">
                    </div>
                    <h2>Categorías destacadas</h2>
                    <div className="linea-dec"> 
                    </div>
                </div>
                <div className="juegos-dest">
                    <div className="linea-dec">
                    </div>
                    <h2>Juegos destacados</h2>
                    <div className="linea-dec">
                    </div>
                </div>
            </body>
            
        </>
    )
}