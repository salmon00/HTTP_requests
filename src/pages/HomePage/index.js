import React from 'react';
import Navbar from '../../components/Navbar';

import './styles.scss';


const HomePage = () => {    
  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="heading">
          Welcome!
        </div>
      </div>
    </div>         
  )
} 

export default HomePage;