import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import './App.css';
import DisplayComponent from './component/Display'
import BtnComponent from './component/Button'
import TimeComponent from './component/Timer';


const App = () => {

  const [time, setTime] = useState({ms:0, s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

useEffect(() => {
  
  document.addEventListener('keyup', keyUp);
  document.addEventListener('keydown', keyDown);
 
  function keyUp (e) {
    if (e.keyCode === 77){
      start()    
    }
    else if (e.keyCode === 81) {
      resetDB()
    }
    else if (e.keyCode === 80) {
      console.log(time.m, time.s, time.ms);
    }
  }
 
  function keyDown (e) {
    if (e.keyCode === 32){
      stop()
    }
  }

  return () =>{
    document.removeEventListener('keyup', keyUp);
    document.removeEventListener('keydown', keyDown);

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

  let updateMiliseconds = time.ms, updateSeconds = time.s, updateMinutes = time.m;

  const run = () => {
    if(updateSeconds === 60){
      updateMinutes ++;
      updateSeconds = 0;  
    }
    if(updateMiliseconds === 100){
      updateSeconds ++;
      updateMiliseconds = 0;
    }
    updateMiliseconds ++;
    return setTime({ms:updateMiliseconds, s:updateSeconds, m:updateMinutes})
  }

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <Grid container spacing ={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className='stopwatch'>
              <div className='header'>
                <h1>TIMER RUBIC!</h1>
              </div>
                <DisplayComponent time = { time }/>
                <BtnComponent status = { status } resetDB = { resetDB } stop = { stop } start={ start } />        
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className='table-timer'>
                <TimeComponent />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
