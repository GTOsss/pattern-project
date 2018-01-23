import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Registration, Login, NavbarRegistration } from 'containers/registration';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <NavbarRegistration />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
