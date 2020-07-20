import React from 'react';


function BtnComponent(props) {
const { status, start, stop, resetDB } = props;
  return (
    <>
      {(status === 0) &&
          <button className='stopwatch-btn stopwatch-btn-gre' onClick={start}>START (m)</button>
      }

      {(status === 1) &&
          <button className='stopwatch-btn stopwatch-btn-red' onClick={stop}>STOP (space)</button>
      }

      {(status === 2) &&
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={resetDB}>AGAIN? (q)</button>
      }
    </>
  );
}

export default BtnComponent;