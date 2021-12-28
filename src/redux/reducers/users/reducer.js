import actionTypes from './actionTypes';
import initialStates from './initialStates';

const usersReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.USERS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        users: null,
        errorMessage: null,
      };

    case actionTypes.USERS_LOAD_SUCCES:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };

    case actionTypes.USERS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
