import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs';
import React, { useState } from 'react';

export const App = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.name === restaurantName
  );
  return (
    <div>
      <Tabs
        restaurants={restaurants}
        setRestaurantName={setRestaurantName}
        restaurantName={restaurantName}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
