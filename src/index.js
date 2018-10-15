import React from 'react';
import { render } from 'react-dom';
import {Apptips} from './components/Apptips';
import './css/index.css';
class App extends React.Component{
    render(){
        return(
            <Apptips></Apptips>
        )
    }
}
render(
    <App/>,
    document.getElementById('app')
);
