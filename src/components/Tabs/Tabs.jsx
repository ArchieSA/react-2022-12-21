import { Tab } from '../Tab/Tab';

export const Tabs = ({
  restaurants,
  activeRestaurant,
  setActiveRestaurant,
}) => {
  return (
    <div>
      {restaurants.map((item) => (
        <Tab
          restaurant={item}
          setActiveRestaurant={setActiveRestaurant}
          activeRestaurant={activeRestaurant}
        />
      ))}
    </div>
  );
};
