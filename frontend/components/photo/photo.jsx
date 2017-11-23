import React from 'react';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p className='following-photo-feed'> 
          Photos coming soon...
        </p>
      </div>
    );
  }
}

export default Photo;
