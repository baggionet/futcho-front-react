import React, { useState, useEffect } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './css/inicio.css';
import axios from 'axios'

const urlEquipos = "http://localhost:5000/api/quiniela/equipo";
const  urlJornada = "http://localhost:5000/api/quiniela/jornada/"

export default function() {
    const [ temporada, setTemporada ] = useState([])
    const [jornadas, setJornadas] = useState([])
    const [equipos, setEquipos] = useState([])
    const [count, setCount] = useState(1)
    //console.log(jornadas)
    const showEquipos = async () => {
        const res = await axios.get(urlEquipos)
        //console.log(res.data);
        setEquipos(res.data)
    }
   
    
//solicitud de las jornadas
    const selectJornada = async (j) => {
        const res = await axios.get(urlJornada + j)
        setTemporada(res.data[0])
        setJornadas(res.data)
    }
    //useEffect()


    useEffect(() => {
        showEquipos()
        selectJornada(count)
    }, []);
    return (
        <div className="content-inicio">
            <div className="equipos">
                {
                    equipos.map((equipo, idx) => {
                        return(
                            <div className="equipos-item">
                                <div className="equipos-logo">
                                    <img src={equipo.logo} width="40"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="jornadas">
                <div className="cabecera">
                    <h3>{temporada.season}    {temporada.tournament}</h3>
                    <ul>
                        <li onClick={() => 
                        {
                            if(count > 1){
                                setCount(count - 1, selectJornada(count - 1))
                            }
                        }}><i><ArrowBackIosRoundedIcon fontSize="small"/></i></li>
                        <li>Jornada {count}</li>
                        <li onClick={() => 
                        {
                            if(count < 17){
                                setCount(count + 1, selectJornada(count + 1))
                            }
                        }}><i><ArrowForwardIosRoundedIcon fontSize="small"/></i></li>
                    </ul>
                </div>
                <table className="contenido">
                    <tr className="encabezado-tabla">
                        <th colspan="2" >Local</th>
                        <th colspan="2" >Visitante</th>
                        <th >Fecha</th>
                        <th >Hora</th>
                        <th >Estadio</th>
                    </tr>
                    { jornadas.map((jornada, idx) => {
                            return(
                            <tr className="partido">
                                <td colspan="2" className="local">
                                    <img className="imgLocal" src={jornada.localId[1]} width="30" height="30"/> 
                                    <span>{jornada.localId[0]}</span>
                                </td>
                                <td colspan="2" className="visitante">
                                    <span>{jornada.visitorId[0]}</span>
                                    <img className="imgVisitante" src={jornada.visitorId[1]} width="30" height="30"/>
                                </td>
                                <td className="fecha">{jornada.date}</td>
                                <td className="hora">{jornada.time}</td>
                                <td className="estadio">{jornada.stadium}</td>
                            </tr>
                            )}
                        )
                    }
                </table>
            </div>
        </div>
    )
}