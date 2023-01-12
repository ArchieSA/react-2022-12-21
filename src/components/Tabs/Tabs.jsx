import { Tab } from "../Tab/Tabs";

export const Tabs = ({
  restaurants,
  setActiveRestaurant,
  activeRestaurant,
}) => {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "max-content",
      }}
    >
      {restaurants.map((restaurant) => (
        <Tab
          setActiveRestaurant={setActiveRestaurant}
          activeRestaurant={activeRestaurant}
          restaurant={restaurant}
        ></Tab>
      ))}
    </div>
  );
};
