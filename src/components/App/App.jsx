import { useState } from 'react';

import { MainContent } from '../MainContent/MainContent';

export const App = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
    <div>
      <MainContent
        restaurants={restaurants}
        activeRestaurantId={activeRestaurantId}
        setActiveRestaurantId={setActiveRestaurantId}
      />
    </div>
  );
};
