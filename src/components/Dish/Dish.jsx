export function Dish({ name, price, ingredients }) {
    return (
        <div>
            <h3>{name}</h3>
            <span>{`$${price}`}</span>
            <div>
                {ingredients.map((ingredient => <span>{ingredient}</span>))}
            </div>
        </div>
    );
};