import React from 'react';
import { Link } from 'react-router-dom';

const PhotoShow = (props) => {
  const photo = props.photo;
  console.log(props);
  return(
    <div className='modal' onClick={props.backToProfile} >
      <span className='close-modal'
        onClick={props.backToProfile}>&times;</span>
      <div className='modal-contents'>
        <div>
          <img className='modal-image' src={photo.img_url}></img>
        </div>

        <div className='modal-detail-container'>
          <header className='modal-poster'>
            <img className='modal-poster-photo' src={photo.poster_img}/>
            <Link to={`/users/${photo.poster_id}`}
              className='index-poster-username'>{photo.poster_username}</Link>
          </header>
          <div className='modal-detail'>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhotoShow;
