import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../pages/Main';
import Categories from '../pages/Categories';

const Routes = () => (
    <BrowserRouter>    
        <Switch>
            <Route exact path="/" component={Main} />       
            
            {/* <Route path="/posts/:id" component={Detail} />  */}

            <Route path="/categories" component={Categories} />   

        </Switch>
    </BrowserRouter>
);

export default Routes;