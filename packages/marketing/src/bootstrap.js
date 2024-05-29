import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDom.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
    const el = document.getElementById('dev-marketing');
    if (el) mount(el);
}

export {mount};