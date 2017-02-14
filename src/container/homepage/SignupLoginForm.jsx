import React from 'react';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';



class SignupLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LoginPage />;
  }
  return <SignupPage />;
}

function LoginButton(props) {
  return (
    <div>
      <div className="signup-login-options">
        <p>Have an account?
        <span className="signup-login-option" onClick={props.onClick}>
           &nbsp;Login
        </span>
        </p>
      </div>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div>
      <div className="signup-login-options">
        <p>Don't have an account?
        <span className="signup-login-option" onClick={props.onClick}>
           &nbsp;Sign up
        </span>
        </p>
      </div>
    </div>
  );
}

export default SignupLoginForm;
