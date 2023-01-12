import { Tab } from '../Tab/Tab';

export const Tabs = ({
  restaurants,
  activeRestaurant,
  setActiveRestaurant,
}) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Tab
          restaurant={restaurant}
          activeRestaurant={activeRestaurant}
          setActiveRestaurant={setActiveRestaurant}
        />
      ))}
    </div>
  );
};
