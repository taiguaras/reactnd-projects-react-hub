import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (

            // <div className="footer">
            //     <div className="container">
            //         <p>Copyright &copy; Design by <a href="http://www.taiguaras.xyz">taiguaras</a></p>
            //     </div>
            // </div>

            <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                    <List.Item as='a' href='/new-post'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Categories' />
                    <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header as='h4' inverted>
                    React Hub
                    </Header>
                    <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            </Segment>

        );
    }


}

export default Footer;