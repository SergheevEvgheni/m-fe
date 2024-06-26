import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generatedClassNames = createGenerateClassName({
    productionPrefix: 'ma'
})

export default (props) => {
  return (
    <StylesProvider generateClassName={generatedClassNames}>
      <Router history={props.history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
