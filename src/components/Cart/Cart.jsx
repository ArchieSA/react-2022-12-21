import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../store/modules/cart';
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
            <Dish dishId={dishId} />
          ))}
          <button onClick={() => dispatch(cartSlice.actions.clear())}>Clear</button>
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};
