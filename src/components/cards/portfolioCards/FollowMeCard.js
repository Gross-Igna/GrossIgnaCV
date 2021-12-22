import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';
import icon_android from '../../../img/icon_android.png';
import icon_mysql from '../../../img/icon_mysql.png';
import icon_spring from '../../../img/icon_spring.png';
import {GiReturnArrow} from 'react-icons/gi';
import {AiOutlineYoutube} from 'react-icons/ai';

export default function NewLandingCvCard() {

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
                                    <h1 className='pCardTitle pCardDiv'>FollowMe App</h1>
                                    <div className='pCardIconsDiv pCardDiv'>
                                        <img src={icon_android} alt="adnroid icon" 
                                        className='pCardIcon'/>
                                        <img src={icon_spring} alt="spring icon" 
                                        className='pCardIcon'/>
                                        <img src={icon_mysql} alt="mysql icon" 
                                        className='pCardIcon'/>
                                    </div>
                                    <div className='pCardTextDiv pCardDiv'>
                                        Salas online para compartir en tiempo real de la ubicación de un dispositivo. Desarrollada con <b>Android 
                                        Java</b> y <b>Spring Boot</b>.
                                        <br></br>Permite al creador de la sala seleccionar una locación de destino y notifica a los participantes en caso de que se esté alejando de esta.
                                        <br></br>Usa la librería de Google Maps y su API para que podamos realizar este seguimiento.
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
                                    <iframe src="https://www.youtube.com/embed/W2mEkKs2TcrU" 
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
