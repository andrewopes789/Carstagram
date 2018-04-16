import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';
import FeedPlaceholder from './feed_placeholder';
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
    this.props.deletePhotos();
  }

  componentDidMount() {
    this.fetchNextPhotos();
    this.props.fetchUsers(this.state.pageId);
  }

  fetchNextPhotos() {
    this.props.fetchFeedPhotos(this.state.pageId);
    this.setState = ({ page: this.state.pageId += 1 });
  }

  render () {
    let photos = this.props.photos;
    let feedContent = this.props.currentUser.followings_by_id.length === 0 ?
    (
      <FeedPlaceholder
        users={Object.values(this.props.users)}
        createFollow={this.props.createFollow}
        deleteFollow={this.props.deleteFollow}
        currentUser={this.props.currentUser}
        editUser={this.props.editUser}
        logout={this.props.logout}
      />
    ) : (
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
    );

    return (
      <div className='feed-photos-all'>

        { feedContent }

        <Waypoint onEnter={this.fetchNextPhotos} />

        {
          this.props.loading ? <LoadingIcon /> : null
        }
      </div>
    );
  }
}

export default FeedPhotos;
