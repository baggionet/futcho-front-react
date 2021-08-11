import axios from 'axios';
import React, { useState } from 'react';
import './css/login.css';

function Registro({history}) {
    const[ name, setName ] = useState();
    const[ email, setEmail ] = useState();
    const[ nickName, setNickName ] = useState();
    const[ password, setPassword ] = useState();
    const rollId = 2;

    //setRoll(2);
    console.log(name, email, nickName, password)

    const onSubmit = async e => {
        
        e.preventDefault();
            await axios({
            url: "http://54.145.89.85:5000/api/quiniela/usuario",
            method: "POST",
            data: { name, email, nickName, password, rollId }
        })
        .then(res => {
            alert("Se creo tu cuenta, Inicia sesion con tu email y password")
            history.push("/")
        })
        .catch(err =>{
            console.log(err.response.data)
            if(!err.response){
                alert("No hay conexxion a Internet")
            }else{
                alert(err.response.data);
            }
        })
    }

    return(
        <div className="container-registro">

            <div className="container-form">
                <h2>Registro nuevo usuario</h2>
                <div>
                    <form>
                        <div className="grupo-usuario">
                            <label className="label-registro">Nombre completo</label><br/>
                            <input 
                                className="input-registro"
                                name="nombre"
                                type="text" 
                                placeholder="Ingresa tu nombre completo"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="grupo-usuario">
                            <label className="label-registro">Correo</label><br/>
                            <input 
                                className="input-registro"
                                name="correo"
                                type="email" 
                                placeholder="Ingresa tu correo electronico"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grupo-usuario">
                            <label className="label-registro">Usuario</label><br/>
                            <input 
                                className="input-registro"
                                name="usuario"
                                type="text" 
                                placeholder="Ingresa tu usuario"
                                onChange={e => setNickName(e.target.value)}
                            />
                        </div>
                        <div className="grupo-usuario">
                            <label className="label-registro">Contraseña</label><br/>
                            <input 
                                className="input-registro"
                                name="contraseña"
                                type="password" 
                                placeholder="Ingresa tu contraseña"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="botonera-registro">
                            <button onClick={onSubmit}>Enviar</button>
                            <button onClick={() => history.push("/")}>Cancelar</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Registro;