import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Button, Image} from 'semantic-ui-react'
import Post from '../components/Post';

class Detail extends Component {
  render() {
    const {post} = this.props;
    console.log(post);
    return (

      <Layout>

          <div className="header">
            <Image
              src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg"/>
          </div>

          <Post iD={this.props.match.params.postId}/>
      </Layout>

    );
  }

}

export default Detail;