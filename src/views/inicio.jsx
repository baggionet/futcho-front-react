import * as React from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import './css/inicio.css';
import Pachuca from '../asssets/img/equipos/pachuca.png';
import Tigres from '../asssets/img/equipos/tigres.png';
import Necaxa from '../asssets/img/equipos/Necaxa.png';
import Juarez from '../asssets/img/equipos/juarez.png';
import axios from 'axios'

const baseUrl = "http://localhost:5000/api/quiniela/jornada/1";


export default function() {
    return (
        <div className="content-inicio">
            <div className="jornadas">
                <div className="cabecera">
                    <h3>2020-2021 Clasura</h3>
                    <ul>
                        <li><i><ArrowBackIosRoundedIcon fontSize="small"/></i></li>
                        <li>Jornada 12</li>
                        <li><i><ArrowForwardIosRoundedIcon fontSize="small"/></i></li>
                    </ul>
                </div>
                <div className="contenido">
                    <div className="encabezado-tabla">
                        <ul>
                            <li>Local</li>
                            <li>Visitante</li>
                            <li>Fecha</li>
                            <li>Hora</li>
                            <li>Estadio</li> 
                        </ul>
                    </div>
                    <div className="partido-non">
                        <ul className="partido-item">
                            <li><img className="local" src={Pachuca} width="30" height="30"/> <span>Pachuca</span></li>
                            <li><span>Tigres</span><img className="visitante" src={Tigres} width="30" height="30"/></li>
                            <li>09/04</li>
                            <li>19:30 hr</li>
                            <li>Victoria</li>
                        </ul>
                    </div>
                    <div className="partido-par">
                        <ul className="partido-item">
                            <li><img className="local" src={Necaxa} width="30" height="30"/> <span>Pachuca</span></li>
                            <li><span>Tigres</span><img className="visitante" src={Juarez} width="30" height="30"/></li>
                            <li>09/04</li>
                            <li>19:30 hr</li>
                            <li>Victoria</li>
                        </ul>
                    </div>
                    <div className="partido-non">
                        <ul className="partido-item">
                            <li><img className="local" src={Pachuca} width="30" height="30"/> <span>Pachuca</span></li>
                            <li><span>Tigres</span><img className="visitante" src={Tigres} width="30" height="30"/></li>
                            <li>09/04</li>
                            <li>19:30 hr</li>
                            <li>Victoria</li>
                        </ul>
                    </div>
                    <div className="partido-par">
                        <ul className="partido-item">
                        <li><img className="local" src={Necaxa} width="30" height="30"/> <span>Pachuca</span></li>
                            <li><span>Tigres</span><img className="visitante" src={Juarez} width="30" height="30"/></li>
                            <li>09/04</li>
                            <li>19:30 hr</li>
                            <li>Victoria</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}