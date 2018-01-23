import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/dropdown';
import { translate } from 'react-i18next';
import Button from './button';
import style from './change-language.scss';

const languages = [
  { key: 'ru', value: 'русский' },
  { key: 'en', value: 'english' },
];

class ChangeLanguage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false,
    };

    this.onClickItemList = this.onClickItemList.bind(this);
    this.onClickButtonLanguage = this.onClickButtonLanguage.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickOutside);
  }

  onClickOutside(e) {
    if (this.dropdown && !this.dropdown.contains(e.target)) {
      this.setState({ showDropDown: false });
    }
  }

  onClickItemList(key) {
    const { i18n } = this.props;
    i18n.changeLanguage(key);
    this.setState({ showDropDown: false });
  }

  onClickButtonLanguage() {
    const { showDropDown } = this.state;
    this.setState({ showDropDown: !showDropDown });
  }

  render() {
    const { t } = this.props;
    const { showDropDown } = this.state;
    return (
      <div>
        <Button onClick={this.onClickButtonLanguage}>
          {t('language')}
        </Button>
        {showDropDown ?
          <div ref={(e) => { this.dropdown = e; }}>
            <Dropdown
              className={style.dropdownLanguage}
            >
              <ul className={style.list}>
                {languages.map(({ key, value }) => (
                  <li
                    className={style.itemList}
                    onClick={() => this.onClickItemList(key)}
                    key={key}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </Dropdown>
          </div>
          : null}
      </div>
    );
  }
}

ChangeLanguage.propTypes = {
  i18n: PropTypes.objectOf(PropTypes.any).isRequired,
  t: PropTypes.func.isRequired,
};

ChangeLanguage.defaultProps = {

};

export default translate('default')(ChangeLanguage);
