import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showAllComments: false
    };
    this.renderAllComments = this.renderAllComments.bind(this);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
    this.setState({showAllComments: false});
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
              photo={photo}
              comments={this.props.comments}
              likes={this.props.likes}
              showAllComments={this.state.showAllComments}
              renderComment={this.renderComment}
              renderAllComments={this.renderAllComments}
              createLike={this.props.createLike}
              deleteLike={this.props.deleteLike}
            />
          ))
        }
      </div>
    );
  }

  renderAllComments () {
    this.setState({showAllComments: true});
  }

  renderComment (comment) {
    return (
      <div key={comment.id} className='comment-item'>

        <Link to={`/users/${comment.commenter_id}`}
          className='comment-poster'>{comment.commenter_username}</Link>&nbsp;
        <div className='comment-body'>{comment.body}</div>

      </div>
      );
  }
}

export default FeedPhotos;
