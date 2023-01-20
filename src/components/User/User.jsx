import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export default function User({ userId, className }) {
  const user = useSelector((state) => selectUserById(state, { userId }));
  return <div>{user.name}</div>;
}
