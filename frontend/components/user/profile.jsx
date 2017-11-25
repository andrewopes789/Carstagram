import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillUnmount() {
  }

  // componentWillReceiveProps () {
  //   window.user = this.props.user;
  //   window.photos = this.props.photos;
  // }

  render () {
    const user = this.props.user;
    // const photos = user.photos || [];
    // const followers = user.followers || [];
    return (
      <main className='profile-main'>
        <div className='profile-all'>

          <header className='profile-header'>

            <div className='profile-photo-container'>
              <img className='profile-photo' src={user.img_url}/>
            </div>

            <section className='profile-text'>
              <div className='profile-top-line'>
                <div className='profile-username'>{user.username}</div>
                <button className='follow-button'>Following</button>
              </div>

              <div className='posts-followers-followings'>

                <div className='profile-posts'>
                  <strong>{user.photos.length}</strong> posts</div>

                <div className='profile-followers'>
                  <strong>{user.followers.length}</strong> followers</div>

                <div className='profile-followings'>
                  <strong>{user.followings.length}</strong> following</div>

              </div>

              <div className='profile-bottom-line'>
                <div className='bottom-line-username'>
                  {user.username}
                </div>
              </div>

            </section>

          </header>
        </div>
      </main>
    );
  }
}

export default ProfilePhotos;
