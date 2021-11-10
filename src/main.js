import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Landing';
import signup from './SignupPage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/signup' component={signup}></Route>
    </Switch>
  );
}

export default Main;