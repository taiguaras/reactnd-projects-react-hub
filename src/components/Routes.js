import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Post from '../components/Post';
import Categories from '../pages/Categories';
import PostCtrl from '../pages/PostCtrl';
import Sample from '../pages/Sample';
import LoginForm from '../pages/Login';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>    
        <Switch>
            <Route exact path="/" exact={true} component={Main}/>       
            
            <Route path="/post/:postId" exact={true} component={Detail}/>

            <Route path="/new-post" component={PostCtrl}/>

            <Route path="/category" component={Categories}/>   

            <Route path="/sample" component={Sample} />  

            <Route path="/login" component={LoginForm} />  

        </Switch>
    </BrowserRouter>
);

export default Routes;


