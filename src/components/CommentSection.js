import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Comment, Icon } from 'semantic-ui-react'
import {handleIncreaseVote, handleDecreaseVote} from '../actions/post';

class CommentExampleMetadata extends Component {


  componentDidMount(){
    console.log('montou');
  }

  render(){

    const {post,history} = this.props;

    if (post.data === undefined) return (<div>LOADING...</div>)

      return (

        <Comment.Group>
          <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
            <Comment.Content>
              <Comment.Author>Stevie Feliciano</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div>
                  <Icon name='star' />
                  5 Faves
                </div>
              </Comment.Metadata>
              <Comment.Text>
                Hey guys, I hope this example comment is helping you read this documentation.
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        );
  }
}



export default CommentExampleMetadata;