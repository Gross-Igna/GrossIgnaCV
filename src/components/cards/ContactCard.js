import React from 'react';
import '../body.css';
import {animated} from 'react-spring';

export default function ContactCard({contactCardStyle}){
    return (
        <animated.div className="card contactCard" style={contactCardStyle}>
            <div className='cardContent'>
                contactCard
            </div>
        </animated.div>
    )
}