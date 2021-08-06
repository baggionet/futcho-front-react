import axios from 'axios';
import React, { Fragment, useContext, useState } from 'react';
import { authContext } from '../context/loginContext';
import './css/login.css';

function Login ({ history }) {
    const { setAuthToken } = useContext(authContext);
    const[ email, setEmail] = useState()
    const[ password, setPassword] = useState()

    const onSubmit = async e => {
            e.preventDefault()
            console.log(email, password)
            await axios({
                url: "http://localhost:5000/api/quiniela/auth/login",
                method: 'POST',
                data: {email, password}
            })
            .then(res => {
               setAuthToken(res)
                history.push('/admin/inicio')
                
            })
            .catch(err =>{
                console.log(err.response)
                if(!err.response){
                    alert("No hay conexxion a Internet")
                }else{
                    alert(err.response.data);
                }
            })
    }

    return (
    <Fragment>
        <div className="container-login">
            <div className="container-form">
                <h1>FUTCHO</h1>
                <h3>La Quiniela</h3>
                <div>
                    <form>
                        <div className="grupo-usuario">
                            <label>Correo</label><br/>
                            <input 
                                type="correo" 
                                placeholder="Ingresa tu correo electronico"
                                name="correo"
                                onChange={e => setEmail(e.target.value)}
                                />
                        </div>
                        <div className="grupo-usuario">
                            <label>Contraseña</label><br/>
                            <input 
                                type="password" 
                                placeholder="Ingresa tu contraseña"
                                name="contraseña"
                                onChange={e => setPassword(e.target.value)}
                                />
                        </div>
                        <div className="botonera-login">
                            <button onClick={onSubmit}>Entrar</button>
                            <p className="registro" >No tienes cuenta <span className="registro-item" onClick={() => history.push("/registro")}>Registrate</span> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Login;