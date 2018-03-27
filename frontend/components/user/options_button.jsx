import React from 'react';

const OptionsButton = (props) => {
  let button = props.user.id !== props.currentUser.id ? (
    <i
      className='fa fa-ellipsis-h message-user'
      />
   ) : null;

  return button;
  };

export default OptionsButton;
