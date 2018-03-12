import React from 'react';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchChatrooms();
  }

  render() {
    return (
      <div>
        <section className='photo-detail'>
          These are your chatrooms y'all

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

export default Chatroom;
