import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { url_GET_DB } from '../../settings/settings'

const TimerComponent = () => {
  
  const [fetchedTimer, setFetchedTimer] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url_GET_DB)
    .then((response) => {
        setFetchedTimer(response.data);
    })
    .catch(err => setError('SORRY, NO DATA!'));
  }, []);

  return ( 
    <div>
      <table border='4' align="center">
      <caption>Your Time!</caption>  
        <thead>
          <tr>
            <th className='th'>Date</th>
            <th className='th'>Time</th>
          </tr>
        </thead>
  {fetchedTimer.map((time) => (
        <tbody key={time.id}>
          <tr className='tr'>
            <td className='td'>{time.title}</td> 
            <td className='td'>{time.times}</td>
          </tr>
        </tbody>
    )
  )}
      </table>
      {error && (
        <p className='p-error'> {error} </p>
      )}
    </div>
  );
}

export default TimerComponent;