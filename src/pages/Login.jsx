import * as React from 'react';
import './css/login.css';


export default function ({ history }) {
    return (
        <div className="container-login">
            
            <div className="container-form">
                <h1>Inicio de sesion</h1>
                <div>
                    <form>
                        <div className="grupo-usuario">
                            <label>Usuario</label><br/>
                            <input type="text" placeholder="Ingresa tu Usuario"/>
                        </div>
                        <div className="grupo-usuario">
                            <label>Contraseña</label><br/>
                            <input type="text" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="botonera">
                            <button onClick={() => history.push("/admin/inicio")}>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}