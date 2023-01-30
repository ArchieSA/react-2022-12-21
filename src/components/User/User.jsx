import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../store/modules/user/actions';
import { selectUserById, selectIsUserLoading } from '../../store/modules/user/selectors';

export const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
