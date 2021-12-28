import React from 'react';
import '../body.css';
import '../educationCard.css';
import logo_utn from '../../img/logo_utn.png';
import logo_campbridge from '../../img/logo_campbridge.png';
import logo_google_activate from '../../img/logo_google_activate.png';
import logo_san_jose from '../../img/logo_san_jose.png';
import {animated} from 'react-spring';

export default function EducationCard({educationCardStyle}){
    return (
        <animated.div className="card educationCard" style={educationCardStyle}>
            <div className='cardContent educationCardContent'>
                <span className='educationTitle'><b>Mi Formación</b></span>
                <div className='educationBody'>
                    <div className='educationItem'>
                        <div className='logoContainer'>
                            <img src={logo_utn} alt="logo utn" className='educationLogo'></img>
                        </div>
                        <div className='educationItemText'>
                            ▪<b> Ingeniería en Sistemas de la Información</b> (en progreso, 2° año), 
                            Universidad Tecnológica Nacional. (Córdoba, Córdoba)
                        </div>
                        <div className='educationItemLink'>
                            <a href='https://www.institucional.frc.utn.edu.ar/internacionales/frc/de_grado/sistemas.asp'
                            target="_blank">Más información</a>
                        </div>
                    </div>

                    <div className='educationItem'>
                        <div className='logoContainer'>
                            <img src={logo_campbridge} alt="logo campbridge" className='educationLogo'></img>
                        </div>
                        <div className='educationItemText'>
                            ▪<b> FCE B2 First  - Inglés nivel intermedio/alto</b> (upper-intermediate), 
                            <br></br> University of Cambridge, English Faculty. (Cambridgeshire, England)
                        </div>
                        <div className='educationItemLink'>
                            <a href='https://www.cambridgeenglish.org/es/exams-and-tests/first/'
                            target="_blank">Más información</a>
                        </div>
                    </div>

                    <div className='educationItem'>
                        <div className='logoContainer'>
                            <img src={logo_google_activate} alt="logo google activate" className='educationLogo'></img>
                        </div>
                        <div className='educationItemText'>
                            ▪<b>Curso: Introducción al desarrollo web.</b>, 
                            <br></br> Curso certificado por Google Activate®, proporcionado por la Universidad de Alicante. 
                            (Alicante, España) 
                        </div>
                        <div className='educationItemLink'>
                            <a href='https://learndigital.withgoogle.com/activate/course/web-development-II'
                            target="_blank">Más información</a>
                        </div>
                    </div>

                    <div className='educationItem'>
                            <div className='logoContainer'>
                                <img src={logo_san_jose} alt="logo san jose" className='educationLogo'></img>
                            </div>
                            <div className='educationItemText'>
                                ▪<b>Bachiller en Ciencias Sociales</b>, 
                                <br></br> E.E.S.O.P.I.. Nº 8107 "San José" (Sunchales, Santa Fe)
                                <br></br> ▪<b>Curso de lenguaje Alemán básico</b>, 
                                <br></br> Curso optativo de la E.E.S.O.P.I. Nº 8107 "San José" (Sunchales, Santa Fe)
                            </div>
                            <div className='educationItemLink'>
                            <a href='http://www.sanjosesunchales.com.ar/'
                            target="_blank">Más información</a>
                            </div>
                    </div>

                </div>
            </div>
        </animated.div>
    )
}