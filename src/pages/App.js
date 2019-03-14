import React, { Component } from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';

import { connect } from "react-redux";
import { handleGetPosts } from '../actions/postList'

const Div = styled.div`
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
`;



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleGetPosts())
  }

  render() {
    return (      
      <Div>
        <Routes /> 
      </Div> 
    );
  }
}

export default connect()(App);


