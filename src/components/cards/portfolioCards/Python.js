import React from 'react'
import python_icon from '../../../img/icon_python.png';

export default function Python(){

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
                                <h1 className='pCardTitle pCardDiv'>Prácticas UTN</h1>
                                <div className='pCardIconsDiv pCardDiv'>
                                    <img src={python_icon} alt="python icon" 
                                    className='pCardIcon'/>
                                </div>
                                <div className='pCardTextDiv pCardDiv'>
                                    Estudio práctico de lenguaje <b>Python</b> aplicado a algoritmos y estructuras de datos realizado en la Universidad Tecnológica
                                    de Córdoba.
                                    <br></br>Implementación de <b>algoritmos de carga y ordenamiento, cálculo de estadísticas, implementación de matrices y almacenamiento permanente de datos, entre otros.</b>.
                                </div>
                                <div className='pCardLinkDiv pCardDiv'>
                                <btn className="linkBtn" 
                                    onClick={() => window.open('https://drive.google.com/drive/folders/1k3n0x1Rkud8UoVON_zSFFiTA30uRpn-u?usp=sharing'
                                    , '_blank')}>Ver Proyectos</btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
