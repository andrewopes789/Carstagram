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
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin (e) {
    e.preventDefault();
    this.props.login({
      email: 'demo@email.com',
      username: 'demo',
      password: 'password'
    });
  }

  render () {
    return(
      <div className='session-all-container'>
        <div className='session-all'>

          <div className='session-photo'></div>

          <div className='session-text'>
            <div className='session-form'>

              <form onSubmit={this.handleSubmit}>

                <h2 className='logo-text'>Carstagram</h2>
                <p className='session-blurb'>Sign up to see photos and videos of your favorite cars.</p>

                <button onClick={this.demoLogin} className="session-button">
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

          <footer className='session-footer'>
            <div class='footer-items-left'>
              <a href="http://hireandrewcho.today/"
                class="footer-item" >
                <span class="label">Portfolio</span>
              </a>
              <a href="https://github.com/andrewopes789"
                class="footer-item" target="_blank">
                <span class="label">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/andrew-cho-64b082155/"
                class="footer-item" target="_blank">
                <span class="label">LinkedIn</span>
              </a>
            </div>
            <div class='footer-items-right'>
              © 2018 Andrew Cho
            </div>
          </footer>
      </div>
    );
  }
}

export default Signup;
