import React, {Component} from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';



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
  //margin-top: 49px;
}
.post-content{
  padding-top:20px;
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


class App extends Component {

  componentWillMount() {

    this.props.dispatch(handleInitialData())

    // // Get user
    // let user = localStorage.getItem('user') || null;
    // if (user !== null) {
    //   user = JSON.parse(user)
    // } else {
    //   // Define initial user
    //   user = {
    //     id: Math.random().toString(36).substr(-8),
    //     name: 'Visitor',
    //     login: 'guestuser',
    //     template: 'avatar'      }

    //   // Save user on local Storage
    //   localStorage.setItem('user', JSON.stringify(user))
    // }
  }

  render() {
    const {store} = this.props;
    
    return (
        <Div>
          <Routes store={store}/>
        </Div>
    );
  }
}

export default connect() (App);
