import React, {useState} from 'react';
import './mobileAlert.css';
import sad_phone from '../img/sad_phone.png'

export default function MobileAlert() {

    /*const [mobileAlert, setMobileAlert] = useState(false);*/
    let mobileAlert = false;

    function detectMob() {
        return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
      }

    if (!detectMob){
        mobileAlert = true;
    }

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
                <btn className='alertBtn'>Aceptar</btn>
            </div>
        </div>
    )
}
