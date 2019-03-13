import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Categories from '../pages/Categories';
import PostCtrl from '../pages/PostCtrl';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>    
        <Switch>
            <Route exact path="/" component={Main}/>       
            
            <Route path="/post/:id" component={Detail}/>

            <Route path="/new-post" component={PostCtrl}/>

            <Route path="/categories" component={Categories} />   

        </Switch>
    </BrowserRouter>
);

export default Routes;


