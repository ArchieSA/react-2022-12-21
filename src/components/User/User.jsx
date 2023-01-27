import { useSelector } from 'react-redux';
import {
  selectUserById,
  selectIsUserLoading,
} from '../../store/modules/user/selectors';
import React from 'react';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  const isLoading = useSelector(selectIsUserLoading);

  if (isLoading) {
    return <span>Loading users...</span>;
  }

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
