import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));


const generatedClassNames = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setSignIn] = useState(false);

  return (
    <StylesProvider generateClassName={generatedClassNames}>
        <BrowserRouter>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setSignIn(false)} />
                <Suspense fallback={<Progress />}>
                  <Switch>
                    <Route path="/auth" component={AuthApp}>
                      <AuthApp onSignIn={() => setSignIn(true)} />
                    </Route>
                    <Route path="/">
                      <MarketingApp isSignedIn={isSignedIn} />
                    </Route>
                  </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    </StylesProvider>
  )
};
