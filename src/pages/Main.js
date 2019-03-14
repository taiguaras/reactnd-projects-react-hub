import React, {Component} from 'react';
import PostList from '../components/PostList';
import {
  Button,
  Segment,
  Header,
  Image,
  Container,
  Dropdown,
  Input
} from 'semantic-ui-react'

import {handleAddPost} from '../actions/post'
import {Form} from 'semantic-ui-react'

// import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';
// import { Dropdown, Input } from 'semantic-ui-react'

const ListaUm = [
  {
    title: 'Welcome to React',
    description: 'This is only a post description',
    content: 'This is only a post content',
    category: 'Capoeira',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating: '5',
    comments: '8',
    date: '20/02/2019',
    good: '3',
    bad: '2'
  }, {
    title: 'Bla Bla',
    description: 'This is only a post description1',
    content: 'This is only a post content1',
    category: 'Redux',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating: '2',
    comments: '68',
    date: '20/02/2016',
    good: '3',
    bad: '2'
  }, {
    title: 'Terceiro Post',
    description: 'This is only a post description12',
    content: 'This is only a post content12',
    category: 'React',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating: '19',
    comments: '2',
    date: '04/02/2016',
    good: '3',
    bad: '2'
  }
];

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

            <Dropdown
              text='Filter Posts'
              icon='filter'
              floating
              labeled
              button
              className='icon'>
              <Dropdown.Menu>
                <Input icon='search' iconPosition='left' className='search'/>
                <Dropdown.Divider/>
                <Dropdown.Header icon='tags' content='Tag Label'/>
                <Dropdown.Menu scrolling>
                  <Dropdown.Item>Rating</Dropdown.Item>
                  <Dropdown.Item>Date</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="post-wrapper">

          <PostList Posts={ListaUm} sorted={'date'}/>
          <PostList Posts={ListaUm} sorted={'rating'}/>

          </div>
        </div>

      </Layout>
    );

  }
}

export default Main;