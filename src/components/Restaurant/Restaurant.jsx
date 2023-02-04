import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Size } from '../../constants/ui';
import styles from './styles.module.css';
import classNames from 'classnames';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  // const rating = useMemo(
  //   () =>
  //     Math.round(
  //       reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  //     ),
  //   [reviews]
  // );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/*<Rating value={rating} size={Size.l} />*/}
      <NavLink
        to="menu"
        size={Size.l}
        className={({ isActive }) =>
          classNames(styles.root, {
            [styles.isActive]: isActive,
          })
        }
      >
        <p>Menu</p>
      </NavLink>
      <NavLink
        to="reviews"
        size={Size.l}
        className={({ isActive }) =>
          classNames(styles.root, {
            [styles.isActive]: isActive,
          })
        }
      >
        <p>Reviews</p>
      </NavLink>
      <Outlet />
    </div>
  );
};
