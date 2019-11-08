import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //debugging remove from window after
  window.getState = store.getState 
  window.login = login
  window.signup = signup
  const demoUser = { email: 'demo2@email.com', name: 'demo', password: 'movieo' }
  window.demoUser = demoUser
  //for debugging


  ReactDom.render(<Root store={store}>React Is Working</Root>, root)
})