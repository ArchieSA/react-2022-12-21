import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDishById } from '../../store/modules/dish/thunks/fetchDishById';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDishLoading, selectDishById } from '../../store/modules/dish/selectors';
import { selectIsRestaurantLoading, selectRestaurantsByDishId } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';

export const DishPage = () => {
    const { dishId } = useParams();

    const isLoading = useSelector(selectIsDishLoading);
    const dish = useSelector((state) => selectDishById(state, { dishId }));

    const isRestaurantsLoading = useSelector(selectIsRestaurantLoading);
    const restaurants = useSelector((state) => selectRestaurantsByDishId(state, { dishId }))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDishById(dishId))
    }, [dishId])

    useEffect(() => {
        dispatch(fetchRestaurants());
      }, [])
    
    

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div >
            <h2 Style={'color:coral'}>Dish</h2>
            <h3>{dish?.name} (price: {dish?.price}$)</h3>
            <p style={{ fontSize: 16 }}>
                {dish?.ingredients.map((item) => <span key={item} style={{ color: 'grey', marginRight: 10 }}>{item}</span>)}
            </p>
    
            {isRestaurantsLoading && <span>Restaurants loading...</span>}
            <div>
                {restaurants.map(({ id, name }) => 
                <Link key={id} to={`/restaurants/${id}`}>{name}</Link>
                )}
            </div>    
        </div>
      );

}