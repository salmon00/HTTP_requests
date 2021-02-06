import React from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar'



class Third extends React.Component {
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
      <div className="third">
        <Navbar />
        <div className="heading">Third API</div>
        <div className="row-container">
          {this.state.data.map(({id, title, thumbnailUrl}) => (
              <div className="cards" key={id}>
                <div className="title">{title}</div>
                <div className="image">
                  <img src={thumbnailUrl} />
                </div>
              </div>
            ))}          
        </div>
      </div>
    );
  }  
}

export default Third;








