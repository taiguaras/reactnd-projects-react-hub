import React, {Component} from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {Image} from 'semantic-ui-react'
import Post from '../components/Post';

import {handleGetPost} from '../actions/post';

class Detail extends Component {

  state = {
    postId: null
  }

  componentWillMount() {
    const postId = this.props.match.params.postId
    console.log('DETAIL WILL MOUNT - PROPS', this.props)
    this.props.dispatch(handleGetPost(postId));    
  }

  componentDidMount() {
    console.log('DETAIL DID MOUNT - PROPS', this.props)
  }


  render() {
    const {post} = this.state;
    console.log('DETAIL rendering Post',post);
    return (

      <Layout>

          <div className="header">
            <Image
              src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg"/>
          </div>

          <Post post={post} iD={this.props.match.params.postId}/>
      </Layout>

    );
  }

}

function mapStateToProps({ categories, post }, props) {
  return {
    categories,
    post
  };
}

export default connect(mapStateToProps)(Detail);