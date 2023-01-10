import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      {
        <Tabs
          restaurants={restaurants}
          activeRestaurant={activeRestaurant}
          setActiveRestaurant={setActiveRestaurant}
        />
      }
      {<Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
