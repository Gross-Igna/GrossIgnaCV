import React from 'react';
import '../body.css';
import {useSpring, animated} from 'react-spring';

export default function EducationCard({educationCardStyle}){
    return (
        <animated.div className="card educationCard" style={educationCardStyle}>
            <div className='cardContent'>
                EDUCATION CARD
            </div>
        </animated.div>
    )
}