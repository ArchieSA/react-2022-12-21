import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selector';

export const User = ({ userId, className }) => {
  const { name } = useSelector((state) => selectUserById(state, { userId }));
  return (
    <div className={className}>
      <span>{name}</span>;
    </div>
  );
};
