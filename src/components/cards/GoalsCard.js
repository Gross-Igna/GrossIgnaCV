import React from 'react';
import '../body.css';
import './goalsCard.css';
import {animated} from 'react-spring';
import {GiArcheryTarget} from "react-icons/gi";

export default function GoalsCard({goalsCardStyle}) {
    return (
        <animated.div className="card goalsCard" style={goalsCardStyle}>
            <div className='cardContent goalsCardContent'>
                <div className='goalsParentCol'>
                    <div className='title'><b>
                        Mis actuales objetivos profesionales&nbsp;
                        <GiArcheryTarget style={{marginBottom:'5px'}}/>
                        </b>
                        <div className='subtitle'>Soy Ignacio, un curioso de la informática. Hoy en día, identifico 
                        los siguientes puntos como los objetivos que persigo respecto a mi carrera profesional.</div>
                    </div>
                    <div className='text'>
                        <b>Adquirir nuevas experiencias</b>
                        <br></br>Practicar mi destreza respecto a resolución de 
                        problemas para potenciar mis capacidades en el rubro. Deseo expandir 
                        mis saberes sobre las nuevas tecnologías de la información y comunicación, 
                        aceptando nuevos desafíos de aprendizaje y búsqueda de soluciones.

                        <br></br><br></br><b>Aportar valor a una organización</b>
                        <br></br>Aspiro a ser un elemento de utilidad dentro del grupo de trabajo, 
                        enfrentando con decisión los retos que surjan en el camino y siendo aquel a quien se acude
                        con facilidad y confianza en su responsabilidad. 
                        Perfeccionar mi capacidad de acción en conjunto con otros profesionales es 
                        algo que activamente busco lograr, la considero una aptitud fundamental para el óptimo funcionamiento
                        de un personal de desarrollo informático.

                        <br></br><br></br><b>Encontrar mi lugar</b>
                        <br></br>Me encuentro en búsqueda de un entorno laboral en el que me pueda sentir perteneciente.
                        Sostengo que trabajar en un espacio en el que se valore la empatía, cooperación y buena comunicación
                        entre los miembros de un mismo equipo, es el mejor de los incentivos para jornadas laborales relajadas y
                        productivas hasta en los momentos de más alta presión.

                        <br></br><br></br><b>Ejercer con pasión</b>
                        <br></br>Hoy en día, programación es el área en la que más disfruto desempeñarme. 
                        Actualmente trabajo a diario con el fin de seguir aprendiendo cada vez en mayor profundidad y disfruto
                        mucho de ello. Mi amor por esta profesión lo considero el aspecto más importante de todos si buscamos
                        el por qué de mis logros.
                    </div>
                </div>
            </div>
        </animated.div>
    )
}