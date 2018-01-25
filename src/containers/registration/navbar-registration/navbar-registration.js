import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, NavBar } from 'components/nav-bar';
import ChangeLanguage from 'containers/change-language';
import style from './navbar-registration.scss';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

class NavbarRegistration extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <NavBar>
          <NavLink to="/login">{t('login')}</NavLink>
          <NavLink to="/registration">{t('registration')}</NavLink>
          <ChangeLanguage />
        </NavBar>
      </div>
    );
  }
}

NavbarRegistration.propTypes = {

};

NavbarRegistration.defaultProps = {

};

const mapStateToProps = state => ({
  location: state.routing.location,
});

const NavbarRegistrationT = translate('default')(NavbarRegistration);

export default connect(mapStateToProps)(NavbarRegistrationT);
