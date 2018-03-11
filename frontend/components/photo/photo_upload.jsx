import React from 'react';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      caption: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.update = this.update.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null && images[0].secure_url !== '') {
          this.setState({img_url: images[0].secure_url});
        }
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.img_url !== '') {
      this.props.createPhoto(this.state)
      .then(() => this.props.history.push('/'));
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className='errors' key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    let imageShow = this.state.img_url === '' ? (
      imageShow = (<div className='image-placeholder'
      >Click here to upload an image</div>)
    ) : (
      imageShow = (<img
        src={this.state.img_url}
        className='upload-preview'></img>)
    );

    return (
      <div>
        <section className='photo-detail'>

          <div className='image-form-container'>

            <div className='image-show-container'
              onClick={this.handleUpload}>
              {imageShow}
            </div>

            <form className='upload-form'>
              <div className='new-post'>New Post</div>
              <label>
                <textarea
                  className='caption-input'
                  value={this.state.caption}
                  placeholder='Write a caption...'
                  onChange={this.update('caption')}
                  />
              </label>

              <label>
                <button
                  onClick={this.handleSubmit}
                  className='upload-button'>Share</button>
              </label>

              <ul>
                {this.errors()}
              </ul>

            </form>
          </div>

        </section>
        <footer className='session-footer'>
          <div className='footer-items-left'>
            <a href="http://hireandrewcho.today/"
              className="footer-item" >
              <span className="label">Portfolio</span>
            </a>
            <a href="https://github.com/andrewopes789"
              className="footer-item" target="_blank">
              <span className="label">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/andrew-cho-64b082155/"
              className="footer-item" target="_blank">
              <span className="label">LinkedIn</span>
            </a>
          </div>
          <div className='footer-items-right'>
            © Andrew Cho 2018
          </div>
        </footer>
      </div>
    );
  }
}

export default PhotoUpload;
