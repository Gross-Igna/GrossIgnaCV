import {React, useState, useEffect} from 'react';
import './header.css';
import img_perfil1 from '../img/perfil1.png'
import {BsFillBriefcaseFill, BsTrophy, 
    BsFillEnvelopeFill} from 'react-icons/bs'
import {FaGraduationCap} from "react-icons/fa";
import {GiSkills} from "react-icons/gi"
import {useSpring, animated} from 'react-spring';

export default function Header({setNextCard, currentCard, nextCard, 
    headerStylesUpdated, bodyStylesUpdated}) {

    const backCardColor = '#140029';
    const frontCardColor = '#1a0036';
    const droppingCardColor = '#16002e';

    const [headerEnabled, setHeaderEnable] = useState(true);
    //Button Styles States
    const [mainButtonStyle, setMainButtonStyle] = 
    useState({zIndex:'7', marginBottom: '13px', backgroundColor: frontCardColor});
    const [goalsButtonStyle, setGoalsButtonStyle] = 
    useState({zIndex:'2', backgroundColor: backCardColor});
    const [portfolioButtonStyle, setPortfolioButtonStyle] = 
    useState({zIndex:'2', backgroundColor: backCardColor});
    const [skillsButtonStyle, setSkillsButtonStyle] = 
    useState({zIndex:'2', backgroundColor: backCardColor});
    const [educationButtonStyle, setEducationButtonStyle] = 
    useState({zIndex:'2', backgroundColor: backCardColor});
    const [contactButtonStyle, setContactButtonStyle] = 
    useState({zIndex:'2', backgroundColor: backCardColor});
    
    const dropButton = useSpring({
        to:[
        {x: '0%', y: '0%', backgroundColor: frontCardColor, zIndex: '8',
        position: 'relative', config:{duration: 0}},
        {x:currentCard<2?'14.85%':'-14.85%', y: '1325%', backgroundColor: droppingCardColor, zIndex: '3',
        position: 'relative', config:{mass: 1, tension: 170, friction: 26}},
        {x: '0%', y: '0%', backgroundColor: backCardColor, zIndex: '3',
        position: 'relative', config:{mass: 1, tension: 170, friction: 26}}
        ],
        from:{x: '0%', y: '0%', position: 'relative',
        backgroundColor: frontCardColor, zIndex: '8'}
    })
    const bringButton = useSpring({
        to:[
        {y: '0px', zIndex: 7, backgroundColor: backCardColor,
        config:{duration: 0}},
        {y: '-12.7px', zIndex: 7, backgroundColor: frontCardColor, delay: 300,
        config:{mass: 1, tension: 240, friction: 10}}],
        from:{y: '0.5px', zIndex: 7, backgroundColor: frontCardColor}
    })


    //SOLUCION 1//
    //Useref to prevent hint in next useEffect Hook
    //const hasFetchedData = useRef(false);
    
    //Executes when nextCard is changed, set new style for header components
    /*useEffect(() => {
        if (!hasFetchedData.current) {
            if(nextCard!==-1){
                setHeaderEnable(false);
                const currentButtonStyleEffect = buttonEffects[currentCard];
                const nextButtonStyleEffect = buttonEffects[nextCard];
                currentButtonStyleEffect(dropButton);
                nextButtonStyleEffect(bringButton);
                setTimeout(()=>{
                    nextButtonStyleEffect({zIndex: 7, marginBottom: '13px',
                    backgroundColor: frontCardColor});
                    currentButtonStyleEffect({zIndex: 3, marginBottom: '0px',
                    backgroundColor: backCardColor});
                    setHeaderEnable(true);
                }, 1899)
                hasFetchedData.current = true;
            }
        }
    },[nextCard, currentCard, bringButton, dropButton, buttonEffects])*/


    //SOLUCION 2
    /*
    const updateStyles = useCallback(
        () => {
            setHeaderEnable(false);
            const currentButtonStyleEffect = buttonEffects[currentCard];
            const nextButtonStyleEffect = buttonEffects[nextCard];
            currentButtonStyleEffect(dropButton);
            nextButtonStyleEffect(bringButton);
            setTimeout(()=>{
            nextButtonStyleEffect({zIndex: 7, marginBottom: '13px',
            backgroundColor: frontCardColor});
            currentButtonStyleEffect({zIndex: 3, marginBottom: '0px',
            backgroundColor: backCardColor});
            setHeaderEnable(true);
            }, 1899)
        },
        [bringButton, buttonEffects, currentCard, dropButton, nextCard],
    )

    useEffect(() => {
        if(nextCard!==-1){
            updateStyles();
        }
    },[nextCard, updateStyles])*/

    //SOLUCION 3
    //const headerStylesUpdated = useRef(false);

    useEffect(() => {
        if(nextCard!==-1){
            if(headerStylesUpdated.current === false){
                setHeaderEnable(false);
                headerStylesUpdated.current = true;

                const buttonEffects = [setMainButtonStyle, setGoalsButtonStyle, setPortfolioButtonStyle,
                    setSkillsButtonStyle, setEducationButtonStyle, setContactButtonStyle];
                const currentButtonStyleEffect = buttonEffects[currentCard.current];
                const nextButtonStyleEffect = buttonEffects[nextCard];
                
                currentButtonStyleEffect(dropButton);
                nextButtonStyleEffect(bringButton);
                setTimeout(()=>{
                    nextButtonStyleEffect({zIndex: 7, marginBottom: '13px',
                    backgroundColor: frontCardColor});
                    currentButtonStyleEffect({zIndex: 3, marginBottom: '0px',
                    backgroundColor: backCardColor});
                    setHeaderEnable(true);
                }, 1899)
            }
        }
    },[nextCard, currentCard, bringButton, dropButton, headerStylesUpdated])

    function setNewCard(n){
        if (n === 0){
            if (nextCard !== -1){
                setNextCard(0);
                headerStylesUpdated.current = false;
                bodyStylesUpdated.current = false;
            }
        }
        else if (n === 1){
            setNextCard(1);
            headerStylesUpdated.current = false;
            bodyStylesUpdated.current = false;
        }
        else if (n === 2){
            setNextCard(2);
            headerStylesUpdated.current = false;
            bodyStylesUpdated.current = false;
        }
        else if (n === 3){
            setNextCard(3);
            headerStylesUpdated.current = false;
            bodyStylesUpdated.current = false;
        }
        else if (n === 4){
            setNextCard(4);
            headerStylesUpdated.current = false;
            bodyStylesUpdated.current = false;
        }
        else if (n === 5){
            setNextCard(5);
            headerStylesUpdated.current = false;
            bodyStylesUpdated.current = false;
        }
    }

    return (
        <div className="buttonContainer">
            
            <animated.button 
            className="headerButton mainButton" 
            onClick={()=>headerEnabled?setNewCard(0):null} 
            style={mainButtonStyle}>
                <img src={img_perfil1} alt="Profile" className="profileImage"/>
                <h5 className="nameText">Ignacio Cruz Gross</h5>
            </animated.button>

            <animated.button 
            className="headerButton"
            onClick={()=>headerEnabled?setNewCard(1):null}
            style={goalsButtonStyle}>
                <p className="icon"><BsTrophy/></p>
                <h5 className="buttonText">Objetivos</h5>
            </animated.button>

            <animated.button 
            className="headerButton"
            style={portfolioButtonStyle}
            onClick={()=>headerEnabled?setNewCard(2):null}>
                <p className="icon"><BsFillBriefcaseFill/></p>
                <h5 className="buttonText">Portfolio</h5>
            </animated.button>

            <animated.button 
            className="headerButton"
            style={skillsButtonStyle}
            onClick={()=>headerEnabled?setNewCard(3):null}>
                <p className="icon"><GiSkills/></p>
                <h5 className="buttonText">Habilidades</h5>
            </animated.button>

            <animated.button 
            className="headerButton"
            style={educationButtonStyle}
            onClick={()=>headerEnabled?setNewCard(4):null}>
                <p className="icon"><FaGraduationCap/></p>
                <h5 className="buttonText">Educacion</h5>
            </animated.button>

            <animated.button 
            className="headerButton contactButton"
            style={contactButtonStyle}
            onClick={()=>headerEnabled?setNewCard(5):null}>
                <p className="icon"><BsFillEnvelopeFill/></p>
                <h5 className="buttonText">Contactarse</h5>
            </animated.button>
        </div>
    )
}
