import { useState } from 'react';

import { Button } from '../Button/Button';

import {
  MIN_INGREDIENT_AMOUNT,
  MAX_INGREDIENT_AMOUNT,
} from '../../constants/order-details';

export const Ingredient = ({ name }) => {
  const [ingredientAmount, setIngredientAmount] = useState(1);

  const addIngredient = () => {
    if (ingredientAmount === MIN_INGREDIENT_AMOUNT) {
      return;
    }
    setIngredientAmount(ingredientAmount - 1);
  };

  const removeIngredient = () => {
    if (ingredientAmount === MAX_INGREDIENT_AMOUNT) {
      return;
    }
    setIngredientAmount(ingredientAmount + 1);
  };

  return (
    <div>
      <p>{name}</p>

      <Button onClick={addIngredient} disabled={ingredientAmount === 1}>
        -
      </Button>

      <span>{ingredientAmount}</span>

      <Button onClick={removeIngredient} disabled={ingredientAmount === 5}>
        +
      </Button>
    </div>
  );
};
