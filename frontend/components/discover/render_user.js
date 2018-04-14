import React from 'react';
import FollowButton from '../user/follow_button';
import { Link } from 'react-router-dom';

class RenderUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.user;
    return (
      <div className='explore-users-item' key={this.props.id}>
        <div className='explore-users-content'>
          <Link to={`/users/${user.id}`}>
            <img
            className='explore-user-img'
            src={user.img_url}/>
          </Link>

          <div className='explore-user-text-container'>
            <Link to={`/users/${user.id}`}>
              <div className='explore-user-username'>
              {user.username}
              </div>
            </Link>
            <div className='explore-recommended'>
            Carstagram recommended
            </div>
          </div>
          
          
          <FollowButton
          currentUser={this.props.currentUser}
          user={user}
          createFollow={this.props.createFollow}
          deleteFollow={this.props.deleteFollow}
          logout={this.props.logout}/>
        </div>
      </div>
    );
  }
}

export default RenderUser;
