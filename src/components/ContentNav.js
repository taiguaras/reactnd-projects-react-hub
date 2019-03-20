import React, { Component } from 'react'
import { Menu, Dropdown, Input, Container } from 'semantic-ui-react'

export default class ContentNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Container>

            <Dropdown
            text='Filter Posts'
            icon='filter'
            floating
            labeled
            button
            className='icon'>
            <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Sort by'/>
                <Dropdown.Menu scrolling>
                <Dropdown.Item>Rating</Dropdown.Item>
                <Dropdown.Item>Date</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Menu>
            </Dropdown> 

            <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
            Rating
            </Menu.Item>

            {/* <Menu.Menu position='right'>
                <Input icon='search' iconPosition='right' className='search'/> 
            </Menu.Menu> */}
        </Container>
      </Menu>
    )
  }
}