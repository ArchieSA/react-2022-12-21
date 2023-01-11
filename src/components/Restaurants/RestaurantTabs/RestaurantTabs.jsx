import { useState } from 'react'
import { Button } from '../../Button/Button'
import { Restaurant } from '../../Restaurant/Restaurant'
import { Tabs } from '../../Tabs/Tabs';

export const RestaurantTabs = ({restaurants}) => {

    return(
        <Tabs 
            sourceArray={restaurants} 
            buttonTextProvider={(restaurant) => restaurant.name} 
            tabBuildFunction={restaurant => <Restaurant restaurant={restaurant}></Restaurant>}
        />
    )
}