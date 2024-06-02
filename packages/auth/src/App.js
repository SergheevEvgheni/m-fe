import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generatedClassNames = createGenerateClassName({
    productionPrefix: 'au'
})

export default (props) => {
  return (
    <StylesProvider generateClassName={generatedClassNames}>
      <Router history={props.history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={props.onSignIn} />
          </Route>
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
