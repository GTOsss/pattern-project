import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from 'containers/registration/login';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {

};

Login.defaultProps = {

};

export default Login;
