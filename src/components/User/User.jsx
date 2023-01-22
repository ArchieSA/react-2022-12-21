import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export const User = ({ userId, className }) => {
  const user = useSelector(selectUserById(userId))

  return (
    <div className={className}>
      <b>{user.name}</b>
    </div>
  );
};
