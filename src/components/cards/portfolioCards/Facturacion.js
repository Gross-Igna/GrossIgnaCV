import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';
import icon_java from '../../../img/icon_java.png';
import {GiReturnArrow} from 'react-icons/gi';
import {AiOutlineYoutube} from 'react-icons/ai';

export default function Facturacion() {

    //CARD FLIP ANIMATION
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <div>
            <div className='cardParentDiv'>
            <div>
                    <animated.div
                        className="c back"
                        style={{ opacity: opacity.to(o => 1 - o), transform, 
                            zIndex: flipped ? 10 : 11 }}
                    >   

                        <div classname='pBackCardContent' style={{height: '100%'}}>
                            <div classname='flipBtnDiv' style={{height: '100%'}}>
                                <button className='flipBtn' 
                                onClick={!flipped ? () => set(state => !state) : undefined}>
                                    <i style={{margin: '5px'}}>Video <AiOutlineYoutube /></i>
                                </button>
                                <div className='disablerDiv projectInfoDiv'>
                                    <h1 className='pCardTitle pCardDiv'>Liquid Facturación</h1>
                                    <div className='pCardIconsDiv pCardDiv'>
                                        <img src={icon_java} alt="java icon" 
                                        className='pCardIcon'/>
                                    </div>
                                    <div className='pCardTextDiv pCardDiv'>
                                        Software desarrollado para la administración de la Escuela Especial Nro 1281 - Candi (Sunchales,
                                        Santa Fe). Programado enteramente en <b>Java</b>.
                                        <br></br>Aloja una base de datos de los socios que aportan beneficios a la institución.
                                        <br></br>Permite generar e imprimir los comprobantes de liquidación de cuotas
                                        que los cobradores de la institución reparten a los beneficiaros de la escuela.
                                    </div>
                                    <div className='pCardLinkDiv pCardDiv'>
                                        <p>
                                            <span>Probar App</span> |&nbsp;
                                            <btn className='linkBtn' onClick={!flipped ? () => set(state => !state) : undefined}>Ver video</btn>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </animated.div>

                    <animated.div
                        className="c front"
                        style={{ opacity, transform, rotateX: '180deg',
                        zIndex: flipped ? 11 : 10}}
                    >

                        <div classname='pBackCardContent' style={{height: '100%'}}>
                            <div classname='flipBtnDiv' style={{height: '100%'}}>
                                <button className='flipBtn' 
                                onClick={() => set(state => !state)}>
                                    <i style={{margin: '5px'}}>Volver</i>
                                    <GiReturnArrow className='flipIcon'/>
                                </button>
                                <div className='disablerDiv'>
                                    <iframe src="https://www.youtube.com/embed/cbrEyeN1wP8" 
                                    title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                    gyroscope; picture-in-picture" style={!flipped ? {display: 'none'} : undefined}
                                    allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

                    </animated.div>
                </div>
            </div>
        </div>
    )
}
