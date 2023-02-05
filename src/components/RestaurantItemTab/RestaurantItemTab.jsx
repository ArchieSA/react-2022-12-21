import { Size } from '../../constants/ui';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

export const RestaurantItemTab = ({ tabName }) => {
  return (
    <NavLink
      to={`${tabName}`}
      size={Size.s}
      className={({ isActive }) =>
        classnames(styles.root, {
          [styles.isActive]: isActive,
        })
      }
    >
      {tabName}
    </NavLink>
  );
};
