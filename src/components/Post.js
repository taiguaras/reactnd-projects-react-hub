import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Icon, Image} from 'semantic-ui-react'

import {handleGetPost, handleDeletePost} from '../actions/post';
import { connect } from 'react-redux';
// import {handleIncreaseVote, handleDecreaseVote} from '../actions/post';

class Post extends Component {

  state = {
    postId: null
  }

  static propTypes = {
    PostMeta: PropTypes.object.isRequired
  }

  componentDidMount() {
    const postId = this.props.iD
    console.log('log post will mount =>', this.props)
    this.props.dispatch(handleGetPost(postId));
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

  render() {

    const {post, history} = this.props;

    // console.log("props POST",post)

    // Safe
    if (post.loading === false && (Object.keys(post.data).length === 0 || typeof post.data.error !== 'undefined')) {
      history.push('/page-not-found');
      return (
        <div>Redirecting...</div>
      );
    }

    if (post.data === undefined) return (<div>LOADING...</div>)

    return (
      <Card>
        <Image
          src={post.image
          ? post.image
          : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
        <Card.Content>
          <Card.Header>{post.data.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{post.data.date}</span>
          </Card.Meta>
          <Card.Description>{post.data.body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="card-meta">
            <div>
              <a>
                <Icon name='thumbs up outline'/>
              </a>
              <span>{post.data.voteScore}</span>
              <a>
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
      
    );
  }

}

function mapStateToProps({ categories, post }, props) {
  return {
    categories,
    post
  };
}

export default connect(mapStateToProps)(Post);