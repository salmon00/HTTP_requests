import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import FirstPage from './pages/FIRST_API';
import SecondPage from './pages/SECOND_API';
import ThirdPage from './pages/THIRD_API';
import FourthPage from './pages/FOURTH_API';
import FifthPage from './pages/FIFTH_API';


function App () {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/first" component={FirstPage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/fourth" component={FourthPage} />
        <Route exact path="/fifth" component={FifthPage} />
      </Switch>      
    </div> 
  );
}

export default App;