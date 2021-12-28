import UserService from '../../../services/usersService';
import actions from './actions';

export const loadUsersAsync = () => (dispatch) => {
  dispatch(actions.usersLoadStart());

  UserService.getAllUsers()
    .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.usersLoadError(error.message)));
};
