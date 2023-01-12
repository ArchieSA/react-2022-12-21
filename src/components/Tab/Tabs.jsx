import { Button } from "../Button/Button";

export const Tab = ({ restaurant, setActiveRestaurant, activeRestaurant }) => {
  return (
    <div style={{ display: "inline", margin: "5px" }}>
      <Button
        onClick={() => setActiveRestaurant(restaurant)}
        disabled={activeRestaurant.name === restaurant.name}
      >
        {restaurant.name}
      </Button>
    </div>
  );
};
