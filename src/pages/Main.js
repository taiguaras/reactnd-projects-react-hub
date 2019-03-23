import React, {Component} from 'react';
import PostList from '../components/PostList';
import {
  Image, Grid, Segment, Menu, Container, Label, Input
} from 'semantic-ui-react'

import {handleAddPost} from '../actions/post'
import {Form} from 'semantic-ui-react'

// import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';
import ContentNav from '../components/ContentNav';
// import { Dropdown, Input } from 'semantic-ui-react'

class Main extends Component {

  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Layout>
        <div className="header">
          <Image
            src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg"/>
        </div>

        <div className="main-page">
          <div className="intro-content"> 
          <h1>Home</h1>                
          </div>

          <div className="post-wrapper">                

          <Container>
            <Grid>
              <Grid.Column stretched width={12}>
                <Segment>
                  <PostList />
                </Segment>
              </Grid.Column>

              <Grid.Column width={4}>
              <Menu vertical>
                  <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                    <Label color='teal'>1</Label>
                    Inbox
                  </Menu.Item>

                  <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                    <Label>51</Label>
                    Spam
                  </Menu.Item>

                  <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                    <Label>1</Label>
                    Updates
                  </Menu.Item>
                  <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                  </Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid>
          </Container>

          </div>
        </div>

      </Layout>
    );

  }
}

export default Main;