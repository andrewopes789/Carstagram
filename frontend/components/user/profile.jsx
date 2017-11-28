import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../photo/loading_icon';

class ProfilePhotos extends React.Component {
  componentWillMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render () {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const photos = this.props.photos;
    let profButton = user.followed ? 'Following' : 'Follow';
    let button = user.id === currentUser.id ? (
      <button className='follow-button'>Edit Profile</button>
    ) : (
      <button className='follow-button follow'>{profButton}</button>
    );

    return (
      this.props.loading ?
      <LoadingIcon /> :
      <main className='profile-main'>
        <div className='profile-all'>

          <header className='profile-header'>

            <div className='profile-photo-container'>
              <img className='profile-photo' src={user.img_url}/>
            </div>

            <section className='profile-text'>
              <div className='profile-top-line'>
                <div className='profile-username'>{user.username}</div>
                {button}
                {this.renderButton(user, currentUser)}
              </div>

              <div className='posts-followers-followings'>

                <div className='profile-posts'>
                  <strong>{photos.length}</strong> posts</div>

                  <div className='profile-followers'>
                    <strong>{user.followers_by_id.length}</strong> followers</div>

                    <div className='profile-followings'>
                      <strong>{user.followings_by_id.length}</strong> following</div>

                    </div>

                    <div className='profile-bottom-line'>
                      <div className='bottom-line-username'>
                        {user.username}
                      </div>
                    </div>

                  </section>

                </header>
              </div>

              <div className='profile-photos'>
                {
                  this.props.photos.map(photo => (
                    this.renderPhoto(photo)
                  ))
                }
              </div>
            </main>
          );
        }

  renderPhoto(photo) {
    return (
      <div key={photo.id} className='photo-item-container'>
        <img
          className='photo-item'
          src={photo.img_url} alt='user photo'/>
      </div>
    );
  }

  renderButton(user, currentUser) {
    let editButton;
    if (user.id === currentUser.id) {
      return (<i
        className='fa fa-gear profile-option'
        onClick={this.props.logout}>
      </i>);
    }
  }

}

export default ProfilePhotos;
