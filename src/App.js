import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { Auth0Provider } from './components/Auth0/react-auth0-wrapper'
import Header from './components/Header/Header';
import RouteNavbar from './components/RouteNavbar/RouteNavbar'
import UserNavbar from './components/UserNavbar/UserNavbar'
import routes from './routes';
import auth0Conf from "./auth_config.json";

import conf from './conf'

import './reset.scss'
import './App.scss';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function App() {
  const { name, tabs } = conf

  return (
    <div className="App">
        <Auth0Provider
          domain={auth0Conf.domain}
          client_id={auth0Conf.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        >
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
      </Auth0Provider>
    </div>
  );
}

export default App;
