import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export const User = ({ userId }) => {
  const user = useSelector(selectUserById(userId))

  return (
    <div>
      <b>{user.name}</b>
    </div>
  );
};
