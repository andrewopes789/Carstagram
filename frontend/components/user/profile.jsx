import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../photo/loading_icon';
import PhotoShow from './photo_show';
import FollowButton from './follow_button';
import RenderPhoto from './render_photo';
import MessageForm from '../chatroom/message_form.jsx';
import FollowersIndex from './followers_index';
import FollowingsIndex from './followings_index';

class ProfilePhotos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photoModalOpen: false,
      messageModalOpen: false,
      followersModalOpen: false,
      followingsModalOpen: false,
      searchId: -1,
      id: this.props.user.id,
      img_url: this.props.user.img_url
    };
    this.pushHistory = this.pushHistory.bind(this);
    this.openMessageModal = this.openMessageModal.bind(this);
    this.openFollowersModal = this.openFollowersModal.bind(this);
    this.openFollowingsModal = this.openFollowingsModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null && images[0].secure_url !== '') {
          this.setState({img_url: images[0].secure_url});
        }
        if (this.state.img_url !== '') {
          this.props.editUser({img_url: this.state.img_url, id: this.state.id});
        }
      }
    );
  }

  componentWillMount() {
    this.props.deletePhotos();
  }

  componentDidMount () {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.fetchUser(newProps.match.params.userId);
      this.closeModal();
    }
    if (newProps.location.search !== '') {
      this.setState({photoModalOpen: true});
      this.setState({searchId: newProps.location.search.slice(1)});
    } else {
      this.setState({photoModalOpen: false});
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

  openMessageModal() {
    this.setState({messageModalOpen: true});
  }

  openFollowersModal() {
    this.setState({followersModalOpen: true});
  }

  openFollowingsModal() {
    this.setState({followingsModalOpen: true});
  }

  closeModal() {
    this.setState({
      messageModalOpen: false,
      followersModalOpen: false,
      followingsModalOpen: false
    });
  }

  render () {
    let user = this.props.user;
    let currentUser = this.props.currentUser;
    let photos = this.props.photos;
    let follows = this.props.follows;
    let followers = [];
    let followings = [];
    if (user.followers_by_id) {
      followers = user.followers_by_id.map(id => follows[id]);
    }
    if (user.followings_by_id) {
      followings = user.followings_by_id.map(id => follows[id]);
    }
    if (!this.props.photos) { return null; }
    let button = user.id !== currentUser.id ? (
      <button
        className='message-user'
        onClick={this.openMessageModal}
      >
      Message</button>
     ) : null;
     let profilePhoto = user.id === currentUser.id ? (
       <div
         className='profile-photo-container current-user-profile-pic'
         onClick={this.handleUpload}>
         <img className='profile-photo' src={user.img_url}/>
       </div>
     ) : (
       <div
         className='profile-photo-container'
        >
         <img className='profile-photo' src={user.img_url}/>
       </div>
     );

     let profilePlaceholder = currentUser.id === user.id &&
                              currentUser.photos_by_id.length === 0 ?
     (
       <div className='profile-placeholder-container'>
         <div className='profile-placeholder-left'>
           <img
             src='http://res.cloudinary.com/dn26kjpum/image/upload/v1523837536/7e0cb2166ce8_izr03s.jpg'
             alt='placeholder image'
             className='profile-placeholder-left-img'
           />
         </div>

         <div className='profile-placeholder-right-container'>
           <div className='profile-placeholder-right'>
             <div className='profile-placeholder-right-text-container'>
               <span
                 className='profile-placeholder-right-text-1'
                 >Start capturing and sharing your moments.</span>
               <span
                 className='profile-placeholder-right-text-2'
                 >Get the app or click <Link to='/photos/new'
                 className='profile-placeholder-link'
                 >here</Link> to share your first photo.</span>
             </div>
             <div className='profile-placeholder-right-buttons'>
               <img
                 src='http://res.cloudinary.com/dn26kjpum/image/upload/v1523837495/f06b908907d5_xg0jjw.png'
                 alt='placeholder image'
                 className='profile-placeholder-right-img'
                 />

               <img
                 src='http://res.cloudinary.com/dn26kjpum/image/upload/v1523837495/4b70f6fae447_dqldmh.png'
                 alt='placeholder image'
                 className='profile-placeholder-right-img'
                 />
             </div>
           </div>
         </div>
       </div>
     ) : null;
    return (
      this.props.loading ? <LoadingIcon /> :

      <main className='profile-main'>
        <div className='profile-all'>

          { this.state.photoModalOpen ?

            <PhotoShow
              backToProfile={this.backToProfile(this.props.user.id)}
              comments={this.props.comments}
              createComment={this.props.createComment}
              createLike={this.props.createLike}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}
              deleteLike={this.props.deleteLike}
              likes={this.props.likes}
              photo={this.props.photosAsObject[this.state.searchId]}
            /> : ""

          }

          { this.state.messageModalOpen ?

            <MessageForm
              closeModal={this.closeModal}
              chatroom={this.props.chatroom}
              createChatroom={this.props.createChatroom}
              createMessage={this.props.createMessage}
              openMessageModal={this.openMessageModal}
              user={user}
            /> : ""

          }

          { this.state.followersModalOpen ?

            <FollowersIndex
              closeModal={this.closeModal}
              followers={followers}
            /> : ""

          }

          { this.state.followingsModalOpen ?

            <FollowingsIndex
              closeModal={this.closeModal}
              followings={followings}
            /> : ""

          }

          <header className='profile-header'>

            { profilePhoto }

            <section className='profile-text'>

              <div className='profile-top-line'>

                <div className='profile-username'>{user.username}</div>

                <FollowButton
                  currentUser={currentUser}
                  user={user}
                  createFollow={this.props.createFollow}
                  deleteFollow={this.props.deleteFollow}
                  logout={this.props.logout}/>

                {button}
              </div>


              <div className='posts-followers-followings'>

                <div className='profile-posts'>
                  <strong>{photos.length}</strong> posts</div>

                <div
                  className='profile-followers'
                  onClick={this.openFollowersModal}>
                  <strong>
                    {user.followers_by_id.length}</strong> followers</div>

                <div
                  className='profile-followings'
                  onClick={this.openFollowingsModal}>
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

          { profilePlaceholder }
          
        </div>

        <div className='profile-photos'>
          {
            this.props.photos.map(photo => (

              <RenderPhoto
                id={photo.id}
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
