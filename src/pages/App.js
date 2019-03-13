import React, { Component } from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';

import { connect } from "react-redux";

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



class App extends Component {
  render() {
    return (      
      <Div>
        <Routes /> 
      </Div> 
    );
  }
}

export default App;


