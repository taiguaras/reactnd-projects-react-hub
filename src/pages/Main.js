import React, {Component} from 'react';
import PostList from '../components/PostList';
import {
  Image
} from 'semantic-ui-react'

import {handleAddPost} from '../actions/post'
import {Form} from 'semantic-ui-react'

// import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';
// import { Dropdown, Input } from 'semantic-ui-react'

class Main extends Component {

  componentDidMount() {}

  render() {

    return (
      <Layout>
        <div className="header">
          <Image
            src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg"/>
        </div>

        <div className="main-page">
          <div className="intro-content">
            <h2>Welcome to React Hub!!</h2>

          </div>

          <div className="post-wrapper">

          <PostList />

          </div>
        </div>

      </Layout>
    );

  }
}

export default Main;