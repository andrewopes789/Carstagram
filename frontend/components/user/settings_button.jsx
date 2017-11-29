import React from 'react';

const SettingsButton = (props) => {
  let button = props.user.id === props.currentUser.id ? (
    <i
      className='fa fa-gear profile-option'
      onClick={props.logout}>
    </i> ) : null;

  return button;
  };

export default SettingsButton;
