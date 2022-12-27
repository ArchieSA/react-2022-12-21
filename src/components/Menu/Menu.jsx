import { Dish } from "./Dish/Dish"

export const Menu = ({menu}) => {
    return (
    <div>
        <h2>Restaurant menu</h2>
        <ol className="menu">
            {menu?.map(option => <Dish name={option.name} price = {option.price} ingredients = {option.ingredients}> </Dish>)}
        </ol>
    </div>)

}
