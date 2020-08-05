import React from 'react';


function DisplayComponent(props) {

  const {time : {m, s, ms}} = props

  return (
    <div>
      <span>{(m >= 10) ? m : '0' + m}</span>&nbsp;:&nbsp;
      <span>{(s >= 10) ? s : '0' + s}</span>&nbsp;:&nbsp;
      <span>{(ms >= 10) ? ms : '0' + ms}</span>
    </div>     
  );
}

export default DisplayComponent;
