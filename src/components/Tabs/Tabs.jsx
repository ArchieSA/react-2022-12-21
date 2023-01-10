import React from 'react';
import { Tab } from '../Tab/Tab';

export const Tabs = ({ restaurants, setRestaurantName, restaurantName }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <Tab
          restaurant={restaurant}
          setRestaurantName={setRestaurantName}
          restaurantName={restaurantName}
        />
      ))}
    </>
  );
};
