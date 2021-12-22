import React from 'react'
import react_icon from '../../../img/icon_react.png';
import springR_icon from '../../../img/icon_springR.png';
export default function NewLandingCvCard() {


    return (
        <div>

            <div className='cardParentDiv'>
                <div
                    className="c back"
                    style={{ opacity: 1, zIndex: 11 }}
                >   

                    <div classname='pBackCardContent' style={{height: '100%'}}>
                        <div classname='flipBtnDiv' style={{height: '100%'}}>
                            <div className='disablerDiv projectInfoDiv'>
                                <h1 className='pCardTitle pCardDiv'>Curriculum Vitae</h1>
                                <div className='pCardIconsDiv pCardDiv'>
                                    <img src={react_icon} alt="react icon" 
                                    className='pCardIcon'/>
                                    <img src={springR_icon} alt="react spring icon" 
                                    className='pCardIcon'/>
                                </div>
                                <div className='pCardTextDiv pCardDiv'>
                                    El sitio web que está visualizando ahora mismo. Mi curriculum vitae presentado en forma de tarjetas.
                                    Desarrollado con <b>React.js</b>.
                                    <br></br>Diseño responsivo apoyándose en la tecnología <b>Bootstrap</b>.
                                    <br></br>Implementación de la librería <b>React Spring</b> <i>(react-spring.io)</i> para la programación 
                                    de animaciones.
                                </div>
                                <div className='pCardLinkDiv pCardDiv'>
                                    <p>
                                        <span>Copiar link</span> |&nbsp;
                                        <span>Contactarse</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
