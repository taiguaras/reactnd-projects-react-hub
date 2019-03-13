import React from 'react';
import { Container,  Image,  Menu, Icon, Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src={'./assets/logo.png'} style={{ marginRight: '1.5em' }} />
          React Hub
        </Menu.Item>      
        <Menu.Item as="a"><Link to={`/`}>Home</Link></Menu.Item>      
        <Menu.Item as="a"><Link to={`/categories`}>Categories</Link></Menu.Item>
        <Menu.Item as="a"><Link to={`/new-post`}>Add New Post</Link></Menu.Item>
        <Menu.Item as="a"><Link to={`/post/23456`}>Detail Test</Link></Menu.Item> 

                <Menu.Menu position='right'>

          <Dropdown item text='Sort posts by'>
          
            <Dropdown.Menu>
              <Dropdown.Item>Date</Dropdown.Item>
              <Dropdown.Item>Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>  
      </Container>
  </Menu>
);

export default Navbar;