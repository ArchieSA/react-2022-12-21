import { useState } from 'react';

import { Button } from '../Button/Button';
import { Ingredient } from '../Ingredient/Ingredient';

import {
  MIN_DISH_AMOUNT,
  MAX_DISH_AMOUNT,
} from '../../constants/order-details';

export const Dish = ({ dish }) => {
  const {
    name,
    price,
    ingredients,
  } = dish;

  const [dishAmount, setAmount] = useState(0);

  const addDish = () => {
    if (dishAmount === MAX_DISH_AMOUNT) {
      return;
    }
    setAmount(dishAmount + 1);
  }

  const removeDish = () => {
    if (dishAmount === MIN_DISH_AMOUNT) {
      return;
    }
    setAmount(dishAmount - 1);
  }

  return (
    <div>
      <h4>{name || 'Noname dish'}</h4>

      <p>${price || 'Price is not provided'}</p>


      <Button onClick={removeDish}>-</Button>
      
      {!!dishAmount && <span>{dishAmount}</span>}

      <Button onClick={addDish}>+</Button>
      
      { !!dishAmount
        && ingredients?.length > 0
        && (
          <ul>
            {
              ingredients.map((ingredient, index) => (
                <li key={`${ingredient}_${index}`}>
                  <Ingredient name={ingredient} />
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}
