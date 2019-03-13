import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'


class Post extends Component {

  static propTypes = {
    PostMeta: PropTypes.object.isRequired,
  }

    render() {

      const { postMeta } = this.props;

        return (          

          <Card>
            <Image src={postMeta.image? postMeta.image :'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
            <Card.Content>
              <Card.Header>{postMeta.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{postMeta.date}</span>
              </Card.Meta>
              <Card.Description>{postMeta.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className="card-meta">
            <div>
              <a>
                  <Icon name='thumbs up outline'/>
              </a>
              <span>{postMeta.rating}</span>
              <a>
                  <Icon name='thumbs down outline'/>
              </a> 
              </div>
              
              <a>
                  <Icon name='comment alternate'/> {postMeta.comments} comments
              </a> 
            </div>
            </Card.Content>
          </Card>
        );
    }


}

export default Post;