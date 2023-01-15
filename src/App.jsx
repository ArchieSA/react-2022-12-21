import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React from 'react';
import {Tabs} from "./components/Tabs/Tabs";

export const App = () => {
  const [ activeRestaurantIndex, setActive ] = React.useState(0)

  return (
    <div>
      {<Tabs tabs={restaurants.map(r => r.name)} onTabSelect={setActive} />}
      {<Restaurant restaurant={restaurants[activeRestaurantIndex]} />}
    </div>
  );
};
