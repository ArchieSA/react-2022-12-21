import { Tab } from '../Tab/Tab';

export const Tabs = (props) => {
  const {
    restaurants,
    setActiveRestaurantId,
  } = props;

  return (
    <ul>
      {restaurants?.length > 0
      ? restaurants.map((restaurant) => (
        <li key={restaurant['id']}>
          <Tab setActiveRestaurantId={setActiveRestaurantId} restaurant={restaurant}/>
        </li>
      ))
      : 'No restaurants found'}
    </ul>
  );
};
