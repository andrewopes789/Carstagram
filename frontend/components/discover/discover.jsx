import React from 'react';
import PhotoShow from '../user/photo_show';
import RenderPhoto from '../user/render_photo';
import LoadingIcon from '../photo/loading_icon';

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
    return (
      this.props.loading ? <LoadingIcon /> :

      <main className='profile-main'>
        { this.state.photoModalOpen ?

          <PhotoShow
            backToProfile={this.backToProfile}
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

export default Discover;
