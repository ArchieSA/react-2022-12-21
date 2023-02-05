import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { useParams, Outlet } from 'react-router-dom';
import {Tab} from './Tab/Tab'
import styles from './styles.module.css';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
        <Tab name='menu' className={styles.tab} />
        <Tab name='reviews' className={styles.tab} />
        <Outlet/>
    </div>
  );
};
