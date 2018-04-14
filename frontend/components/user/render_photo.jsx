import React from 'react';

const RenderPhoto = (props) => {
    return (
      <div className='photo-item-container'
        onClick={props.pushHistory(props.photo.id)}
        key={props.id}>
        <img
          className='photo-item'
          src={props.photo.img_url} alt='user photo'/>
      </div>
    );
};

export default RenderPhoto;
