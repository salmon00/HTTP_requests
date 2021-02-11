import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

// Class Component
class Navbar extends React.Component{
    
  render () {
    // our presentational part
    return (
      <div className="navbar-container"> 
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/">Home</Link>
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/first">First</Link> 
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/second">Second</Link> 
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/third">Third</Link> 
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/fourth">Fourth</Link> 
        <Link style={{color:`black`, textDecoration:`none`, textTransform:`uppercase`, fontSize:`30px`, fontFamily:`serif`}} to="/fifth">Fifth</Link> 
      </div>      
    )
  }  
}

export default Navbar;