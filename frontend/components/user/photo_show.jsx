import React from 'react';
import { Link } from 'react-router-dom';

const PhotoShow = (props) => {
  const photo = props.photo;
  let likeCounter = photo.likes_by_id.length === 1 ? '1 like' :
  `${photo.likes_by_id.length} likes`;
  let likeTracker = photo.likes_by_id.length === 0 ? (
    <div className='modal-zero-likes'>Be the first to like this photo</div>
  ) : (
    <div className='modal-likes-count'>{likeCounter}</div>
  );

  let likeButton = photo.current_user_likes ? (
    <i className='fa fa-heart liked feed-photo-button'></i>
  ) : (
    <i className='fa fa-heart-o feed-photo-button'></i>
  );

  return(
    <div className='modal'>

      <span className='close-modal'
        onClick={props.backToProfile}>&times;</span>


        <div className='modal-contents'>

          <div className='modal-image-container'>
            <img className='modal-image' src={photo.img_url}></img>
          </div>

          <div className='modal-detail-container'>

            <header className='modal-poster'>
              <img className='modal-poster-photo' src={photo.poster_img}/>
              <Link to={`/users/${photo.poster_id}`}
                className='index-poster-username modal-poster-username'>
                {photo.poster_username}</Link>
            </header>

            <div className='modal-detail'>

              <div className='modal-top-detail'>
                <Link to={`/users/${photo.poster_id}`}
                  className='modal-poster-lower-username'>
                  {photo.poster_username}</Link>
                <div className='modal-caption'>
                  {photo.caption}
                </div>
              </div>

            </div>

            <div className='modal-photo-buttons-container'>

              {likeButton}

              <i className='fa fa-comment-o modal-photo-button'></i>

            </div>

            <div>{likeTracker}</div>

            <div className='modal-photo-age'>
              {photo.age} ago
            </div>

          </div>

          <form className='modal-comment-input-container'>
            <textarea
              className='modal-comment-input'
              placeholder='Add a comment...'
              />
          </form>

        </div>

      </div>
  );
};

export default PhotoShow;
