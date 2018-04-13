import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';
import Waypoint from 'react-waypoint';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pageId: 1
    };
    this.fetchNextPhotos = this.fetchNextPhotos.bind(this);
  }

  componentWillMount() {
    this.props.deleteFeedPhotos();
  }

  componentDidMount() {
    this.fetchNextPhotos();
  }

  fetchNextPhotos() {
    this.props.fetchFeedPhotos(this.state.pageId);
    this.setState = ({ page: this.state.pageId += 1 });
  }

  render () {
    let photos = this.props.photos;
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='feed-photos-all'>
        {
          photos.map(photo => (
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
