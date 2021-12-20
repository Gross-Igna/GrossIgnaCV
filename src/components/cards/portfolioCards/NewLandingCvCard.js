import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring';

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
                
                <div onClick={() => set(state => !state)}>
                    <animated.div
                        className="c back"
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    >
                        <p>sad</p>
                    </animated.div>

                    <animated.div
                        className="c front"
                        style={{ opacity, transform, rotateX: '180deg',}}
                    >
                        <p>sad</p>
                    </animated.div>
                </div>

            </div>
        </div>
    )
}
