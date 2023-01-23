import styles from './styles.module.css';
import { Size } from '../../constants/ui';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../store/modules/user/selectors';

export const User = ({ userId, className, size = Size.m }) => {
    const user = useSelector((state) => selectUserById(state, { userId }));
  
    return ( (user) ?
      <div className={classnames(styles.root, className, styles[size])} >
        <div>{user.name}</div>
      </div>
      : null
    );
  };