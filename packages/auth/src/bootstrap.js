import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App';

const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) history.listen(onNavigate);

    ReactDom.render(<App history={history} onSignIn={onSignIn} />, el)

    return {
        onParentNavigate: (location) => {
            if (history.location.pathname !== location.pathname) history.push(location.pathname);
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-auth');
    if (el) mount(el, {defaultHistory: createBrowserHistory()});
}

export {mount};