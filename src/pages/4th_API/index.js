import React from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar'



class Fourth extends React.Component {
  constructor () {
    super()
    this.state = { 
      data: [] 
    }
  } // 2nd storing data

  async componentDidMount() {
    const response = await fetch('https://fakestoreapi.com/products'); // 1st Fetching data
    const json = await response.json();
    this.setState({ data: json }); // store data
  }


  render () {
    return ( // showing data in UI
      <div className="fourth">
        <Navbar />
        <div className="heading">Fourth API</div>
        <div className="container">
          {this.state.data.map(({id, title, price, image}) => (
              <div className="card" key={id}>
                <div className="title">{title}</div>
                <div className="price">Price: {price}</div>
                <div className="img"><img src={image}></img></div>
              </div>
            ))}          
        </div>
      </div>
    );
  }  
}

export default Fourth;








