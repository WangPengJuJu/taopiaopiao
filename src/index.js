import React from 'react';
import { render } from 'react-dom';
import { Main } from './pages/Main.js';
import route from './route/index.js';
import { AppContainer } from 'react-hot-loader';
import './css/index.css';
const renderFun = (Component) => {
    render(
        <AppContainer>
                <Component/>
        </AppContainer>,
        document.getElementById('app')
    )
};

if(module.hot){
    module.hot.accept('./route/index.js',() => {
        renderFun(route);
    });
    
}
renderFun(route);
