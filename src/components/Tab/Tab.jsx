import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tab = ({
  tabPath,
  tabName,
  selectorTabId,
  selectorTabIdObj,
  className,
}) => {
  const tab = useSelector((state) =>
    selectorTabId ? selectorTabId(state, selectorTabIdObj) : {}
  );

  if (!tab) {
    return null;
  }

  return (
    <NavLink
      to={`${tabPath}`}
      size={Size.l}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.isActive]: isActive,
        })
      }
    >
      {tab[`${tabName}`] ? tab[`${tabName}`] : tabName}
    </NavLink>
  );
};
