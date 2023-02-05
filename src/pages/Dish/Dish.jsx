import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { selectRestaurantsByDishId } from '../../store/modules/restaurant/selectors';
import {Dish} from "../../components/Dish/Dish";
import styles from './styles.module.css';
import {useEffect} from "react";
import {fetchRestaurants} from "../../store/modules/restaurant/thunk/fetchRestaurants";


export const DishPage = () => {
    const dispatch = useDispatch();
    const { dishId } = useParams();
    const restaurants = useSelector((state) =>
        selectRestaurantsByDishId(state, { dishId })
    );

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []);


    return (
        <div>
            <div className={styles.dish}>
                <label>Информация</label>
                <Dish dishId={dishId} />
            </div>
            <div>
                <label>Есть в ресторанах</label>
                <div className={styles.restaurants}>
                    {restaurants.map(({ id, name }) => (
                        <NavLink to={`/restaurants/${id}`} key={id}>{name}</NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};