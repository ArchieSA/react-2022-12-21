import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';



export const App = () => {
  const[isIndex, setisIndex] = useState();
  function show(id){
    setisIndex(id)
  }
  
  return (
    <div>
      <Tabs onClick={show}/>
      {restaurants.map((restaurant, index) =>
          <div>
                {index === isIndex ? <Restaurant restaurant={restaurant}/> : null }
          </div>
            
        )}
      {/*<Tabs />*/}
      {/*<Restaurant restaurant={activeRestaurant} />*/}
      
    </div>
  );
};
