import React from 'react';
import {HashRouter,Switch,Route,Redirect,hashHistory} from 'react-router-dom';

import { Main } from '../pages/Main.js';
import { Information } from '../pages/Information.js';
import { Study } from '../pages/Study.js';
import {Interaction } from '../pages/Interaction.js';
import { My } from '../pages/My.js';

export default class Routeconfig extends React.Component{
    updateHandle(){

    }
    render(){
        return(
            // 上面的exact表示绝对匹配/index,如果不注明exact,则/index还会匹配/index/new等等
            <HashRouter  history={hashHistory} onUpdate={() => {this.updateHandle()}}>
                <Switch>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/information" component={Information}></Route>
                    <Route path="/study" component={Study}></Route>
                    <Route path="/interaction" component={Interaction}></Route>
                    <Route path="/my" component={My}></Route>
                </Switch>
            </HashRouter>
        )
        
    }
}