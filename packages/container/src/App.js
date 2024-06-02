import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));


const generatedClassNames = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setSignIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generatedClassNames}>
        <Router history={history}>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setSignIn(false)} />
                <Suspense fallback={<Progress />}>
                  <Switch>
                    <Route path="/auth" component={AuthApp}>
                      <AuthApp onSignIn={() => setSignIn(true)} />
                    </Route>
                    <Route path="/dashboard">
                      {!isSignedIn && <Redirect to='/' />}
                      <DashboardApp isSignedIn={isSignedIn} />
                    </Route>
                    <Route path="/">
                      <MarketingApp isSignedIn={isSignedIn} />
                    </Route>
                  </Switch>
                </Suspense>
            </div>
        </Router>
    </StylesProvider>
  )
};
