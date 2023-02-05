import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { Outlet, useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';

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

  const tabItems = [];
  tabItems.push({ path: 'menu', name: 'Menu' });
  tabItems.push({ path: 'reviews', name: 'Reviews' });

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/*<Rating value={rating} size={Size.l} />*/}
      <div>
        <Tabs items={tabItems} />
      </div>
      <Outlet />
    </div>
  );
};
