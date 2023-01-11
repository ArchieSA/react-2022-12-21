import { useState } from 'react';

export const Tabs = ({RestaurantsObj, updateData}) => {

    const [activeId, setActiveId] = useState(RestaurantsObj[0].id);

    return (
      <div>
        <div style={{backgroundColor: '#ccc',textAlign: 'center', padding: 10}}>
            {RestaurantsObj.map((restaurant) =>
                <span key={restaurant.id} Style={'padding: 10px;'}>
                                    
                    <button id={restaurant.id} 
                    Style={(activeId === restaurant.id) ? 'color: red;' : null} 
                    onClick={() => { updateData(restaurant.id); setActiveId(restaurant.id)} }>{restaurant.name}</button>
                             
                </span>   
            )}
        </div>
        <br />
      </div>
    );
};