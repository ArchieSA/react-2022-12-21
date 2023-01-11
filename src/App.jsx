import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs';
import React, { useState } from 'react';

export const App = () => {
  let [activeRestaurant, setActiveRestaurant] = useState(null);
  return (
    <div>
      <Tabs
        restaurants={restaurants}
        setActiveRestaurant={setActiveRestaurant}
        activeRestaurant={activeRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
