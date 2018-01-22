import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../store/actions/user';
import Home from './home';
import Profile from './home/profile';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { loading, isLogin } = this.props;

    return (
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {!isLogin && loading.getUser === false ? <Redirect to="/" /> : null}
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
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

const mapDispatchToProps = dispatch => ({
  actions: { ...bindActionCreators(userActions, dispatch) },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
