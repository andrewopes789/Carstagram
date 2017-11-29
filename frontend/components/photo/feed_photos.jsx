import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';

class FeedPhotos extends React.Component {
  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  render () {
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='feed-photos-all'>
        {
          this.props.photos.map(photo => (
            this.renderPhoto(photo)
          ))
        }
      </div>
    );
  }


  renderPhoto (photo) {
    let comments = photo.comments_by_id.map(id => (
      this.props.comments[id]
    ));
    let likes = photo.likes_by_id.map(id => (
      this.props.likes[id]
    ));
    let commentTrigger;
    if (comments.length > 20) {
      commentTrigger = 'Load more comments';
    } else if (comments.length < 5) {
      commentTrigger = null;
    } else {
      commentTrigger = `View all ${comments.length} comments`;
    }

    let likeCounter = likes.length === 1 ? '1 like' : `${likes.length} likes`;
    let likeTracker = likes.length === 0 ? (
      <div className='zero-likes'>Be the first to like this photo</div>
    ) : (
      <div className='likes-count'>{likeCounter}</div>
    );

    let likeButton = photo.current_user_likes ? (
      <i className='fa fa-heart liked feed-photo-button'></i>
    ) : (
      <i className='fa fa-heart-o feed-photo-button'></i>
    );

    return (
      <div key={photo.id} className='feed-photo-container'>

        <header className='photo-header'>
          <img className='poster-photo' src={photo.poster_img}/>
          <Link to={`/users/${photo.poster_id}`}
            className='index-poster-username'>{photo.poster_username}</Link>
        </header>

        <img className='feed-photo' src={photo.img_url} alt='photo'></img>

        <div className='feed-photo-text'>
          <div className='feed-photo-buttons-container'>

            {likeButton}

            <i className='fa fa-comment-o feed-photo-button'></i>

          </div>

          <div>{likeTracker}</div>

          <div className='poster-and-caption'>
            <Link to={`/users/${photo.poster_id}`} className='photo-poster'>
              {photo.poster_username}
            </Link>

            <div className='photo-caption'>
              {photo.caption}
            </div>
          </div>

          <div className='view-all-photos-container'>
            <Link to='/' className='view-all-photos-link'>
            </Link>
          </div>

          <div>
            {
              comments.map(comment => (
                this.renderComment(comment)
              ))
            }
          </div>

          <div className='photo-age'>
            {photo.age} ago
          </div>

          <section className='comment-input-container'>
            <form>
              <textarea
                className='comment-input'
                placeholder='Add a comment...'
                />
            </form>
          </section>
        </div>
      </div>
    );
  }

  renderAllComments (photo) {
    photo.comments.map(comment => (
      this.renderComment(comment)
    ));
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
