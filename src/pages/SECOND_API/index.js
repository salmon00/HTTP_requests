import React from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


class Second extends React.Component {
  constructor () {
    super()
    this.state = { 
      data: [] 
    }
  } // 2nd storing data

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // 1st Fetching data
    const json = await response.json();
    this.setState({ data: json }); // store data
  }


  render () {
    return ( // showing data in UI
      <div className="second">
        <Navbar />
        <div className="heading">Second API</div>
        <div className="row-container">
          {
            this.state.data.length ? (
              this.state.data.map(({ id, title }) => (
                <div className="cards" key={id}>
                  <div className="title">{title}</div>
                </div>
              ))
            ) : (<div>Loading...</div>)              
          }          
        </div>
      </div>
    );
  }  
}

export default Second;