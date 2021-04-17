import * as React from 'react';
import './css/login.css';


export default function () {
    return (
        <div className="container">
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
                            <button>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}