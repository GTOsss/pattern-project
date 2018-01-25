import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
  Label,
  WrapLabelInput,
} from 'components/inputs';
import { reduxForm, Field } from 'redux-form';

import style from './registration.scss';

class Registration extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className={style.form}
      >
        <WrapLabelInput>
          <Label htmlFor="login">
            Login
          </Label>
          <Field
            name="login"
            component={Input}
            id="login"
          />
        </WrapLabelInput>
        <WrapLabelInput>
          <Label htmlFor="email">
            E-mail
          </Label>
          <Field
            name="email"
            component={Input}
            id="email"
          />
        </WrapLabelInput>
        <WrapLabelInput>
          <Label htmlFor="password">
            Password
          </Label>
          <Field
            name="password"
            component={Input}
            id="password"
            type="password"
          />
        </WrapLabelInput>
        <WrapLabelInput>
          <Label htmlFor="confirmPassword">
            Confirm password
          </Label>
          <Field
            name="confirmPassword"
            component={Input}
            id="confirmPassword"
            type="password"
          />
        </WrapLabelInput>
        <Button
          value="Регистрация"
          type="submit"
          className={style.button}
        />
      </form>
    );
  }
}

Registration.propTypes = {
  handleSubmit: PropTypes.func,
};

Registration.defaultProps = {
  handleSubmit: null,
};

const Form = reduxForm({ form: 'registration' })(Registration);

export default Form;
