import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById, selectIsUserLoading } from '../../store/modules/user/selectors';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector(selectIsUserLoading);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
