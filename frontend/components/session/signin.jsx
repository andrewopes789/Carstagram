import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors () {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  render () {
    return(
      <div className='session-form'>
        <form onSubmit={this.handleSubmit}>
          <h2>Carstagram</h2>
          {this.renderErrors()}
          <label>
            <input
              type='text'
              onChange={this.handleInput('username')}
              placeholder='Username'
              className='session-input'
            />
          </label>
          <br/>
          <br/>
          <label>
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder='Password'
              className='session-input'
            />
          </label>
          <br/>
          <br/>
          <button type="submit" className="session-button">Log In</button>
          <br/>
          <br/>
          <label>Don't have an account? &nbsp;
            <Link to="/signup">Sign up</Link>
          </label>

        </form>
      </div>
    );
  }
}

export default Signin;
