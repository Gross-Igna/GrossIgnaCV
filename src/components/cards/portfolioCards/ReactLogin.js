import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';
import './reactLogin.css';
import icon_react from '../../../img/icon_react.png'
import icon_mysql from '../../../img/icon_mysql.png'
import icon_spring from '../../../img/icon_spring.png'
import {GiReturnArrow} from 'react-icons/gi';
import {AiOutlineYoutube} from 'react-icons/ai';

export default function ReactLogin() {

    //CARD FLIP ANIMATION
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
    zIndex: flipped ? 50 : 49,
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 170, friction: 26 },
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
                                    <h1 className='pCardTitle pCardDiv'>React-Spring Login</h1>
                                    <div className='pCardIconsDiv pCardDiv'>
                                        <img src={icon_react} alt="react icon" 
                                        className='pCardIcon'/>
                                        <img src={icon_spring} alt="spring icon" 
                                        className='pCardIcon'/>
                                        <img src={icon_mysql} alt="mysql icon" 
                                        className='pCardIcon'/>
                                    </div>
                                    <div className='pCardTextDiv pCardDiv'>
                                        Pagina web de registro y autenticación de usuarios. Desarrollada con <b>React.js</b> y <b>Spring Boot</b>
                                        , incorpora una base de datos <b>MySQL</b>.
                                        <br></br>Se exige una confirmación de correo electrónico para dar de alta los usuarios.
                                        Se permite cambiar la contraseña por e-mail en caso de pérdida.
                                        <br></br>Utiliza JWT para garantizar acceso exclusivo a ciertas vistas a los clientes logeados.
                                    </div>
                                    <div className='pCardLinkDiv pCardDiv'>
                                        <a href="url">Ir al sitio web</a> <a href="url">Ver video</a>
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
                                    <iframe src="https://www.youtube.com/embed/W2mEkK2TcrU" 
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
