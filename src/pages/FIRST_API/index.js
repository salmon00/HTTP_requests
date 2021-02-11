import React from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


class First extends React.Component {
  constructor () {
    super()
    this.state = { 
      data: [] 
    }
  } // 2nd storing data

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // 1st Fetching data
    const json = await response.json();
    this.setState({ data: json }); // store data
  }


  render () {
    return ( // showing data in UI
      <div className="first">
        <Navbar />
        <div className="heading">First API</div>
        <div className="row-container">
          {
            this.state.data.length ? (
              this.state.data.slice(0, 50).map(({id, title, url}) => (
                <div className="cards" key={id}>
                  <div className="title">{title}</div>
                  <div className="image">
                    <img src={url} alt="..." />
                  </div>
                </div>
              ))
            ) : (<div className="loading">Loading...</div>)              
          }          
        </div>
      </div>
    );
  }  
}

export default First;