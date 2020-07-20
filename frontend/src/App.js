import React, { useState, useEffect } from 'react';
import './App.css';
import DisplayComponent from './component/Display'
import BtnComponent from './component/Button'


function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

// TODO dać w use effect i usuwac event listener kiedy komponent jest unmount
useEffect(() => {
  
  document.addEventListener('keyup', statusbar);

  function statusbar (event) {
    if (event.keyCode === 77){
      start()    
    }
    else if (event.keyCode === 32) {
      stop()
    }
    else if (event.keyCode === 81) {
      resetDB()
    }
    else if (event.keyCode === 80) {
      console.log(time.m, time.s, time.ms);
    }
  }
  return () =>{
    document.removeEventListener('keyup', statusbar);
  }
})

  const start = () => {
    clearInterval(interv)
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resetDB = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0})
  };

  // var jest zly, naprawione
  let updMs = time.ms, updS = time.s, updM = time.m;

  const run = () => {
    if(updS === 60){
      updM ++;
      updS = 0;  
    }
    if(updMs === 100){
      updS ++;
      updMs = 0;
    }
    updMs ++;
    return setTime({ms:updMs, s:updS, m:updM})
  }

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <div className='header'>
            <h1>TIMER RUBIC!</h1>
          </div>
          <DisplayComponent time = { time }/>
          <BtnComponent status = { status } resetDB = { resetDB } stop = { stop } start={ start } />
        </div>
      </div>
    </div>
  );
}

export default App;
