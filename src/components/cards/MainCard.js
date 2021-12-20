import React from 'react';
import '../body.css';
import './mainCard.css';
import perfil2 from '../../img/perfil2.png'
import timeline from '../../img/timeline.png'
import {useSpring, animated} from 'react-spring';

export default function MainCard({mainCardStyle}) {
    return (
        <animated.div className="card" style={mainCardStyle}>
            <div className='container-fluid cardContent mainCard'>
                <div className='row titleRow'>
                        <div className='mainHeader'>
                            <div className='mainTitle'>
                                <b>Ignacio Cruz Gross</b>
                            </div>
                            <div className='mainSubtitle'>
                                Desarollador Junior estudiante 
                                de Sistemas de Información
                            </div>
                        </div>
                </div>
                <div className='row contentRow'>
                    <div className='col-7 infoCol'>
                        <img src={perfil2}
                        alt="Foto perfil" className="imgPerfil"/>
                        <div className='infoData'>
                            ● <i>Córdoba</i>, Argentina.
                            <br></br>● Conocimientos en ciencias de la programación y <b>diseño de algoritmos</b>.
                            <br></br>● Estudiante de segundo año de <b>Ingeniería en Sistemas de la Información</b>.
                            <br></br>● Manejo de tecnologías como <i>Java, Spring-Boot, React.js y Python.</i>
                            <br></br>● Nivel de inglés medio-alto.
                            <br></br>● <b>Proactivo, organizado y de mente creativa</b>.
                        </div>
                    </div>
                    <div className='col-5 timelineCol'>
                        <img src={timeline}
                        alt="timeline" className="timeline"/>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}
