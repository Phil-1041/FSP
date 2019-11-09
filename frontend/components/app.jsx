import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_page';
import SplashNavContainer from './top_nav/splash_nav_container';
import AuthNavContainer from './top_nav/auth_nav_container';
import Modal from './modal/modal'
import Home from './index/user_home_container';


const App = () => (
  <div>
    <Modal />
    <header>
      <Route exact path='/' component={SplashNavContainer} />
    </header>
    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <Route path='/linkedin' component={() => {
        window.location.href = 'https://www.linkedin.com/in/phil-zheng-82a30751/';
        return null;
      }} />
      <Route path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;