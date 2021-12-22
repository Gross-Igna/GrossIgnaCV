import './App.css';
import {React, useState, useRef, Fragment} from 'react';
import Header from './components/Header';
import Body from './components/Body'
import {animated} from 'react-spring';

function App() {

  const [nextCard, setNextCard] = useState(-1);
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <Fragment>
      <animated.div className='appDiv'>
          <Header setNextCard={setNextCard} nextCard={nextCard} currentCard={currentCard}/>
          <Body nextCard={nextCard} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
          {/*<div style={{color:'red'}}>header</div>
          <div style={{color:'red'}}>body</div>*/}
      </animated.div>
    </Fragment>
  );

}

export default App;
