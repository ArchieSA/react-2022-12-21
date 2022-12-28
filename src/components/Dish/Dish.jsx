import {Button} from "../Button/Button";

export const Dish = ({ name, price, ingredients }) => {
    return (
        <div>
            <div>{name}</div>
            <Button>-</Button>
            <Button>+</Button>
            <div>Price: {price}$</div>
            <div>
                <ul>
                    {
                        ingredients.map((ingredient) => <li>{ingredient}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}