import React, {useState, useEffect} from 'react';
// import TimerComponent from'../component/Timer'
import axios from 'axios';

class Timer extends React.Component{
  state = {
    timers:[]
  }
  
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api')
      .then(res=>{
          this.setState({
            timers: res.data
          });
          console.log(res.data);
      })
  }
}

const TableComponent = (props) =>  {
  
  const [featch, setFeatch] = useState([])

  useEffect(() => {
    setFeatch(props.timers)
  },[props.timers])
  
  const renderTimer = (timer, index) => {
  
    if (!timer){
    return null
  }

  console.log('index')
    return (
      <tr key = {index}>
        <td>{timer.title}</td>
        <td>{timer.times}</td>
      </tr>
    )
  }

  return (
    
      <table className='table-center'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {renderTimer.map((state) => Timer.state)}
        </tbody>
      </table>
  );
}

export default TableComponent;