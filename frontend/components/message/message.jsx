import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <section className='photo-detail'>
          These are your messages y'all

        </section>
      </div>
    );
  }
}

export default Message;
