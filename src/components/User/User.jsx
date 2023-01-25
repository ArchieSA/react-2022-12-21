import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
