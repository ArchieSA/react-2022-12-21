import { useState } from 'react';
import { Button } from '../Button/Button';

export const Ingredient = ({ name }) => {
    const [count, setCount] = useState(1);
    const handleChange = (value) => {
        if (value >= 0 && value <= 5) setCount(value);
    };
    return (
        <div>
            <p>{name}</p>
            <Button onClick={() => handleChange(count - 1)}>-</Button>
            {count}
            <Button onClick={() => handleChange(count + 1)}>+</Button>
        </div>
    );
};
