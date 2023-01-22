import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/modules/cart/actions';
import { selectCartDishIds } from '../../store/modules/cart/selectors';
import { Dish } from '../Dish/Dish';

export const Cart = () => {
  // const dishIds = useSelector(state => selectCartDishIds(state));
  const dishIds = useSelector(selectCartDishIds);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {dishIds.length > 0 ? (
        <div>
          {dishIds.map((dishId) => (
            <Dish key={dishId} dishId={dishId} />
          ))}
          <button onClick={() => dispatch(clearCart())}>Clear</button>
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};
