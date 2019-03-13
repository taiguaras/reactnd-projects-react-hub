import React, { Component } from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';

import { connect } from "react-redux";

const Div = styled.div`
.intro-content{
text-align: center;
padding: 5px;  
margin: 20px;
}
.page{
  margin-top: 58px;
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


