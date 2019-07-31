import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import MixcloudState from './context/mixcloud/MixcloudState';

import './App.css';

const App = () => {
  return (
    <MixcloudState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </Router>
    </MixcloudState>
  );
};

export default App;
