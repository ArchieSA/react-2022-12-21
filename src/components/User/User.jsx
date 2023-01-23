import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsUserLoading,
  selectUserById,
} from '../../store/modules/user/selectors';
import React, { useEffect } from 'react';
import { loadUsers } from '../../store/modules/user/actions';

export const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  if (isLoading) {
    return <span>Loading user ...</span>;
  }

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
