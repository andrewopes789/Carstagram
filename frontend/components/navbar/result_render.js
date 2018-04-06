import React from 'react';

class ResultRender extends React.Component {
  render() {
    let result = this.props.result;
    return (
      <div className='result-item-container'>
        <img className='result-item-photo' src={result.img_url} />
        <div>
          {result.username}
        </div>
      </div>
    );
  }
}

export default ResultRender;
