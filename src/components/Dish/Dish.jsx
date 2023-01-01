export const Dish = ({ ingredients }) => {
    return (<ul>{ingredients.map((name) => <li>{name}</li>)}</ul>)
}