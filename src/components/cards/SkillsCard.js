import React from 'react';
import '../body.css';
import {useSpring, animated} from 'react-spring';

export default function SkillsCard({skillsCardStyle}){
    return (
        <animated.div className="card skillsCard" style={skillsCardStyle}>
            <div className='cardContent'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/W2mEkK2TcrU" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </animated.div>
    )
}