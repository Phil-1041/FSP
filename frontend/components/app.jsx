import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './splash/splash_page';
import NavContainer from './top_nav/nav_container';
import LoginFormContainer from './session_form/login_form_container'
import Modal from './modal/modal'


const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      {/* <NavContainer /> */}
    </header>
    <Switch>
      <Route path='/log_in' component={LoginFormContainer} />
      {/* <Route path='/' component={Splash} /> */}
    </Switch>
  </div>
);

export default App;