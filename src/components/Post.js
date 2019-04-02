import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, Icon, Image, List, Header, Segment, Divider, Grid, Button, Menu} from 'semantic-ui-react'

import {handleGetPost, handleDeletePost} from '../actions/post';
import { handleGetPostComments } from '../actions/comments';


import { connect } from 'react-redux';
import Moment from 'react-moment';
import CommentExampleMetadata from './CommentSection';
import {handleIncreaseVote, handleDecreaseVote} from '../actions/post';

class Post extends Component {

  state = {
    postId: null
  }

  static propTypes = {
    PostMeta: PropTypes.object.isRequired
  }

  componentDidMount() {
    const postId = this.props.iD
    // console.log('log post will mount =>', this.props)
    //this.props.dispatch(handleGetPost(postId));
    //this.props.dispatch(handleGetPostComments(postId));
  }

  editPost() {
    const postId = this.props.match.params.postId;
    const categoryName = this.props.match.params.categoryName;
    this
      .props
      .history
      .push(`/${categoryName}/${postId}/edit`);
  }
  deletePost() {
    const postId = this.props.iD
    const categoryName = this.props.match.params.categoryName;
    this
      .props
      .dispatch(handleDeletePost(postId));
    this
      .props
      .history
      .push(`/${categoryName}`);
  }

  upVoteLink(post) {
    this.props.dispatch(handleIncreaseVote(post));
    console.log("props INCREASE",post)
  }

  downVoteLink(post){
    this.props.dispatch(handleDecreaseVote(post));
    console.log("props DECREASE",post)
  }
  render() {

 
    const {post, history, comments} = this.props;
    const dateToFormat = '1976-04-19T12:59';     

    // console.log("POST LOG COMMeNTS",comments)

    // Safe
    if (post.loading === false && (Object.keys(post.data).length === 0 || typeof post.data.error !== 'undefined')
    ) {
      history.push('/page-not-found');
      return (<div>Redirecting...</div>);
    }

    if (post.data === undefined) return (<div>LOADING...</div>)

    return (
      <div className='post-content'>
      <Grid container stackable>
          
          <Grid.Row>
            <Grid.Column width={11}>
                    <Menu secondary className="card-meta">
                    <Menu.Item>
                      
                    <a className='item' onClick={() => this.upVoteLink(post.data)}>
                          <Icon name='thumbs up outline'/>
                        </a>
                        <span>{post.data.voteScore}</span>
                        <a className='item' onClick={() => this.downVoteLink(post.data)}>
                          <Icon name='thumbs down outline'/>
                        </a>
                    
                    </Menu.Item>

                    <Menu.Item>
                    <a className='item' onClick={this.handleItemClick}>
                          <Icon name='comment alternate'/>
                          {post.data.commentCount}
                        </a>
                       
                    
                    </Menu.Item>

                  <Menu.Item
                    name='reviews'
                    as="a"
                    content='Edit'
                    icon='edit outline'
                    onClick={this.handleItemClick}
                  />

                  <Menu.Item
                    name='Delete'   
                    as="a"                 
                    content='Delete'
                    icon='trash alternate outline'
                    onClick={this.handleItemClick}
                  />
                </Menu>
              <Header size="large" as="h2">
                <Header.Content>{post.data.title}</Header.Content>
                <Header.Subheader>
                <Moment date={dateToFormat}>{post.timestamp}</Moment> by <a href="#">{post.data.author}</a>
                </Header.Subheader>
                <Header.Subheader>
                <Link to={`/posts/${post.data.category}`}> {post.data.category}</Link>
                </Header.Subheader>
              </Header>

                                    


                    <Divider/>
              {post.data.body}
              <p>
                This blog post shows a few different types of content that's
                supported and styled with Semantic-UI. Basic typesetting, list,
                and code are all supported.
              </p>
              <Divider hidden />
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#root">dis parturient montes</a>, nascetur ridiculus
                mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna
                mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </blockquote>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </p>
              <Header as="h3" size="large">
                Heading
              </Header>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <Header as="h3" size="medium">
                Sub-heading
              </Header>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <Segment secondary>
                <code>Example code block</code>
              </Segment>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa.
              </p>
              <Header size="medium">Sub-heading</Header>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </li>
              </ol>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis.
              </p>
              <Divider />

              <h2>Comments</h2>

              <CommentExampleMetadata comments={comments}></CommentExampleMetadata>

              <Divider hidden/>
            </Grid.Column>
            <Grid.Column width={4} floated="right">
              <Segment secondary>
                <Header as="h4">About</Header>
                <p>
                  Etiam porta <i>sem malesuada magna mollis euismod</i>. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </p>
              </Segment>
              <Header as="h4">Archives</Header>
              <List>
                <List.Item as="a">Septempber 2017</List.Item>
                <List.Item as="a">August 2017</List.Item>
                <List.Item as="a">June 2017</List.Item>
                <List.Item as="a">April 2017</List.Item>
                <List.Item as="a">March 2017</List.Item>
                <List.Item as="a">February 2017</List.Item>
                <List.Item as="a">January 2017</List.Item>
                <List.Item as="a">December 2016</List.Item>
                <List.Item as="a">October 2016</List.Item>
                <List.Item as="a">July 2016</List.Item>
                <List.Item as="a">July 2016</List.Item>
                <List.Item as="a">May 2016</List.Item>
                <List.Item as="a">April 2016</List.Item>
                <List.Item as="a">January 2016</List.Item>
                <List.Item as="a">May 2015</List.Item>
              </List>
              <Header as="h4">Elsewhere</Header>
              <List>
                <List.Item as="a">Github</List.Item>
                <List.Item as="a">Twitter</List.Item>
                <List.Item as="a">Facebook</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Card>
        <Image
          src={post.image
          ? post.image
          : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
        <Card.Content>
          <Card.Header>{post.data.title}</Card.Header>
          <Card.Meta>
            <span className='date'><Moment date={dateToFormat}>{post.timestamp}</Moment></span>
          </Card.Meta>
          <Card.Description>{post.data.body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="card-meta">
            <div>
              <a onClick={() => this.upVoteLink(post.data)}>
                <Icon name='thumbs up outline'/>
              </a>
              <span>{post.data.voteScore}</span>
              <a onClick={() => this.downVoteLink(post.data)}>
                <Icon name='thumbs down outline'/>
              </a>
            </div>

            <a>
              <Icon name='comment alternate'/> {post.data.commentCount}{' '}
               comments
            </a>
          </div>
        </Card.Content>
      </Card>
      </div>
      
    );
  }

}

function mapStateToProps({ categories, post, comments }, props) {
  return {
    categories,
    post,
    comments
  };
}

export default connect(mapStateToProps)(Post);