import React from 'react';
import '../body.css';
import './contactCard.css';
import {FaLinkedin} from 'react-icons/fa';
import {MdMail} from 'react-icons/md'

import {animated} from 'react-spring';

export default function ContactCard({contactCardStyle}){

    function clipBoardGmail(){
        /*navigator.clipboard.writeText('https://www.linkedin.com/in/ignacio-gross-b287b7204/');*/
        navigator.clipboard.writeText('grossignacio01@gmail.com');
        alert("Link de correo electrónico copiado a su portapapeles :)");
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')
    }

    return (
        <animated.div className="card contactCard" style={contactCardStyle}>
            <div className='cardContent contactCardContent'>
                <div>
                    <b className='contactTitle'>¡Contactate conmigo!&nbsp;</b>
                    <div className='contactSubtitle' style={{textDecorationColor: 'transparent'}}>
                    Ante cualquier cuestión y sin compromisos. Su mensaje no es molestia.<br></br>
                    <i>↓ (Click en los botones) ↓</i>
                    </div>
                </div>
                <div className='contactButtonsContainer'>
                    <div className='contactButton2' 
                    onClick={() => window.open('https://www.linkedin.com/in/ignacio-gross-b287b7204/', '_blank')}>
                        <FaLinkedin style={{fontSize: '18vw'}}/>
                        <i>LinkedIn: Ignacio Gross</i>
                    </div>
                    <div className='contactButton2' onClick={() => clipBoardGmail()}>
                        <MdMail style={{fontSize: '20vw'}}/>
                        <i style={{marginTop: '-2vw'}}>E-Mail: grossignacio01@gmail.com</i>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}