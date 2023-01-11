import { Tab } from '../Tab/Tab';

export const Tabs = ({
  restaurants,
  setActiveRestaurant,
  activeRestaurant,
}) => {
  return (
    <div>
      {restaurants &&
        restaurants.map((i) => (
          <Tab
            restaurant={i}
            key={i.id}
            setActiveRestaurant={setActiveRestaurant}
            active={activeRestaurant ? activeRestaurant === i : false}
          />
        ))}
    </div>
  );
};
