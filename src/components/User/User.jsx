import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsUserLoading,
  selectUserById,
} from '../../store/modules/user/selectors';
import React, { useEffect } from 'react';
import { loadUsers } from '../../store/modules/user/actions';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
