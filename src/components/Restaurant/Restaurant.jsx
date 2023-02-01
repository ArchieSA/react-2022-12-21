import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

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
      <div>
        {['Menu', 'Reviews'].map((tab) => (
          <NavLink
            to={tab}
            className={({ isActive }) =>
              classnames(styles.tab, {
                [styles.isActive]: isActive,
              })
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>
      <Outlet />

      {/*<Rating value={rating} size={Size.l} />*/}
      {/* <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} /> */}
    </div>
  );
};
