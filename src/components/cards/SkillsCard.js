import React from 'react';
import '../body.css';
import './skillsCard.css';
import {animated} from 'react-spring';

export default function SkillsCard({skillsCardStyle}){
    return (
        <animated.div className="card skillsCard" style={skillsCardStyle}>
            <div className='cardContent skillsCardContent'>
                <div style={{fontSize: '1.8vw'}}><b>Aptitudes</b></div>
                <div className=''></div>
            </div>
        </animated.div>
    )
}