import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfilePhotos();
  }

  render () {
    return (
      <div>
        <p className='profile-photos-all'>
          PROFILE PHOTOS
        </p>
      </div>
    );
  }
}

export default ProfilePhotos;
