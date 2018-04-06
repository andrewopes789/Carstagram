import React from 'react';

class ResultRender extends React.Component {
  render() {
    let result = this.props.result;
    return (
      <div>
        {result.username}
      </div>
    );
  }
}

export default ResultRender;
