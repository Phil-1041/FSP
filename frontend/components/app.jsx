import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './splash/splash_page';
import NavContainer from './top_nav/nav_container';


const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <Route path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;