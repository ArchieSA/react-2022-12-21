import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink, Navigate, Outlet, Route, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './styles.module.css'
import classNames from 'classnames';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  const navigate = useNavigate()
  // const rating = useMemo(
  //   () =>
  //     Math.round(
  //       reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  //     ),
  //   [reviews]
  // );

  useEffect(() => {
    navigate('menu')
  }, [restaurantId])

  if (!restaurant) {
    return null;
  }

  console.log(styles);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/*<Rating value={rating} size={Size.l} />*/}
      <div>
        <NavLink to="menu"
          className={({ isActive }) => classNames(styles.navlink, {
            [styles.isActive]: isActive,
          })}
        >
          Menu
        </NavLink>
        <NavLink to="reviews"
          className={({ isActive }) => classNames(styles.navlink, {
            [styles.isActive]: isActive,
          })}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
