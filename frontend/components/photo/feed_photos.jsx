import React from 'react';
import { Link } from 'react-router-dom';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeedPhotos();
  }

  renderComment (comment) {
    return (
      <div key={comment.id} className='comment-item'>
        <Link to={`/users/${comment.user_id}`}
          className='comment-poster'>{comment.user_id}</Link>&nbsp;
        <div className='comment-body'>{comment.body}</div>
      </div>
    );
  }

  renderAllComments (photo) {
    photo.comments.map(comment => (
      this.renderComment(comment)
    ));
  }

  renderPhoto ({photo}) {
    let commentTrigger;
    if (photo.comments.length > 20) {
      commentTrigger = 'Load more comments';
    } else if (photo.comments.length < 5) {
      commentTrigger = null;
    } else {
      commentTrigger = `View all ${photo.comments.length} comments`;
    }

    return (
      <div key={photo.id} className='feed-photo-container'>

        <header className='photo-header'>
          <img className='poster-photo' src={photo.poster.img_url}/>
          <Link to={`/users/${photo.poster.id}`}
            className='index-poster-username'>{photo.poster.username}</Link>
        </header>

        <img className='feed-photo' src={photo.img_url} alt='photo'></img>

        <div className='feed-photo-text'>
          <div className='feed-photo-buttons-container'>
            <button className='feed-photo-button'>
              <i className='fa fa-heart-o'></i>
            </button>

            <button className='feed-photo-button'>
              <i className='fa fa-comment-o'></i>
            </button>
          </div>

          <div>
            <div className='likes-count'>
              {photo.likes.length} likes
            </div>
          </div>

          <div className='poster-and-caption'>
            <Link to={`/users/${photo.poster.id}`} className='photo-poster'>
              {photo.poster.username}
            </Link>

            <div className='photo-caption'>
              {photo.caption}
            </div>
          </div>

          <div className='view-all-photos-container'>
            <button className='view-all-photos-button'>
              {commentTrigger}
            </button>
          </div>

          <div>
            {
              photo.comments.slice(0,4).map(comment => (
                this.renderComment(comment)
              ))
            }
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

  render () {
    return (
      <div className='feed-photos-all'>
          {
            this.props.photos.map(photo => (
              this.renderPhoto({photo})
            ))
          }
      </div>
    );
  }
}

export default FeedPhotos;
