import actionTypes from './actionTypes';

const usersLoadStart = () => ({
  type: actionTypes.USERS_LOAD_START,
});

const usersLoadSuccess = (users) => ({
  type: actionTypes.USERS_LOAD_SUCCES,
  payload: users,
});

const usersLoadError = (errorMessage) => ({
  type: actionTypes.USERS_LOAD_ERROR,
  payload: errorMessage,
});

const action = {
  usersLoadStart,
  usersLoadSuccess,
  usersLoadError,
};

export default action;
