import React from 'react';
import axios from 'axios';

import { url_POST_DB, mounths } from '../../settings/settings';

const FormComponent = (props) => {
  const {time : {m, s, ms}} = props;

  const titleToDB = () => {
    const timeNow = new Date();
    const hour = timeNow.getHours() < 10  ? '0' + timeNow.getHours() : timeNow.getHours();
    const min = timeNow.getMinutes() < 10 ? '0' + timeNow.getMinutes() : timeNow.getMinutes();
    const day = timeNow.getDate();
    const mon = mounths[timeNow.getMonth()];
    const title = hour + ':' + min + ' ' + day + '/' + mon;  
    
    return title;
  };

  const timesToDB = () => {
    const minut = m < 10 ? '0' + m : m;
    const second = s < 10 ? '0' + s : s;
    const milisec = ms < 10 ? '0' + ms : ms;
    const times = minut + ':' + second + ':' + milisec;
    
    return times;
  };

  const create = (event) => {
    // event.preventDefault();
    const timer = {
      title: titleToDB(),
      times: timesToDB(),
    };
    if (timer.times !== '00:00:00'){
      axios.post(url_POST_DB, {
        title: timer.title,
        times: timer.times,
      })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
  
    return (
      <div>
        <button className='create' type="submit" onClick={create}>Create</button>
      </div>
    );
}

export default FormComponent;