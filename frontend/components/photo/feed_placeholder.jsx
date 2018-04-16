import React from 'react';
import FeedPlaceholderItem from './feed_placeholder_item';

class FeedPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      img_url: ''
    };
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
          this.props.editUser(this.state);
        }
      }
    );
  }

  render() {
    let { currentUser, createFollow, deleteFollow, logout } = this.props;
    let uploadImg =
    currentUser.img_url === 'http://res.cloudinary.com/dn26kjpum/image/upload/v1523837699/11906329_960233084022564_1448528159_a_i6gdff.jpg' ? (
      <div className='feed-placeholder-img-container'>
        <div className='feed-placeholder-icon-container'>
          <i className='fa fa-user-o feed-placeholder-icon'/>
        </div>

        <div className='feed-placeholder-header'>Add a profile photo</div>

        <div
          className='feed-placeholder-subheader'
        >Add a profile photo so your friends know it's you</div>

        <button
          className='feed-placeholder-button'
          onClick={this.handleUpload}>Add a Profile Photo</button>
      </div>
    ) : null;
    return (
      <div className='feed-placeholder-container'>
        { uploadImg }
        <div className='feed-placeholder-suggested'>Suggested for you</div>
        <div className='feed-placeholder-items'>
          {
            this.props.users.map(user => (
              <FeedPlaceholderItem
                key={user.id}
                user={user}
                createFollow={createFollow}
                deleteFollow={deleteFollow}
                currentUser={currentUser}
                logout={logout}
                />
            ))
          }
        </div>
      </div>
    );
  }
}

export default FeedPlaceholder;
