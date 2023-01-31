import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { Outlet, useParams } from 'react-router-dom';
import { RestaurantTab } from './RestaurantTab/RestaurantTab';
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
      {Object.keys(restaurant)
        .filter((key) => key === 'reviews' || key === 'menu')
        .map((key) => (
          <RestaurantTab name={key} className={styles.tab} />
        ))}
      {/*<Rating value={rating} size={Size.l} />*/}
      {/* <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} /> */}
      <Outlet />
    </div>
  );
};
