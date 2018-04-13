import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';
import Waypoint from 'react-waypoint';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1
    };
    this.fetchNextPhotos = this.fetchNextPhotos.bind(this);
  }

  componentDidMount() {
    this.fetchNextPhotos();
  }

  fetchNextPhotos() {
    this.props.fetchFeedPhotos(this.state.page);
    this.setState = ({ page: this.state.page += 1 });
  }

  render () {
    let photos = this.props.photos;
    return (
      this.props.loading || !photos ?
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

        <Waypoint
          onEnter={this.fetchNextPhotos}
        />
      </div>
    );
  }
}

export default FeedPhotos;
