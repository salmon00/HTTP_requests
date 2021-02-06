import React from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar'



class Fifth extends React.Component {
  constructor () {
    super()
    this.state = { 
      data: [] 
    }
  } // 2nd storing data

  async componentDidMount() {
    const response = await fetch('https://api.mocki.io/v1/b043df5a'); // 1st Fetching data
    const json = await response.json();
    this.setState({ data: json }); // store data
  }


  render () {
    return ( // showing data in UI
      <div className="fifth">
        <Navbar />
        <div className="heading">Fifth API</div>
        <div className="row-container">
          {this.state.data.map(({name, city}) => (
              <div className="cards">
                <div className="title">Name: {name}</div>
                <div className="city">City: {city}</div>
              </div>
            ))}          
        </div>
      </div>
    );
  }  
}

export default Fifth;








