import { restaurants } from './constants/fixtures';
import React from 'react';
import { RestaurantTabs } from './components/Restaurants/RestaurantTabs/RestaurantTabs';

export const App = () => {
  return (
    <div className="rest">
      <RestaurantTabs restaurants={restaurants} />
    </div>
  );
};
