import React, {useState} from 'react';
import axios from 'axios';
import '../body.css';
import './contactCard.css';
import {FaLinkedin} from 'react-icons/fa';
import {MdMail} from 'react-icons/md'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import {animated} from 'react-spring';

export default function ContactCard({contactCardStyle}){

    function clipBoardGmail(){
        navigator.clipboard.writeText('grossignacio01@gmail.com');
        alert("Link de correo electrónico copiado a su portapapeles :)");
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank')
    };


    {/* CONTACT FORM */}
    const [email, setEmail] = useState();
    const [nombre, setNombre] = useState();
    const [texto, setTexto] = useState();
    const [btnText, setBtnText] = useState('Enviar');
    const [btnVariant, setBtnVariant] = useState('primary');
    const [btnDisabled, setBtnDisabled] = useState(false);

    //Axios SEND REQUESTS TO MAIL DELIVERING API
    function sendButtonOnClick(){

        setBtnDisabled(true);
        setBtnVariant('secondary');
        setBtnText('Enviando');
        document.getElementById("contactCard").style.cursor = "wait";
        
        axios.post('https://compostela.herokuapp.com/04022022compostela2047', {
            email: email,
            nombre: nombre,
            texto: texto,
            headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then(function (response) {
            if(response.status === 200){
                console.log(response.status);
                setBtnText('¡Tu mensaje ha sido enviado!');
                setBtnVariant('success');
                document.getElementById("contactCard").style.cursor = "auto";
            }else{
                window.alert("Los sentimos! No hemos podido enviar tu mensaje. Por favor, revisa lo que ingresaste" 
                + "e intenta nuevamente, o comunicate por alguno de los medios que figuran debajo del formulario.");
                setBtnText('Enviar');
                setBtnVariant('primary');
                setBtnDisabled(false);
                document.getElementById("contactCard").style.cursor = "auto";
            }
        })
        .catch(function (error){
            console.log(error);
            window.alert("Los sentimos! No hemos podido enviar tu mensaje. Por favor, intentalo" 
                + " nuevamente o comunicate a alguno de los medios que figuran debajo del formulario." );
            setBtnText('Enviar');
            setBtnVariant('success');
            setBtnDisabled(false);
            document.getElementById("contactCard").style.cursor = "auto";
        });

    }

    return (
        <animated.div className="card contactCard" style={contactCardStyle} id='contactCard'>
            <div className='cardContent contactCardContent'>
                <div>
                    <b className='contactTitle'>¡Contactate conmigo!&nbsp;</b>
                    <div className='contactSubtitle' style={{textDecorationColor: 'transparent'}}>
                    Tu mensaje siempre es bienvenido.<br></br>
                    </div>
                </div>
            <div className="contactForm">

            {/* Contact Form */}
            <Container className='contacto'>
                <Row>
                    <Col xs={6} className='conMsgCol'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName" 
                            value={nombre} onChange={(e) => setNombre(e.target.value)}>
                                <Form.Control type="text" placeholder="Nombre" className='form1'/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={6} className='conMsgCol'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            value={email} onChange={(e) => setEmail(e.target.value)}>
                                <Form.Control type="email" placeholder="E-mail" className='form1'/>
                                {/*<Form.Text className="text-muted">
                                No compartiremos esta información.
                                </Form.Text>*/}
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicText"
                            value={texto} onChange={(e) => setTexto(e.target.value)}>
                                <Form.Control as="textarea" rows={6} placeholder="Mensaje"
                                className='formMsg'/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Button variant={btnVariant} className='conButton' disabled={btnDisabled}
                            onClick={() => sendButtonOnClick()}>
                                {btnText}
                    </Button>
                </Row>
            </Container>

            </div>
            <div className='contactButtonsContainer'>
                <div className='contactButton2' 
                onClick={() => window.open('https://www.linkedin.com/in/ignacio-gross-b287b7204/', '_blank')}>
                    <FaLinkedin style={{fontSize: '2vw'}}/>
                    <i>LinkedIn: Ignacio Gross</i>
                </div>
                <div style={{width: '1vw'}}></div>
                <div className='contactButton2' onClick={() => clipBoardGmail()}>
                    <MdMail style={{fontSize: '2vw'}}/>
                    <i style={{marginTop: '-2vw'}}>E-Mail: grossignacio01@gmail.com</i>
                </div>
            </div>
            </div>
        </animated.div>
    )
}