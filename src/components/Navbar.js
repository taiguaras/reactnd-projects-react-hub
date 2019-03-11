import React from 'react';
import { Container,  Image,  Menu } from 'semantic-ui-react';
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
      </Container>
  </Menu>
);

export default Navbar;