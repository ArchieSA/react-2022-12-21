import { restaurants } from './constants/fixtures';
import { Tabs } from './components/Tabs/Tabs';
import { Restaurants } from './components/Restaurants/Restaurants';
import { useState } from 'react';

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div>
      <Tabs
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
        setActiveRestaurant={setActiveRestaurant}
      />

      <Restaurants
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
      />
    </div>
  );
};
