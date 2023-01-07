import { Button } from '../Button/Button';
import { useState } from 'react';
import { Ingredient } from '../Ingredient/Ingredient';

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    const handleChange = (value) => {
        if (value >= 0 && value <= 5) setCount(value);
    };

    return (
        <div>
            {dish.name}
            <div>
                <Button onClick={() => handleChange(count - 1)}>-</Button>
                {count}
                <Button onClick={() => handleChange(count + 1)}>+</Button>
                {count > 0 && <h3>Ингредиенты</h3>}
                {count > 0 && dish.ingredients.map((e, i) => <Ingredient key={i} name={e} />)}
            </div>
        </div>
    );
};
