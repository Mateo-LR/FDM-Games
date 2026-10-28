import "../styles/Home.css"
import IMG from "../assets/img-banner2.webp"

export default function Home(){
    return(
        <>
            <body>
                <div className="banner">
                <img src={IMG} alt="" />
                <div className="texto-banner">
                    <p>
                        Descubre más
                        <br /> 
                        de nuestra
                        <br />
                        amplía variedad
                        <br />
                        de videojuegos
                    </p>
                </div>
                </div>
                <div className="cat-dest">
                    <h2>Categorías destacadas</h2>
                </div>
                <div className="juegos-dest">
                    <h2>Juegos destacados</h2>
                </div>
            </body>
            
        </>
    )
}