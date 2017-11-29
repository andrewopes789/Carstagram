import React from 'react';
import { Link } from 'react-router-dom';

const PhotoShow = (props) => {
  const photo = props.photo;
  const comments = photo.comments_by_id.map(id =>
    props.comments[id]);
  const likes = photo.likes_by_id.map(id =>
    props.likes[id]);

  let likeCounter = photo.likes_by_id.length === 1 ? '1 like' :
  `${photo.likes_by_id.length} likes`;
  let likeTracker = photo.likes_by_id.length === 0 ? (
    <div className='modal-zero-likes'>Be the first to like this photo</div>
  ) : (
    <div className='modal-likes-count'>{likeCounter}</div>
  );

  let likeButton = photo.current_user_likes ? (
    <i className='fa fa-heart liked feed-photo-button'
      onClick={()=>props.deleteLike(photo.id)}></i>
  ) : (
    <i className='fa fa-heart-o feed-photo-button'
      onClick={()=>props.createLike(photo.id)}></i>
  );

  return(
    <div className='modal'>

      <span className='close-modal'
        onClick={props.backToProfile}>&times;</span>

        <div className='modal-contents'>

          <div className='modal-show-container'>

            <img className='modal-image' src={photo.img_url}></img>

            <div className='modal-detail-container'>

              <header className='modal-poster'>
                <img className='modal-poster-photo' src={photo.poster_img}/>
                <Link to={`/users/${photo.poster_id}`}
                  className='index-poster-username modal-poster-username'>
                  {photo.poster_username}</Link>
              </header>

              <div className='modal-comment-container'>

                <div className='modal-top-detail'>
                  <Link to={`/users/${photo.poster_id}`}
                    className='modal-poster-lower-username'>
                    {photo.poster_username}</Link>
                  <div className='modal-caption'>
                    {photo.caption}
                  </div>
                </div>

                {
                  comments.map(comment =>
                    <div key={comment.id} className='modal-comment-item'>

                      <Link to={`/users/${comment.commenter_id}`}
                        className='modal-comment-poster'>
                        {comment.commenter_username}</Link>&nbsp;
                        <div className='modal-comment-body'>{comment.body}</div>
                      </div>
                    )
                  }

                </div>


                <div className='modal-footer'>

                  <div className='modal-photo-buttons-container'>

                    {likeButton}

                    <i className='fa fa-comment-o modal-photo-button'></i>

                  </div>

                  <div>{likeTracker}</div>

                  <div className='modal-photo-age'>
                    {photo.age} ago
                  </div>

                  <form className='modal-comment-input-container'>
                    <textarea
                      className='modal-comment-input'
                      placeholder='Add a comment...'
                      />
                  </form>

                </div>

              </div>

          </div>

        </div>

      </div>
  );
};



export default PhotoShow;
