import "../styles/Registro.css"
import { Link } from "wouter"

export default function Registro(){
    return(
        <>
            <div className="form-registro">
                <h2>Registro</h2>
                <form action="">
                    <h3>Nombre de usuario</h3>
                    <input type="text" />
                    <h3>Correo electronico</h3>
                    <input type="text" />
                    <h3>Crear contraseña</h3>
                    <input type="text" />
                    <button type="submit" className="btn-reg">Registrarse</button>
                </form>
                <h3>Ya tenes una cuenta?</h3><Link href="/login" className="redir-log">Iniciar sesión</Link>
            </div>
            <div className="apartado-img">
            </div>
        </>
    )
}