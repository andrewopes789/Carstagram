import React from 'react';
import { Link } from 'react-router-dom';

class ResultRender extends React.Component {
  render() {
    let result = this.props.result;
    return (
      <div className='result-item-container'>
        <Link to={`/users/${result.id}`}>
          <img className='result-item-photo' src={result.img_url} />
          <div>
          {result.username}
          </div>
        </Link>
      </div>
    );
  }
}

export default ResultRender;
