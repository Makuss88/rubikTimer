import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimerComponent = () => {
  
  const [fetchedTimer, setFetchedTimer] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/')
    .then((response) => {
        setFetchedTimer(response.data);
    })
    .catch(err => setError('SORRY, NO DATA!'));
  }, []);

  return ( 
    <div>
      <table border='4' align="center">
      <caption>Twoje czasy!</caption>  
        <thead>
          <tr>
            <th>kiedy</th>
            <th>czas</th>
          </tr>
        </thead>
          {fetchedTimer && fetchedTimer.map((time) => {
            return (
              <tbody key={time.id}>
                <tr>
                  <td>{time.title}</td> 
                  <td>{time.times}</td>
                </tr>
              </tbody>
            )
          })
          }
      </table>
      {error && (
        <p className='p-error'> {error} </p>
      )}
    </div>
  );
}

export default TimerComponent;