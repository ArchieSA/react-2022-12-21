import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export const User = ({ userId, className }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  return <div className={className}>{user.name}</div>;
};
