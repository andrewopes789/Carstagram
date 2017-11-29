import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../photo/loading_icon';
import PhotoShow from './photo_show';
import FollowButton from './follow_button';
import SettingsButton from './settings_button';
import RenderPhoto from './render_photo';

class ProfilePhotos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false,
      searchId: -1
    };
    this.pushHistory = this.pushHistory.bind(this);
  }

  componentWillMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.fetchUser(newProps.match.params.userId);
    }
    if (newProps.location.search !== '') {
      this.setState({modalOpen: true});
      this.setState({searchId: newProps.location.search.slice(1)});
    } else {
      this.setState({modalOpen: false});
    }
  }

  pushHistory(photoId) {
    return(() => this.props.history.push({search: photoId.toString()}));
  }

  backToProfile(userId) {
    return(() => {
      this.props.history.push(`/users/${userId}`);
    });
  }

  render () {
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    const photos = this.props.photos;

    return (
      this.props.loading ? <LoadingIcon /> :

      <main className='profile-main'>
        <div className='profile-all'>

          { this.state.modalOpen ?

            <PhotoShow
              backToProfile={this.backToProfile(this.props.user.id)}
              photo={this.props.photosAsObject[this.state.searchId]}
            /> : ""

          }

          <header className='profile-header'>

            <div className='profile-photo-container'>
              <img className='profile-photo' src={user.img_url}/>
            </div>

            <section className='profile-text'>

              <div className='profile-top-line'>

                <div className='profile-username'>{user.username}</div>

                <FollowButton
                  currentUser={currentUser}
                  user={user}/>

                <SettingsButton
                  user={user}
                  currentUser={currentUser}
                  logout={this.props.logout}
                />

              </div>


              <div className='posts-followers-followings'>

                <div className='profile-posts'>
                  <strong>{photos.length}</strong> posts</div>

                <div className='profile-followers'>
                  <strong>
                    {user.followers_by_id.length}</strong> followers</div>

                <div className='profile-followings'>
                  <strong>
                    {user.followings_by_id.length}</strong> following</div>

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

              <RenderPhoto
                key={photo.id}
                photo={photo}
                pushHistory={this.pushHistory}
              />

            ))
          }
        </div>

      </main>
          );
    }
}

export default ProfilePhotos;