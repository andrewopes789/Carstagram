import React from 'react';
import { Link } from 'react-router-dom';

class RenderFeedPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: props.photo.id,
      body: '',
      showAllComments: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderAllComments = this.renderAllComments.bind(this);
  }

  componentWillMount() {
    this.setState({showAllComments: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({photo_id: this.state.photo_id, body:
      this.state.body}).then(() => this.setState({body: ""}));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value} );
    };
  }

  renderAllComments () {
    this.setState({showAllComments: true});
  }

  renderComment (comment) {
    if (!comment) { return null; }
    const deleteCommentButton =
      comment.commenter_id === this.props.currentUser.id ?
      (
        <button className='delete-comment'
          onClick={()=>this.props.deleteComment(comment.id)}>&times;</button>
      ) : (
        null
      );
    return (
      <div key={comment.id} className='comment-item'>

        <Link to={`/users/${comment.commenter_id}`}
          className='comment-poster'>{comment.commenter_username}</Link>&nbsp;
        <div className='comment-body'>{comment.body}</div>
        {deleteCommentButton}
      </div>
      );
  }

  render () {
    let photo = this.props.photo;
    if (!photo.comments_by_id || !this.props.comments) { return null; }

    let comments = photo.comments_by_id.sort().map(id => (
      this.props.comments[id]
    ));

    let likes = photo.likes_by_id.map(id => (
      this.props.likes[id]
    ));


    let commentTrigger;
    if (comments.length < 5 || this.state.showAllComments === true) {
      commentTrigger = null;
    } else if (comments.length > 20) {
      commentTrigger = 'Load more comments';
    } else {
      commentTrigger = `View all ${comments.length} comments`;
    }


    let shownComments = this.state.showAllComments ? (
      <div>
        {
          comments.map(comment => (
            this.renderComment(comment)
          ))
        }
      </div>
    ) : (
      <div className='comment-shown-container'>
        {
          comments.slice(comments.length-4).map(comment => (
            this.renderComment(comment)
          ))
        }
      </div>
    );

    let likeCounter = likes.length === 1 ? '1 like' : `${likes.length} likes`;

    let likeTracker = likes.length === 0 ? (
      <div className='zero-likes'>Be the first to like this photo</div>
    ) : (
      <div className='likes-count'>{likeCounter}</div>
    );

    let likeButton = photo.current_user_likes ? (
      <i className='fa fa-heart liked feed-photo-button'
        onClick={() => this.props.deleteLike(photo.id)}></i>
    ) : (
      <i className='fa fa-heart-o feed-photo-button'
        onClick={() => this.props.createLike(photo.id)}></i>
    );

    return (
      <div key={photo.id} className='feed-photo-container'>

        <header className='photo-header'>
          <img className='poster-photo' src={photo.poster_img}/>
          <Link to={`/users/${photo.poster_id}`}
            className='index-poster-username'>{photo.poster_username}</Link>
        </header>

        <img className='feed-photo' src={photo.img_url} alt='photo'></img>

        <div className='feed-photo-text'>
          <div className='feed-photo-buttons-container'>

            {likeButton}

            <i className='fa fa-comment-o feed-photo-button'></i>

          </div>

          <div>{likeTracker}</div>

          <div className='poster-and-caption'>
            <Link to={`/users/${photo.poster_id}`} className='photo-poster'>
              {photo.poster_username}
            </Link>

            <div className='photo-caption'>
              {photo.caption}
            </div>
          </div>

          <div className='comment-trigger'
            onClick={this.renderAllComments}>
            {commentTrigger}
          </div>

          <div>
            {shownComments}
          </div>

          <div className='photo-age'>
            {photo.age} ago
          </div>

          <section className='comment-input-container'>
            <form onSubmit={this.handleSubmit}>
              <input
                className='comment-input'
                placeholder='Add a comment...'
                onChange={this.update('body')}
                value={this.state.body}
                />
              <button className='comment-submit'></button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default RenderFeedPhoto;
