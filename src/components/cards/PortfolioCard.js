import React from 'react';
import '../body.css';
import './portfolioCard.css';
import {Carousel} from 'react-bootstrap';
import Compostela from './portfolioCards/Compostela';
import NewLandingCv from './portfolioCards/NewLandingCv';
import FollowMe from './portfolioCards/FollowMe';
import ReactLogin from './portfolioCards/ReactLogin';
import Facturacion from './portfolioCards/Facturacion';
import Python from './portfolioCards/Python';
import {animated} from 'react-spring';


export default function PortfolioCard({portfolioCardStyle}) {

    return (
        <animated.div className="card portfolioCard" style={portfolioCardStyle}>
            <div className='cardContent'>
                <Carousel className='pCarousel' interval={null}>
                    {/*FollowMe Android App*/}
                    <Carousel.Item className='pCarouselItem'>
                        <FollowMe/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewLandingCv/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Compostela/>
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