import { Button } from '../Button/Button';

export const Dish = ({ name, price, ingredients }) => {
    return (
        <div>
            <div>
                Name: {name}
                <Button>-</Button>
                <Button>+</Button>
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Ingredients: {ingredients.join(', ')}
            </div>
        </div>
    )
}