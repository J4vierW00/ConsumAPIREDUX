import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UsersPage from './pages/UsersPage';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UsersPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
