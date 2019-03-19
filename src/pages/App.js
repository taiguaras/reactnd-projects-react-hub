import React, {Component} from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Prepare store
import reducers from '../reducers';
import middlewares from '../middlewares';

const Div = styled.div `
a.item{
align-self: center;
}
.intro-content{
text-align: center;
padding: 5px;  
margin: 20px;
}
.page{
  margin-top: 49px;
}
.header img{
  width: 100%;
}
.card-meta{
  justify-content: space-around;
  display: flex;
}
.card-meta i{
  margin:2px;
}
.card-meta span{
  margin:5px;
}
.ui.card {
  //width: 80%;
  margin: auto;
  margin: 20px
}
`;

// Init Store
const store = createStore(reducers, middlewares);

class App extends Component {

  componentWillMount() {
    // Get user
    let user = localStorage.getItem('user') || null;
    if (user !== null) {
      user = JSON.parse(user)
    } else {
      // Define initial user
      user = {
        id: Math.random().toString(36).substr(-8),
        name: 'Udacity Student',
        login: 'udacityStudent',
        template: 'cerulean'
      }

      // Save user on local Storage
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Div>
          <Routes store={store}/>
        </Div>
      </Provider>
    );
  }
}

export default App;
