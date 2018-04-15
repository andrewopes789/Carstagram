import React from 'react';
import PhotoShow from '../user/photo_show';
import RenderPhoto from '../user/render_photo';
import RenderUser from './render_user';
import LoadingIcon from '../photo/loading_icon';
import Waypoint from 'react-waypoint';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: 1,
      photoModalOpen: false,
      searchId: -1
    };
    this.getUsers = this.getUsers.bind(this);
    this.backToProfile = this.backToProfile.bind(this);
    this.pushHistory = this.pushHistory.bind(this);
  }

  componentWillMount() {
    this.props.deletePhotos();
  }

  componentDidMount() {
    this.getUsers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.search !== '') {
      this.setState({photoModalOpen: true});
      this.setState({searchId: newProps.location.search.slice(1)});
    } else {
      this.setState({photoModalOpen: false});
    }
  }

  getUsers() {
    this.props.fetchUsers(this.state.pageId);
    this.setState({ pageId: this.state.pageId += 1 });
  }

  pushHistory(photoId) {
    return(() => this.props.history.push({search: photoId.toString()}));
  }

  backToProfile() {
    this.setState({ photoModalOpen: false });
    this.props.history.push('/discover');
  }

  render() {
    let photos = this.props.photos;
    let users = this.props.users;
    if (!Array.isArray(users)) {
      users = Object.values(users).splice(0, 3);
    }

    return (
      <main className='explore-main'>
        { this.state.photoModalOpen ?

          <PhotoShow
            key={this.props.photos[this.state.searchId].id}
            backToProfile={this.backToProfile}
            comments={this.props.comments}
            createComment={this.props.createComment}
            createLike={this.props.createLike}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
            deleteLike={this.props.deleteLike}
            likes={this.props.likes}
            photo={this.props.photos[this.state.searchId]}
          /> : ""

        }
        <span className='explore-subheader'>Discover People</span>
        <div className='explore-users'>
          {
            this.props.loading ? <LoadingIcon /> :

            users.map(user => (
              <RenderUser
                key={user.id}
                id={user.id}
                user={user}
                createFollow={this.props.createFollow}
                deleteFollow={this.props.deleteFollow}
                currentUser={this.props.currentUser}
                logout={this.props.logout}
              />
            ))
          }
        </div>

        <span className='explore-subheader'>Explore</span>
        <div className='explore-photos'>
          {
            Object.values(photos).map(photo => (

              <RenderPhoto
                key={photo.id}
                id={photo.id}
                photo={photo}
                pushHistory={this.pushHistory}
              />

            ))
          }
        </div>

        <Waypoint onEnter={this.getUsers} />

        {
          this.props.loading ? <LoadingIcon /> : null
        }
      </main>
    );
  }
}

export default Discover;
