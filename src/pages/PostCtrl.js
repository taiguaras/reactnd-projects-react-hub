import React, {Fragment, Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {Form} from "semantic-ui-react";
import Layout from '../components/Layout';

import {Button, Segment, Header, Image, Container} from 'semantic-ui-react'
import PostForm from "../components/PostForm";
import { handleAddPost, handleGetPost, handleEditPost } from "../actions/post";


class PostCtrl extends Component {

  submit = data => {
    // print the form values to the console
    console.log("Printando valores aqui postSubmitted",data)

      const postData = {
                        ...data,
                        id: Math.random().toString(36).substr(-10),
                        timestamp: Date.now(),
                        voteScore: 0 //not working
                      }
      this.props.dispatch(handleAddPost(postData));
    
  }

  render(){
    return(
      <Layout>
      <div className="categories-page">
        <Fragment>
          <Container>
            <PostForm onSubmit={this.submit} />
          </Container>
        </Fragment>
        
      </div>
    </Layout>
    );
  }

}


function mapStateToProps({ categories, postData }, props) {
  return {
    categories,
    postData
  };
}
export default connect(mapStateToProps)(PostCtrl);





