import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_page';
import SplashNavContainer from './top_nav/splash_nav_container';
import AuthNavContainer from './top_nav/auth_nav_container';
import Modal from './modal/modal'
import Home from './index/user_home_container';
import Video from './video/index_container';
import Footer from './footer/footer';


const App = () => (
  <div>
    <Modal />
    <header>
    <Switch>
      <AuthRoute exact path='/' component={SplashNavContainer} />
      <Route path='/' component={AuthNavContainer} />
    </Switch>
    </header>
    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <Route path='/videos' component={Video} />
      <Route path='/linkedin' component={() => {
        window.location.href = 'https://www.linkedin.com/in/phil-zheng-82a30751/';
        return null;
      }} />
      <AuthRoute path='/' component={Splash} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;