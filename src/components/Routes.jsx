import { Component } from "react";
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Sobre from "./sobre";
import Contato from "./contato";

export default class Routes extends Component{
render(){
    return(
<div>
<BrowserRouter>
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
    </Switch> 
</BrowserRouter>
</div>
);
}
}