import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photo_id: props.photo.id,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({photo_id: this.state.photo_id,
    body: this.state.body}).then(() => this.setState({body: ""}));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value} );
    };
  }

  selectCommentInput(textInput) {
    textInput.focus();
  }

  renderComment (comment) {
    if (!comment) { return null; }

    const deleteCommentButton =
      comment.commenter_id === this.props.currentUser.id ?
      (
        <button className='modal-delete-comment'
          onClick={()=>this.props.deleteComment(comment.id)}>&times;</button>
      ) : (
        null
      );

    return (

      <div key={comment.id} className='modal-comment-item'>

        <div className='modal-comment-body'>

          <p className='modal-poster-and-body'>
            <Link to={`/users/${comment.commenter_id}`}
              className='modal-comment-poster'>{comment.commenter_username}
            </Link>&nbsp;{comment.body}
          </p>

        </div>

        {deleteCommentButton}

      </div>

      );
  }

  render () {
    const photo = this.props.photo;

    const comments = photo.comments_by_id.sort().map(id =>
      this.props.comments[id]);

    const likes = photo.likes_by_id.map(id =>
      this.props.likes[id]);

    let likeCounter = photo.likes_by_id.length === 1 ? '1 like' :
    `${photo.likes_by_id.length} likes`;
    let likeTracker = photo.likes_by_id.length === 0 ? (
      <div className='modal-zero-likes'>Be the first to like this photo</div>
    ) : (
      <div className='modal-likes-count'>{likeCounter}</div>
    );

    let likeButton = photo.current_user_likes ? (
      <i className='fa fa-heart liked feed-photo-button'
        onClick={()=>this.props.deleteLike(photo.id)}></i>
    ) : (
      <i className='fa fa-heart-o feed-photo-button'
        onClick={()=>this.props.createLike(photo.id)}></i>
    );

    let textInput;

    return(
      <div className='modal'>

        <span className='close-modal'
          onClick={this.props.backToProfile}>&times;</span>

        <div className='modal-contents'>

          <div className='modal-show-container'>

            <img className='modal-image' src={photo.img_url}></img>

            <div className='modal-detail-container'>

              <header className='modal-poster'>
                <img className='modal-poster-photo' src={photo.poster_img}/>
                <Link to={`/users/${photo.poster_id}`}
                  className='index-poster-username modal-poster-username'>
                  {photo.poster_username}</Link>
              </header>

              <div className='modal-comment-container'>

                <div className='modal-caption-item'>

                  <Link to={`/users/${photo.poster_id}`}
                    className='modal-caption-poster'>{photo.poster_username}
                  </Link>&nbsp;

                  <div className='modal-caption-body'>{photo.caption}</div>

                </div>

                {
                  comments.map(comment => (
                    this.renderComment(comment)
                  ))
                }

                </div>


                <div className='modal-footer'>

                  <div className='modal-photo-buttons-container'>

                    {likeButton}

                    <i className='fa fa-comment-o modal-photo-button'
                      onClick={()=>this.selectCommentInput(textInput)}></i>

                  </div>

                  <div>{likeTracker}</div>

                  <div className='modal-photo-age'>
                    {photo.age} ago
                  </div>

                  <form onSubmit={this.handleSubmit}
                    className='modal-comment-input-container'>
                    <input
                      ref={(input)=> {textInput = input;}}
                      className='comment-input'
                      placeholder='Add a comment...'
                      onChange={this.update('body')}
                      value={this.state.body}
                      />
                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>
      );
    }
}



export default PhotoShow;
