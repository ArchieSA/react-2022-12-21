import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectDishByName, selectIsDishLoading, } from '../../store/modules/dish/selectors';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishes';
import { useSearchParams } from 'react-router-dom';
export const DishesPage = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoading = useSelector(selectIsDishLoading);

    useEffect(() => {
        dispatch(fetchDishes());
    }, []);

    const dishes = useSelector((state) =>
        selectDishByName(state, {
            dishName: searchParams.get('dishName') || '',
        })
    );

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div>
            <input
                value={searchParams.get('dishName') || ''} placeholder="Поиск"
                onChange={(event) => setSearchParams({ dishName: event.target.value || '' })}
            />
            <ul>
                {dishes.map(({ id: dishId, name }) => (
                    <li key={dishId}>{<NavLink to={dishId}>{name}</NavLink>}</li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};