import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store/create-store';
import Routes from './routes';
import i18n from './localization';

const history = createBrowserHistory();
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
