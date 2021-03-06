import React, {Component, Fragment} from 'react';
import Post from './Post';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {List, Container, Item, Dropdown, Input, Card, Image, Icon, Menu, Label, Button} from 'semantic-ui-react';
import Moment from 'react-moment';

// import {handleGetPost, handleEditPost, handleDeletePost} from
// '../actions/post';
import {handleEditPost, handleDeletePost} from '../actions/post'
import {handlePostList, handleIncreaseVotes, handleDecreaseVotes} from '../actions/postList'
import ContentNav from './ContentNav';
import { equal } from 'assert';
import PostThumb from './PostThumb';

const options = [
  { key: 'Rating', text: 'Rating', value: 'Rating' },
  { key: 'Date', text: 'Date', value: 'Date' },
]

class PostList extends Component {

  // @properties
  static propTypes = {
    category: PropTypes.string
  }

  // @states
  state = {
    sortType: 'DATE',
    sortOrder: 'DESC',
    search: '',
    options
  };

  componentDidMount() {
    this.loadPostList();
  }


  loadPostList() {
    const {sortType, sortOrder, search} = this.state;
    const {category, handlePostList} = this.props;

    //DISPATCHING LIST POST ACTIONS
    handlePostList(sortType, sortOrder, search, category);
  }

    sortPostsByDate() {
    const { sortOrder, search } = this.state;
    const { category, handlePostList } = this.props;
    this.setState({
      sortType: 'DATE'
    });
    handlePostList('DATE', sortOrder, search, category);
  }
  sortPostsByVotes() {
    const { sortOrder, search } = this.state;
    const { category, handlePostList } = this.props;
    this.setState({
      sortType: 'VOTES'
    });
    handlePostList('VOTES', sortOrder, search, category);
  }

    toggleOrder() {
    const { sortType, search } = this.state;
    const { category, handlePostList } = this.props;
    const sortOrder = this.state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    this.setState({
      sortOrder
    });
    handlePostList(sortType, sortOrder, search, category);
  }

  upVoteLink(post){
    const {handleIncreaseVotes} = this.props;
    handleIncreaseVotes(post);    
  }

  downVoteLink(post){
    const {handleDecreaseVotes} = this.props;
    handleDecreaseVotes(post);
  }

  editPostLink(post){
    //const {handleEditPost} = this.props;
    handleEditPost(post);
  }

  deletePostLink(post){
    //const {handleDeletePost} = this.props;
    handleDeletePost(post);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  handleChangeTwo = (e, { name, value }) => this.setState({ [name]: value })

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
    })
  }

  render() {
    
    const {sortType, sortOrder, search, activeItem, currentValue} = this.state;    
    const {postList, post} = this.props;
     
    const dateToFormat = '1976-04-19T12:59-0500';

    return (
      <Container>        
        <Menu>
        <Container >           

            <p className='menu-item' icon='filter'>Sort posts by:</p>

            <Dropdown              
              options={this.state.options}
              placeholder='Sort by...'
              search
              selection
              fluid
              allowAdditions
              additionLabel='Sorted'
              value={currentValue}              
              onAddItem={this.handleAddition}
              onChange={this.handleChange}
              className='icon'
              selectedLabel={0}              
            /> 

              <Dropdown   
              options={this.state.options}                       
              placeholder={this.state.options}
              
              search
              selection                            
              fluid
              allowAdditions
              additionLabel='Sorted'
              value={currentValue}
              selectedLabel={0}  
              onAddItem={this.handleAddition}
              onChange={this.handleChangeTwo} 
              selection={true}
              value={'Rating'}
              className='icon'
            >

            

                <Dropdown.Menu>
                  <Dropdown.Header value={currentValue} />                  
                  <Dropdown.Item onChange={this.handleChange} onAddItem={this.handleAddition} onClick={() => this.sortPostsByVotes()} active={sortType === 'VOTES'} key='Rating' text='Rating' value='Rating' />
                  <Dropdown.Item onChange={this.handleChange} onAddItem={this.handleAddition} onClick={() => this.sortPostsByDate()} active={sortType === 'DATE'} key='Date' text='Date' value='Date' />
                </Dropdown.Menu>
              </Dropdown>        

          <Button icon='sort content ascending' onClick={() => this.toggleOrder()} active={sortType === 'ASC'}></Button>  
          <Button icon='sort content descending' onClick={() => this.toggleOrder()} active={sortType === 'DESC'}></Button>  

        </Container>
      </Menu>


      <Card.Group>
          {postList.list.map(post => (   
            
            // <PostThumb post={post} key={post.id}/>
              <Card post={post} key={post.id}>
                   <Image
                    href={`/post/${post.id}`}
                    src={post.image
                    ? post.image
                    : 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
                  <Card.Content>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Meta>
                      <span className='date'><Moment date={dateToFormat}>{post.timestamp}</Moment></span>
                    </Card.Meta>
                    <Card.Description>{post.body}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="card-meta">
                      <div>
                        <Fragment>
                        <a onClick={() => this.upVoteLink(post)}>
                          <Icon name='thumbs up outline'/>
                        </a>
                        <span>{post.voteScore}</span>
                        <a onClick={() => this.downVoteLink(post)}>
                          <Icon name='thumbs down outline'/>
                        </a>
                        </Fragment>
                      </div>
                      <a>
                        <Link to={`/post/${post.id}`}>
                          <Icon name='comment alternate'/> {post.commentCount}
                        </Link>                        
                      </a>

                      <a onClick={() => this.editPostLink()} >
                        <Icon name='edit outline'/>                         
                      </a>

                      <a onClick={() => this.deletePostLink()}>
                        <Icon name='trash alternate outline'/>                        
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

// function mapStateToProps({postList, Post}, props) {
//   // console.log("mapstatetoProps", post)
//   return {postList, Post};

// }

function mapStateToProps({ categories, post, postList }, props) {
  return {
    categories,
    post,
    postList
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ handlePostList, handleIncreaseVotes, handleDecreaseVotes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostList, Post);


// function mapStateToProps({ categories, post, postList }, props) {
//   return {
//     categories,
//     post,
//     postList
//   };
// }

// export default connect(mapStateToProps)(Post);