import React from 'react';
import '../body.css';
import './portfolioCard.css';
import {Carousel} from 'react-bootstrap';
import NewLandingCvCard from './portfolioCards/NewLandingCvCard';
import FollowMeCard from './portfolioCards/FollowMeCard';
import ReactLogin from './portfolioCards/ReactLogin';
import Facturacion from './portfolioCards/Facturacion';
import Python from './portfolioCards/Python';
import {animated} from 'react-spring';


export default function PortfolioCard({portfolioCardStyle}) {

    /*CARD FLIP ANIMATION
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    })*/

    return (
        <animated.div className="card portfolioCard" style={portfolioCardStyle}>
            <div className='cardContent'>
                <Carousel className='pCarousel' interval={null}>
                    {/*FollowMe Android App*/}
                    <Carousel.Item className='pCarouselItem'>
                        <FollowMeCard/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewLandingCvCard/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReactLogin/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Facturacion/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Python />
                    </Carousel.Item>
                </Carousel>
            </div>
        </animated.div>
    )
}