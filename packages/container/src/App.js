import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generatedClassNames = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
  return (
    <StylesProvider generateClassName={generatedClassNames}>
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    </StylesProvider>
  )
};
