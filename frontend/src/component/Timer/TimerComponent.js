import React, { Component } from 'react';

class TimerComponent extends Component {
  
  constructor() {
    super()
    this.state = {
      timer: [],
      id:'',
      title: '',
      times: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/')
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        this.setState({
          timer: response
        }) 
      })
  }

  handleSubmit = () => {

    const { title, times } = this.state;  

    fetch('http://127.0.0.1:8000/api/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "title": title,
        "times": times
      })      
    });
  }

  render(){
    const { timer } = this.state;
    
    return( 
      <div>
        <table border='4' align="center">
        <caption>Twoje czasy!</caption>  
          <thead>
            <tr>
              <th>kiedy</th>
              <th>czas</th>
            </tr>
          </thead>
            {timer.map((time) => {
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
      </div>
    )
  }
}

export default TimerComponent;