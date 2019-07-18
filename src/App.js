import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/Header';
import RouteNavbar from './components/RouteNavbar/RouteNavbar'
import UserNavbar from './components/UserNavbar/UserNavbar'
import routes from './routes';

import conf from './conf'

import './reset.scss'
import './App.scss';

function App() {
  const { name, tabs } = conf

  return (
    <div className="App">
      <p className="not-supported">
        This device is not supported.
        A screen width of at least 220 pixels is required.
      </p>
      <Router>
        <div id='page-root'>
          <UserNavbar />
          <Header name={name}/>
          <RouteNavbar tabs={tabs}/>
          {routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
