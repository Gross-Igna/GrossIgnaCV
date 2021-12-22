import {React, Fragment, useState, useEffect} from 'react'
import './body.css';
import {useSpring} from 'react-spring';
import MainCard from './cards/MainCard';
import GoalsCard from './cards/GoalsCard';
import PortfolioCard from './cards/PortfolioCard';
import SkillsCard from './cards/SkillsCard';
import EducationCard from './cards/EducationCard';
import ContactCard from './cards/ContactCard';

export default function Body({currentCard, nextCard, bodyStylesUpdated}) {

    const backCardColor = '#140029';
    const frontCardColor = '#1a0036';
    const droppingCardColor = '#16002e';

    const dropCard = useSpring({
        to:[
            {y:'3.8vh', zIndex: 6, position:'absolute', width: '79.75vw', 
            backgroundColor:frontCardColor, boxShadow: '15px -5px 20px 5px #06011a', 
            marginLeft: '10vw', config:{duration:0}},

            {y: '85vh', backgroundColor: droppingCardColor,
            marginLeft: '12vw', width: '75.5vw',
            zIndex: 3, position:'absolute',
            boxShadow: '15px -5px 50px 5px #06011a',
            config:{mass: 1, tension: 170, friction: 26}},

            {y: '4.6vh', backgroundColor: backCardColor, 
            marginLeft: '12vw', width: '75.5vw',
            zIndex: 3, position:'absolute',
            boxShadow: '15px -5px 0px 0px #00000000',
            config:{mass: 1, tension: 170, friction: 26}}
            ],
            from:{y:'0%', zIndex: 6, position:'relative', backgroundColor:frontCardColor,
            width: '79.75vw', boxShadow: '15px -5px 20px 5px #06011a',
            marginLeft: '10vw'}
        });

const bringCard = useSpring({
        to:[
            {zIndex:4, backgroundColor: backCardColor, top:'0%',
            position:'relative', boxShadow: '5px 5px 20px 0px #06011a',
            width: '75.5vw', marginLeft: '12%',
            config:{duration:0}},

            {zIndex:6, backgroundColor: frontCardColor,
            width:'79.75vw', marginLeft: '10vw' , delay: 300,
            boxShadow: '15px -5px 20px 5px #06011a',
            config:{mass: 1, tension: 180, friction: 12}}
            ],
            from:{zIndex: 3, position:'absolute', top:'120%', 
            backgroundColor:backCardColor, boxShadow: '5px 5px 20px 0px #06011a'}
        });

    const [mainCardStyle, setMainCardStyle] = useState(
        {zIndex: 6, position:'relative', backgroundColor:frontCardColor,
        boxShadow: '15px -5px 20px 5px #06011a'});
    const [goalsCardStyle, setGoalsCardStyle] = 
    useState({zIndex: 3, position:'absolute', top:'120%', backgroundColor:backCardColor});
    const [portfolioCardStyle, setPortfolioCardStyle] = 
    useState({zIndex: 3, position:'absolute', top:'120%', backgroundColor:backCardColor});
    const [skillsCardStyle, setSkillsCardStyle] = 
    useState({zIndex: 3, position:'absolute', top:'120%', backgroundColor:backCardColor});
    const [educationCardStyle, setEducationCardStyle] = 
    useState({zIndex: 3, position:'absolute', top:'120%', backgroundColor:backCardColor});
    const [contactCardStyle, setContactCardStyle] = 
    useState({zIndex: 3, position:'absolute', top:'120%', backgroundColor:backCardColor});

    
    //Executes when nextCard is changed
    useEffect(() => {
        if(nextCard!==-1){
            if(bodyStylesUpdated.current === false){
                bodyStylesUpdated.current = true;

                const cardEffects = [setMainCardStyle, setGoalsCardStyle, setPortfolioCardStyle,
                    setSkillsCardStyle, setEducationCardStyle, setContactCardStyle];
                const currentCardStyleEffect = cardEffects[currentCard.current];
                const nextCardStyleEffect = cardEffects[nextCard];

                nextCardStyleEffect(bringCard);
                currentCardStyleEffect(dropCard);
                setTimeout(()=>{
                    nextCardStyleEffect({zIndex:4, backgroundColor: frontCardColor, top:'0%',
                    position:'relative', boxShadow: '15px -5px 20px 5px #06011a'});
                    currentCardStyleEffect({zIndex:3, backgroundColor: backCardColor,
                    position: 'absolute', top:'120%'});
                    currentCard.current = nextCard;
                }, 1900)
            }
        }
    },[nextCard, currentCard, bringCard, dropCard, bodyStylesUpdated])

    return (
        <Fragment>
            <MainCard mainCardStyle={mainCardStyle}/>
            <GoalsCard goalsCardStyle={goalsCardStyle}/>
            <PortfolioCard portfolioCardStyle={portfolioCardStyle}/>
            <SkillsCard skillsCardStyle={skillsCardStyle}/>
            <EducationCard educationCardStyle={educationCardStyle}/>
            <ContactCard contactCardStyle={contactCardStyle}/>
        </Fragment>
    )

}