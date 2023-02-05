import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { useParams, Outlet } from 'react-router-dom';
import { RestaurantItemTab } from '../RestaurantItemTab/RestaurantItemTab';

import styles from './styles.module.css';

import { restautantItemTabs }  from '../../constants/restaurant-item-tabs';

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
      
      <div className={styles.tabs}>
        {restautantItemTabs.map((tab, index) => <RestaurantItemTab key={tab} tabName={tab} />)}
      </div>

      <Outlet />
      {/*<Rating value={rating} size={Size.l} />*/}
      {/* <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} /> */}
    </div>
  );
};
