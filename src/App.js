import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Firstpage from './pages/1st_API';
import SecondPage from './pages/2nd_API';
import ThirdPage from './pages/3rd_API';
import FourthPage from './pages/4th_API';
import FifthPage from './pages/5th_API';





function App () {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/first" component={Firstpage} />
        <Route exact path="/second" component={SecondPage} />
        <Route exact path="/third" component={ThirdPage} />
        <Route exact path="/fourth" component={FourthPage} />
        <Route exact path="/fifth" component={FifthPage} />
      </Switch>      
    </div> 
  );
}

export default App;
