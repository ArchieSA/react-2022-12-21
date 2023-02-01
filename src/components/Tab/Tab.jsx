import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tab = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <NavLink
      to={`${restaurantId}`}
      size={Size.l}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.isActive]: isActive,
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
