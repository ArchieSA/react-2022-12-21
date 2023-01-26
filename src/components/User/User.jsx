import { useSelector } from 'react-redux';
import {
  selectIsUserLoading,
  selectUserById,
} from '../../store/modules/user/selectors';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));
  const isLoading = useSelector(selectIsUserLoading);
  // console.log('users are loading', isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
