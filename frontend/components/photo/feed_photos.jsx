import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.deleteFeedPhotos();
  }
  
  componentDidMount() {
    this.props.fetchFeedPhotos();
  }

  render () {
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='feed-photos-all'>
        {
          this.props.photos.map(photo => (
            <RenderFeedPhoto
              key={photo.id}
              comments={this.props.comments}
              createLike={this.props.createLike}
              createComment={this.props.createComment}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}
              deleteLike={this.props.deleteLike}
              likes={this.props.likes}
              photo={photo}
            />
          ))
        }
      </div>
    );
  }
}

export default FeedPhotos;
