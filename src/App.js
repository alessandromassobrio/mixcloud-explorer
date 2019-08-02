import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Warning from './components/layout/Warning';
import MixcloudState from './context/mixcloud/MixcloudState';
import WarnState from './context/warning/WarnState';

import './App.css';

const App = () => {
  return (
    <MixcloudState>
    <WarnState>
          <Router>
            <div className='App'>
              <Navbar />
              <div className='container'>
                <Warning />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route component={NotFound} />
                  </Switch>
              </div>
            </div>
          </Router>
        </WarnState>
    </MixcloudState>
  );
};

export default App;
