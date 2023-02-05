import { Size } from '../../constants/ui';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tab = ({ path, name, className }) => {
  return (
    <NavLink
      to={`${path}`}
      size={Size.l}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.isActive]: isActive,
        })
      }
    >
      {name}
    </NavLink>
  );
};
