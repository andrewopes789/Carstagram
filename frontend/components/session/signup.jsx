import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
    this.props.createNewUser(this.state);
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
      <div className='session-all'>

        <div className='session-photo'></div>

        <div className='session-text'>
          <div className='session-form'>

            <form onSubmit={this.handleSubmit}>

              <h2 className='logo-text'>Carstagram</h2>
              <p className='session-blurb'>Sign up to see photos and videos of your favorite cars.</p>
              <button className="session-button">
                <i className="fa fa-user-circle-o"></i>&nbsp;
                  Log in with Demo
                </button>

                <div className='login-or'><span>OR</span></div>

                <div>
                  <label className="input-container">
                    <input
                      type='text'
                      onChange={this.handleInput('email')}
                      placeholder='Email'
                      className='session-input'
                      />
                  </label>
                </div>

                <div>
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
                      onChange={this.handleInput('password')}
                      placeholder='Password'
                      className='session-input'
                      />
                  </label>
                </div>

                <div>
                  <button type="submit" className="session-button">Sign up</button>
                </div>

                {this.renderErrors()}

                <p className="terms-privacy-policy">By signing up, you agree to our <strong>Terms</strong> & <strong>Privacy Policy</strong>.</p>
              </form>
            </div>

            <div className='change-form'>

              <label>Have an account? &nbsp;
                <Link to="/login" className='link'>Log in</Link>
              </label>

            </div>

            <p className='get-the-app'>Get the app.</p>
          </div>
      </div>
    );
  }
}

export default Signup;
