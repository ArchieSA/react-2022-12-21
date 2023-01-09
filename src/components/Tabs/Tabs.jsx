import { Tab } from '../Tab/Tab';

export const Tabs = ({
  restaurants,
  activeRestaurant,
  setActiveRestaurant,
}) => {
  if (!restaurants) {
    return false;
  }

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
