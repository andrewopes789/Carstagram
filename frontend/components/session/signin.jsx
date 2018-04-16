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
      <div className='session-all-container'>
        <div className='session-all'>

          <img
            src='http://res.cloudinary.com/dn26kjpum/image/upload/v1523851649/Screen_Shot_2018-04-15_at_9.06.24_PM_wn2yoj.png'
            alt='session photo'
            className='session-photo'/>

          <div className='session-text'>
            <div className='session-form'>

              <form onSubmit={this.handleSubmit}>

                <h2 className='logo-text'>Carstagram</h2>

                <div >
                  <label className="input-container">
                    <input
                      type='text'
                      onChange={this.handleInput('username')}
                      placeholder='Username'
                      className='session-input'
                      />
                  </label>
                </div>

                <div >
                  <label className="input-container">
                    <input
                      type='password'
                      value={this.state.password}
                      onChange={this.handleInput('password')}
                      placeholder='Password'
                      className='session-input'
                      />
                  </label>
                </div>

                <div className='button'>
                  <button type="submit" className="session-button">Log in</button>
                </div>

                {this.renderErrors()}

              </form>
            </div>

            <div className='change-form'>
              <label>Don't have an account? &nbsp;
                <Link to="/signup" className='link'>Sign up</Link>
              </label>

            </div>
            <p className='get-the-app'>Get the app.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
