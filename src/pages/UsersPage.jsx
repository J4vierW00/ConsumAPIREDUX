import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersAsync } from '../redux/reducers/users/thunks';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { isLoading, users, errorMessage } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>User Listing</h1>
      {isLoading && <h3>Loading...</h3>}
      {users && users.map((user) => <h5 key={user.id}>{user.name}</h5>)}
      {errorMessage && <h3>{errorMessage}</h3>}
    </div>
  );
};

export default UsersPage;
