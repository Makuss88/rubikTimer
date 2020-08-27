import React from 'react';

const DisplayComponent = (props) => {
  const {time : {m, s, ms}} = props;

  return (
    <div>
      <span className='span-stopwatch'>{(m >= 10) ? m : '0' + m}</span>:
      <span className='span-stopwatch'>{(s >= 10) ? s : '0' + s}</span>:
      <span className='span-stopwatch'>{(ms >= 10) ? ms : '0' + ms}</span>
    </div>     
  );
}

export default DisplayComponent;
