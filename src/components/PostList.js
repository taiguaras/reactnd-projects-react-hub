import React, {Component} from 'react';
import Post from './Post';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {List, Container, Item, Dropdown, Input} from 'semantic-ui-react';

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
    const {posts} = this.props;

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

           

        {/* {posts.loading === true && (
          <div>Loading Posts...</div>
        )}
        {(posts.loading === false && posts.list.length === 0) && (
          <div>
            No posts found in this category<br/><br/>
          </div>
        )}
        {posts.loading === false && posts
          .list
          .map(post => (<Post post={post} key={post.id}/>))} */}
      </Container>

    );
  }

}

function mapStateToProps({posts}, props) {
  // console.log("mapstatetoProps", post)
  return {posts};

}
const mapDispatchToProps = dispatch => bindActionCreators({handlePostList
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PostList);