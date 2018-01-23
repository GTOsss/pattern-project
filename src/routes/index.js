import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './home';
import Profile from './home/profile';

class App extends Component {
  render() {
    const { loading, isLogin } = this.props;
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
          {!isLogin && loading.getUser === false ? <Redirect to="/" /> : null}
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.objectOf(PropTypes.bool),
  isLogin: PropTypes.bool,
};

App.defaultProps = {
  loading: {},
  isLogin: false,
};

const mapStateToProps = state => ({
  location: state.routing.location,
});

export default connect(mapStateToProps)(App);
