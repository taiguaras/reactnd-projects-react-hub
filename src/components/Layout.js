import React, {Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

// Heads up! We using React Static to prerender our docs with server side
// rendering, this is a quite simple solution. For more advanced usage please
// check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR
    ? Responsive.onlyTablet.minWidth
    : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({mobile}) => (
  <Container text>
    <Header
      as='h1'
      content='React Hub'
      inverted
      style={{
      fontSize: mobile
        ? '2em'
        : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile
        ? '1.5em'
        : '3em'
    }}/>
    <Header
      as='h2'
      content='Rolling on redux.'
      inverted
      style={{
      fontSize: mobile
        ? '1.5em'
        : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile
        ? '0.5em'
        : '1.5em'
    }}/>
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow'/>
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({fixed: false})
  showFixedMenu = () => this.setState({fixed: true})

  render() {
    const {children} = this.props
    const {fixed} = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            style={{
            padding: '1em 0em'
          }}
            textAlign='center'
            vertical>
            <Menu
              fixed={fixed
              ? 'top'
              : null}
              inverted={fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                <Menu.Item as='span' link='www.abc.com' active>
                  <Link to={`/`}>Home</Link>
                </Menu.Item>
                <Menu.Item as='span'>
                  <Link to={`/categories`}>Categories</Link>
                </Menu.Item>
                <Menu.Item as='span'>
                  <Link to={`/new-post`}>New Post</Link>
                </Menu.Item>
                <Menu.Item as='span'>
                  <Link to={`/login`}>Log in</Link>
                </Menu.Item>
                <Menu.Item as='span'>
                  <Link to={`/sample`}>Sign up</Link>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Image
                    src="http://taiguaras.xyz/wp-content/uploads/2019/03/favicon.png"
                    size='mini'/>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({sidebarOpened: false})

  handleToggle = () => this.setState({sidebarOpened: true})

  render() {
    const {children} = this.props
    const {sidebarOpened} = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}>
          <Menu.Item as='a' active>
            <Link to={`/`}>Home</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to={`/categories`}>Categories</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to={`/new-post`}>New Post</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to={`/login`}>Log in</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link to={`/sample`}>Sign up</Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={{
            padding: '1em 0em'
          }}
            vertical>
            <Container>
              <Menu pointing primary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar'/>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Image
                    src="http://taiguaras.xyz/wp-content/uploads/2019/03/favicon.png"
                    size='mini'/>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({children}) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

class Layout extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <React.Fragment>
          {/* <Navbar/> */}
          <div className='page'>
            {this.props.children}
          </div>
          <Footer/>
        </React.Fragment>
      </ResponsiveContainer>
    );
  }
}

export default Layout;