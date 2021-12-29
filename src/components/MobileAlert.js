import React, {useState} from 'react';
import './mobileAlert.css';
import sad_phone from '../img/sad_phone.png'

export default function MobileAlert() {

    let mobileAlert = false;
    if (window.screen.width < 800 || window.screen.height < 600){
        mobileAlert = true;
    }

    if(mobileAlert){
        return (
            <div className='mobileAlert' style={{zIndex: mobileAlert? '15' : '-5', backgroundColor: mobileAlert? '#1e023df5' : 'transparent'}}>
                <div className='alertContent'>
                    <div className='alertTitle'>
                        ¡Lo siento!
                    </div>
                    <img className='alertImage'src={sad_phone} alt='sad phone'></img>
                    <div className='alertText'>
                        Este sitio web ha sido diseñado para ser ejecutado en pantallas de computadora.<br></br>
                        Vas a ser redirigido <a href='http://grossignacio.ga/'>grossignacio.ga</a> para que puedas
                        visualizar mi currículum en tu teléfono.
                    </div>
                    <btn className='alertBtn' onClick={ () => window.location.href = 'http://grossignacio.ga/'}><b>Aceptar</b></btn>
                </div>
            </div>
        )
    }else{
        return( <div></div> )
    }
}
