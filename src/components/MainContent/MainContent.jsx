import { Restaurant } from '../Restaurant/Restaurant';
import { Tabs } from '../Tabs/Tabs';

export const MainContent = (props) => {
  const { restaurants, activeRestaurantId } = props;

  const activeRestaurant = restaurants.find((item) => item.id === activeRestaurantId);

  return (
    <div>
      <Tabs {...props} />

      {
        activeRestaurant
        ? <Restaurant {...activeRestaurant}/>
        : 'Pick a restaurant'
      }
    </div>
  );
};
