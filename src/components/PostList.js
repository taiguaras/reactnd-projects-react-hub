import React, {Component} from 'react';
import Post from './Post';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {List, Container, Item, Dropdown, Input, Card, Image, Icon} from 'semantic-ui-react';

// import {handleGetPost, handleEditPost, handleDeletePost} from
// '../actions/post';
import {handlePostList} from '../actions/postList'

class PostList extends Component {

  // @properties
  static propTypes = {
    category: PropTypes.string
  }

  // @states
  state = {
    sortType: 'DATE',
    sortOrder: 'DESC',
    search: ''
  };

  componentDidMount() {
    // this.props.dispatch(handlePostList())
    this.loadPostList();
    console.log("this.props did mount -> PostList", this.props)
  }

  loadPostList() {
    const {sortType, sortOrder, search} = this.state;
    const {category, handlePostList} = this.props;

    console.log("props PostList Load -> ", this.props)

    //DISPATCHING LIST POST ACTIONS
    handlePostList(sortType, sortOrder, search, category);
  }

  render() {

    const {sortType, sortOrder, search} = this.state;
    const {postList} = this.props;

     console.log("PostList RENDER POST ->>", this.props)

    return (
      <Container>

        <Dropdown
          text='Filter Posts'
          icon='filter'
          floating
          labeled
          button
          className='icon'>
          <Dropdown.Menu>
            <Input icon='search' iconPosition='left' className='search'/>
            <Dropdown.Divider/>
            <Dropdown.Header icon='tags' content='Tag Label'/>
            <Dropdown.Menu scrolling>
              <Dropdown.Item>Rating</Dropdown.Item>
              <Dropdown.Item>Date</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>   

<Card.Group>
    {postList.list.map(post => (    
              <Card post={post} key={post.id} href='/teste'>
                   <Image
                    src={post.image
                    ? post.image
                    : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
                  <Card.Content>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{post.date}</span>
                    </Card.Meta>
                    <Card.Description>{post.body}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="card-meta">
                      <div>
                        <a>
                          <Icon name='thumbs up outline'/>
                        </a>
                        <span>{post.voteScore}</span>
                        <a>
                          <Icon name='thumbs down outline'/>
                        </a>
                      </div>
                      <a>
                        <Icon name='comment alternate'/> {post.commentCount}{' '}
                        comments
                      </a>
                    </div>
                  </Card.Content>
                </Card>
              
    ))}               
</Card.Group>
        {/* {postList.loading === true && (
          <div>Loading Posts...</div>
        )}
        {(postList.loading === false && postList.list.length === 0) && (
          <div>
            No posts found in this category<br/><br/>
          </div>
        )}
        {postList.loading === false && postList
          .list
          .map(post => (<Post post={post} key={post.id}/>))} */}
      </Container>

    );
  }

}

function mapStateToProps({postList}, props) {
  // console.log("mapstatetoProps", post)
  return {postList};

}
const mapDispatchToProps = dispatch => bindActionCreators({handlePostList
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(PostList);