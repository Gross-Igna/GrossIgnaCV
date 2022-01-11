import React from 'react';
import './mobileAlert.css';
import rotate_phone from '../img/rotatephone.png'

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
                        <b>Rota tu pantalla</b>
                    </div>
                    <img className='alertImage'src={rotate_phone} alt='rotate phone'></img>
                    <div className='alertText'>
                        Se ha detectado tu ingreso desde un dispositivo móvil. <b>Rota tu pantalla</b> para eliminar este mensaje 
                        o presiona el siguiente botón para ser redirigido a una antigua versión de la página web.
                    </div>
                    <btn className='alertBtn' onClick={ () => window.location.href = 'http://grossignacio.ga/'}>Redirigirse a otra página</btn>
                </div>
            </div>
        )
    }else{
        return( <div></div> )
    }
}
