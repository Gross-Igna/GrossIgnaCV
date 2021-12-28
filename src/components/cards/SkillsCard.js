import React from 'react';
import '../body.css';
import './skillsCard.css';
import react_icon from '../../img/icon_react.png';
import java_icon from '../../img/icon_java.png';
import spring_icon from '../../img/icon_spring.png';
import android_icon from '../../img/icon_android.png';
import python_icon from '../../img/icon_python.png';
import mysql_icon from '../../img/icon_mysql.png';
import github_icon from '../../img/icon_github.png';
import {animated} from 'react-spring';

export default function SkillsCard({skillsCardStyle}){
    return (
        <animated.div className="card skillsCard" style={skillsCardStyle}>
            <div className='cardContent skillsCardContent'>
                <span className='skillsTitle'><b>Habilidades</b></span>
                <div className='skillsDiv'>
                    <div className='hardSkillsDiv'>
                        <div className='hardSkillsFlexbox'>
                            <div className='hardSkillsItem'>
                                <img src={react_icon} alt="react icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>React</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={java_icon} alt="java icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>Java</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={spring_icon} alt="spring icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>Spring Boot</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={android_icon} alt="android icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>Android</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={python_icon} alt="python icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>Python</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={mysql_icon} alt="mysql icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>MySql</i></span>
                            </div>
                            <div className='hardSkillsItem'>
                                <img src={github_icon} alt="github icon" 
                                    className='hardSkillsIcon'/>
                                <span className='hardSkillsText'>&nbsp;<i>GitHub</i></span>
                            </div>
                        </div>
                    </div>
                    <div className='softSkillsFlexbox'>
                        <div className='softSkillsItem'>
                            <b>▪Capacidad de resolución de problemas:</b><br></br>
                            Capacidad de abordar con paciencia y decisión. Cada vez que se presenta una complicación, exploro posibles alternativas para poder organizar y 
                            elaborar un plan de trabajo para conducir hacia las soluciones.
                            <br></br>
                        </div>
                        <div className='softSkillsItem'>
                            <b>▪Curiosidad y creatividad:</b><br></br>
                            Puedo pensar fuera de la caja y permitir un flujo de ideas en el que no se juzgue ninguna de estas antes de tiempo. 
                            Me es siempre útil para encontrar de procedimientos que permitan conseguir un producto novedoso y eficiente.
                            <br></br>
                        </div>
                        <div className='softSkillsItem'>
                            <b>▪Antes de ser comprendido, comprendo:</b><br></br>
                            Activa escucha a lo que expresa el otro, indiferentemente de si en lo personal estoy de acuerdo o no en primera instancia. 
                            Me facilita para trabajar junto a mi equipo.
                            <br></br>
                        </div>
                        <div className='softSkillsItem'>
                            <b>▪Organización y concentración:<br></br></b>
                            Administrador de mi tiempo. Tengo siempre en claro qué, cómo y cuánto hay que hacer. Busco trabajar sin distracciones. 
                            Considero esto una aptitud fundamental para lograr un producto de alta calidad.
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}