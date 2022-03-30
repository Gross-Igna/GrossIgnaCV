import React from 'react'
import react_icon from '../../../img/icon_react.png';
import icon_spring from '../../../img/icon_spring.png';

export default function Compostela() {

    function cvCopyLink(){
        navigator.clipboard.writeText('https://compostela.netlify.app/');
        alert("Link de la página copiado a su portapapeles :)");
    }

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
                                <h1 className='pCardTitle pCardDiv'>Compostela Landing Page</h1>
                                <div className='pCardIconsDiv pCardDiv'>
                                    <img src={react_icon} alt="react icon" 
                                    className='pCardIcon'/>
                                    <img src={icon_spring} alt="react spring icon" 
                                    className='pCardIcon'/>
                                </div>
                                <div className='pCardTextDiv pCardDiv'>
                                    <b>⚠ (En proceso de desarrollo)</b><br></br>
                                    Landing page para el complejo de Coworking Compostela ubicado en la ciudad de Sunchales, Santa Fé.
                                    Desarrollado con <b>React.js</b>.
                                    <br></br>Diseño responsivo apoyándose en la tecnología <b>Bootstrap</b>.
                                    <br></br>Implementación de <b>Spring Boot</b> para el envío de mails al utilizar el formulario 
                                    de contacto.
                                </div>
                                <div className='pCardLinkDiv pCardDiv'>
                                <btn className='linkBtn'
                                            onClick={() => window.open('https://compostela.netlify.app/'
                                            , '_blank')}>Visitar sitio (en desarrollo)</btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
