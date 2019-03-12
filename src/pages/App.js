import React, { Component } from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Prepare store
import reducers from '../reducers';
import middlewares from '../middlewares';

const Div = styled.div`
.intro-content{
background-color: yellow;   
}
.page{
  margin-top: 58px;
}
.card-meta{
  justify-content: space-around;
  display: flex;
}
`;

// Init Store
const store = createStore(reducers, middlewares);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Div>
        <Routes /> 
      </Div> 
      </Provider>
    );
  }
}

export default App;
