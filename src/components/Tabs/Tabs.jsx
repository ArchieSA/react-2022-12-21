import { Tab } from '../Tab/Tab';

export const Tabs = (props) => {
  const { restaurants, setActiveRestaurantId, activeRestaurant } = props;

  return (
    <ul>
      {restaurants?.length > 0
        ? restaurants.map((restaurant) => (
            <li key={restaurant['id']}>
              <Tab
                onTabClick={setActiveRestaurantId}
                restaurant={restaurant}
                isActive={restaurant.id === activeRestaurant?.id}
              />
            </li>
          ))
        : 'No restaurants found'}
    </ul>
  );
};
