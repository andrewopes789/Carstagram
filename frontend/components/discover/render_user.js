import React from 'react';

class RenderUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    return (
      <div className='explore-users-item' key={this.props.id}>
        <div className='explore-users-content'>
          <img
          className='explore-user-img'
          src={user.img_url}/>
          
          <div className='explore-user-username'>
          {user.username}
          </div>
        </div>
      </div>
    );
  }
}

export default RenderUser;
