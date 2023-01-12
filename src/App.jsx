import { restaurants } from "./constants/fixtures";
import { Restaraunts } from "./components/Restaurants/Restaurants";
import React, { useState } from "react";
import { Tabs } from "./components/Tabs/Tabs";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState({});
  return (
    <div>
      <Tabs
        setActiveRestaurant={setActiveRestaurant}
        activeRestaurant={activeRestaurant}
        restaurants={restaurants}
      />
      <Restaraunts
        activeRestaurant={activeRestaurant}
        restaurants={restaurants}
      />
    </div>
  );
};
