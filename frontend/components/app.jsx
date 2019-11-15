import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_page';
import SplashNavContainer from './top_nav/splash_nav_container';
import AuthNavContainer from './top_nav/auth_nav_container';
import Modal from './modal/modal'
import Home from './index/user_home_container';
import videoIndex from './video/index_container';
import videoShow from './video/show_container';
import videoUpload from './upload/video_upload_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Modal />
    <header>
    <Switch>
      <AuthRoute exact path='/' component={SplashNavContainer} />
      <ProtectedRoute path='/' component={AuthNavContainer} />
    </Switch>
    </header>
    <Switch>
      <ProtectedRoute path='/home' component={Home} />
      <ProtectedRoute exact path='/videos' component={videoIndex} />
      <ProtectedRoute exact path='/upload' component={videoUpload} />
      <ProtectedRoute path='/video/:videoId' component={videoShow} />
      <Route path='/linkedin' component={() => {
        window.location.href = 'https://www.linkedin.com/in/phil-zheng-82a30751/';
        return null;}} 
      />
      <AuthRoute path='/' component={Splash} />
    </Switch>
    <footer>
      <AuthRoute exact path='/' component={Footer}/>
    </footer>
  </div>
);

export default App;