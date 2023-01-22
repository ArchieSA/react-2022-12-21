import styles from './styles.module.css';
import classnames from 'classnames';

import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selector';

export const User = ({ userId, className }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return null;
  }

  const { name } = user;

  return (
    <div className={classnames(styles.root, styles[className])}>
      <div>{name}</div>
    </div>
  );
};
