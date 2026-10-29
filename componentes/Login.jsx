import "../styles/Login.css"
import { Link } from "wouter"

export default function Login(){
    return(
        <>
            <div className="form-login">
                <h2>Registro</h2>
                <form action="">
                    <h3>Nombre de usuario</h3>
                    <input type="text" />
                    <h3>Contraseña</h3>
                    <input type="text" />
                    <button type="submit" className="btn-login">Login</button>
                </form>
                <div className="redireccion">
                    <h3>Todavia no te tenes una cuenta</h3><Link href="/registro" className="redir-reg">Registrarse</Link>
                </div>
               
            </div>
            <div className="login-img">

            </div>
        </>
    )
}