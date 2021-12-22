import './App.css';
import {React, useState, useRef, Fragment} from 'react';
import Header from './components/Header';
import Body from './components/Body'
import {animated} from 'react-spring';

function App() {

  const [nextCard, setNextCard] = useState(-1);
  const currentCard = useRef(0);
  const headerStylesUpdated = useRef(true);
  const bodyStylesUpdated = useRef(true);

  return (
    <Fragment>
      <animated.div className='appDiv'>
          <Header setNextCard={setNextCard} nextCard={nextCard} currentCard={currentCard} 
          headerStylesUpdated={headerStylesUpdated} bodyStylesUpdated={bodyStylesUpdated}/>
          <Body nextCard={nextCard} currentCard={currentCard} bodyStylesUpdated={bodyStylesUpdated}/>
          {/*<div style={{color:'red'}}>header</div>
          <div style={{color:'red'}}>body</div>*/}
      </animated.div>
    </Fragment>
  );

}

export default App;
