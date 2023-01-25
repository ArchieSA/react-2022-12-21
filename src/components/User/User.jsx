import { useSelector } from 'react-redux'; 

import { selectUserById } from '../../store/modules/user/selestors';

export const User = ({ userId, className }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}
