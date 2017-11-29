import React from 'react';
import { Link } from 'react-router-dom';

const RenderFeedPhoto = (props) => {
  let photo = props.photo;

  let comments = photo.comments_by_id.map(id => (
    props.comments[id]
  ));

  let likes = photo.likes_by_id.map(id => (
    props.likes[id]
  ));


  let commentTrigger;
  if (comments.length < 5 || props.showAllComments === true) {
    commentTrigger = null;
  } else if (comments.length > 20) {
    commentTrigger = 'Load more comments';
  } else {
    commentTrigger = `View all ${comments.length} comments`;
  }


  let shownComments = props.showAllComments ? (
    <div>
      {
        comments.map(comment => (
          props.renderComment(comment)
        ))
      }
    </div>
  ) : (
    <div className='comment-shown-container'>
      {
        comments.slice(0,4).map(comment => (
          props.renderComment(comment)
        ))
      }
    </div>
  );

  let likeCounter = likes.length === 1 ? '1 like' : `${likes.length} likes`;

  let likeTracker = likes.length === 0 ? (
      <div className='zero-likes'>Be the first to like this photo</div>
    ) : (
      <div className='likes-count'>{likeCounter}</div>
    );

  let likeButton = photo.current_user_likes ? (
      <i className='fa fa-heart liked feed-photo-button'
        onClick={() => props.deleteLike(photo.id)}></i>
    ) : (
      <i className='fa fa-heart-o feed-photo-button'
        onClick={() => props.createLike(photo.id)}></i>
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

        <div className='comment-trigger' onClick={props.renderAllComments}>
          {commentTrigger}
        </div>

        <div>
          {shownComments}
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
};

export default RenderFeedPhoto;
