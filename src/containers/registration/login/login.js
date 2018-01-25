import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
  Label,
  WrapLabelInput,
} from 'components/inputs';
import { Field, reduxForm } from 'redux-form';

import style from './login.scss';

class Login extends Component {
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
          <Label htmlFor="login">Логин</Label>
          <Field
            name="login"
            component={Input}
            id="login"
          />
        </WrapLabelInput>

        <WrapLabelInput>
          <Label htmlFor="password">Пароль</Label>
          <Field
            name="password"
            component={Input}
            id="password"
            type="password"
          />
        </WrapLabelInput>

        <Button
          className={style.buttonLogin}
          type="submit"
          value="Вход"
        />
      </form>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
};

Login.defaultProps = {
  handleSubmit: null,
};

const Form = reduxForm({ form: 'login' })(Login);

export default Form;
