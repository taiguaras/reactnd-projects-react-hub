import React, { Component } from 'react';
import PostList from '../components/PostList';
import { Button } from 'semantic-ui-react'

import { handleAddPost } from '../actions/post'
import { Form } from 'semantic-ui-react'

// import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
// import { Dropdown, Input } from 'semantic-ui-react'

const ListaUm = [{
    title: 'Welcome to React',
    description:'This is only a post description',
    content:'This is only a post content',
    category:'Capoeira',
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating:'5',
    comments:'8',
    date:'20/02/2019',
    good:'3',
    bad:'2'
  },
  {
    title: 'Bla Bla',
    description:'This is only a post description1',
    content:'This is only a post content1',
    category:'Redux',
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating:'2',
    comments:'68',
    date:'20/02/2016',
    good:'3',
    bad:'2'
  },
  {
    title: 'Terceiro Post',
    description:'This is only a post description12',
    content:'This is only a post content12',
    category:'React',
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    rating:'19',
    comments:'2',
    date:'04/02/2016',
    good:'3',
    bad:'2'
  }
];

class Main extends Component {

  addItem = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddPost(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  onFormSubmit = (e) => {
    // Cancel default event
    e.preventDefault();
    console.log('Triggered submit event');
    console.log('An essay was submitted: ' + e.target);
  }

  handleChange(event) {    
    console.log('Handle change: ' + event.target.value);
  }
    

      render() {

        return(       
            <Layout>
                <div className="main-page">
                    <div className="intro-content"> 
                        <h2>Welcome to React Hub!!</h2>             
                    </div>
                    
                    <Form onSubmit={this.onFormSubmit}>
                      <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' onChange={this.handleChange} placeholder='Title' />
                        <Form.Input fluid label='Body' onChange={this.handleChange} placeholder='Content' />   
                        <Button>Add Post</Button>  
                        <Form.Button>Submit</Form.Button>                   
                      </Form.Group>
                    </Form>
                    <Button>Rating</Button>  
                    <Button >Date</Button>     
                    <PostList Posts={ListaUm} sorted={'date'}/>
                    <PostList Posts={ListaUm} sorted={'rating'}/>
                                       
                </div>    
            </Layout>             
        );
        
    }
}

export default Main;