import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    this.props.fetchUser(newProps.match.params.userId);
  }

  // componentWillReceiveProps () {
  //   window.user = this.props.user;
  //   window.photos = this.props.photos;
  // }

  renderPhoto(photo) {
    return (
      <div key={photo.id} className='photo-item-container'>
        <img
          className='photo-item'
          src={photo.img_url} alt='user photo'/>
        <div className='overlay'>
          <i className='fa fa-heart'></i>&nbsp;
          <i className='fa fa-comment'></i>
        </div>
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
    } else {
      return (<i className='fa fa-caret-square-o-down profile-option'></i>);
    }
  }

  render () {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    // const photos = user.photos || [];
    // const followers = user.followers || [];
    let profButton;
    if (user.id === currentUser.id) {
      profButton = 'Edit Profile';
    } else if (currentUser.followings.includes(user)) {
      profButton = 'Following';
    } else {
      profButton = 'Follow';
    }


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
                <button className='follow-button'>{profButton}</button>
                {this.renderButton(user, currentUser)}
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

        <div className='profile-photos'>
          {
            user.photos.map(photo => (
              this.renderPhoto(photo)
            ))
          }
        </div>
      </main>
    );
  }
}

export default ProfilePhotos;
