import './App.css';
import {React, useState, useRef, Fragment} from 'react';
import Header from './components/Header';
import Body from './components/Body'
import MobileAlert from './components/MobileAlert'
import {animated} from 'react-spring';

function App() {

  const [nextCard, setNextCard] = useState(-1);
  const currentCard = useRef(0);
  const headerStylesUpdated = useRef(true);
  const bodyStylesUpdated = useRef(true);

  window.screen.orientation.lock('landscape');

  return (
    <Fragment>
      <animated.div className='appDiv'>
          <MobileAlert/>
          <Header setNextCard={setNextCard} nextCard={nextCard} currentCard={currentCard} 
          headerStylesUpdated={headerStylesUpdated} bodyStylesUpdated={bodyStylesUpdated}/>
          <Body nextCard={nextCard} currentCard={currentCard} bodyStylesUpdated={bodyStylesUpdated}/>
      </animated.div>
    </Fragment>
  );

}

export default App;
