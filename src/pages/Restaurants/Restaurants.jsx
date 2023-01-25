import { Tabs } from '../../components/Tabs/Tabs';
import { Cart } from '../../components/Cart/Cart';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../../store/modules/restaurant/actions';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';


export const RestaurantsPage = () => {
    const dispatch = useDispatch();
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const isLoading = useSelector(selectIsRestaurantLoading);

    useEffect(() => {
        dispatch(loadRestaurants());
    }, []);

    if (isLoading) {
        return <span>Loading...</span>
    }

    return (
        <div>
            <Tabs
                onTabClick={setActiveRestaurantId}
                activeId={activeRestaurantId}
            />
            {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
            <Cart />
        </div>
    );
}