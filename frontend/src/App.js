import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";

import DisplayComponent from './component/Display';
import BtnComponent from './component/Button';
import TableComponent from './component/Table';
import FormComponent from './component/Form';
import ResolveCubeComponent from './component/ResolveCube';

import { keyM, keySpace, keyP, keyQ} from './settings/settings'

import './App.css';

const App = () => {
  const [time, setTime] = useState({ms:0, s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    document.addEventListener('keyup', keyUp);
    document.addEventListener('keydown', keyDown);
  
    return () =>{
      document.removeEventListener('keyup', keyUp);
      document.removeEventListener('keydown', keyDown);
    };
  });

  const keyUp = (e) => {
    if (e.keyCode === keyM){
      start(); 
    } else if (e.keyCode === keyQ) {
      resetDB();
    } else if (e.keyCode === keyP) {
      console.log(time.m, time.s, time.ms);
    }
  }

  const keyDown = (e) => {
    if (e.keyCode === keySpace){
      stop();
    }
  }

  const start = () => {
    clearInterval(interv);
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
    setTime({ms:0, s:0, m:0});
  };

  let currentMiliseconds = time.ms;
  let currentSeconds = time.s;
  let currentMinutes = time.m;

  const run = () => {
    if(currentSeconds === 60){
      currentMinutes ++;
      currentSeconds = 0;  
    }
    if(currentMiliseconds === 99){
      currentSeconds ++;
      currentMiliseconds = -1;
    }
    currentMiliseconds ++;
    return setTime({ms:currentMiliseconds, s:currentSeconds, m:currentMinutes})
  };

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ResolveCubeComponent />
          </Grid>
          <Grid item xs={4}>
            <div className='stopwatch'>
              <div className='header'>
                <h1>TIMER RUBIC!</h1>
              </div>
                <DisplayComponent time={ time }/>
                <BtnComponent status={ status } resetDB={ resetDB } stop={ stop } start={ start } />        
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className='table-timer'>
                <TableComponent />
                <FormComponent time={ time } />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
