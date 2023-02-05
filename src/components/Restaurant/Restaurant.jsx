import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink, Outlet, useParams } from 'react-router-dom';
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
    <div className={styles.root}>
      <h1>{restaurant.name}</h1>
      <NavLink className={styles.link} to="Menu">Menu</NavLink>
      <NavLink className={styles.link} to="Reviews">Reviews</NavLink>
      <Outlet />
      {/*<Rating value={rating} size={Size.l} />
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />*/}

    </div>
  );
};
