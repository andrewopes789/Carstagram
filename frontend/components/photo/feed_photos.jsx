import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';
import RenderFeedPhoto from './render_feed_photo';

class FeedPhotos extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeedPhotos();
  }

  render () {
    return (
      this.props.loading ?
      <LoadingIcon /> :
      <div className='feed-photos-all'>
        {
          this.props.photos.map(photo => (
            <RenderFeedPhoto
              key={photo.id}
              comments={this.props.comments}
              createLike={this.props.createLike}
              createComment={this.props.createComment}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}
              deleteLike={this.props.deleteLike}
              likes={this.props.likes}
              photo={photo}
            />
          ))
        }

        <footer className='session-footer-feed'>
          <div class='footer-items-left'>
            <a href="http://hireandrewcho.today/"
              class="footer-item" >
              <span class="label">Portfolio</span>
            </a>
            <a href="https://github.com/andrewopes789"
              class="footer-item" target="_blank">
              <span class="label">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/andrew-cho-64b082155/"
              class="footer-item" target="_blank">
              <span class="label">LinkedIn</span>
            </a>
          </div>
          <div class='footer-items-right'>
            © Andrew Cho 2018
          </div>
        </footer>
      </div>
    );
  }
}

export default FeedPhotos;
