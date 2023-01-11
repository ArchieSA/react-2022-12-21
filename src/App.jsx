import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React from 'react';
import {Tabs} from "./components/Tabs/Tabs";

export const App = () => {
  const [ active, setActive ] = React.useState(0)
  const openTab = index => {
    setActive(index)
  };

  return (
    <div>
      {<Tabs tabs={restaurants.map(r => r.name)} clickHandler={openTab} />}
      {<Restaurant restaurant={restaurants[active]} />}
    </div>
  );
};
