import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Comment, Icon, Input, Button } from 'semantic-ui-react'
import {handleIncreaseVote, handleDecreaseVote} from '../actions/post';
import Moment from 'react-moment';

class CommentExampleMetadata extends Component {


  componentDidMount(){
    // console.log('montou comentários!!!!', this.props);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state

    // todo: Add Tweet to Store

    console.log('New Tweet: ', text)

    this.setState(() => ({
      text: ''
    }))
  }

  render(){

    const {comments} = this.props;
    const dateToFormat = '1976-04-19T12:59'; 
    // console.log('PROPS DO COMMENT SECTION', comments.list.lenght);
    

    //Test para checar se existem comentários -> Está com bug 
    // if (comments.list.lenght === 0 )
    // {
    //   return(
    //     <div className='comment-section'>
    //       <p>No comments yet. Be the first one!</p>
    //       <Input placeholder='Comment...'/> <Button>Send</Button>
    //     </div>
    //   )
    // }

      return (
        <div className="comment-section">      
            <Comment.Group>        

        { comments.list.map(comment => (   

              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                <Comment.Content>
                  <Comment.Author>{comment.author}</Comment.Author>
                  <Comment.Metadata>
                    <div>
                      <Icon name='thumbs up outline' />
                      5
                      <Icon name='thumbs down outline' />
                    </div>
                    <div><Moment date={dateToFormat}>{comment.timestamp}</Moment></div>

                  </Comment.Metadata>
                  <Comment.Text>{comment.body}</Comment.Text>
                </Comment.Content>
              </Comment>


          ))}   
          </Comment.Group>

          <form className='new-tweet' onSubmit={this.handleSubmit}>
        <Input placeholder='Comment...' value={'abc'}
            onChange={this.handleChange}/>           
        
        <Button
            className='btn'
            type='submit'
            >
              Submit
          </Button>
          </form>
        </div>  

        );
  }
}



export default CommentExampleMetadata;