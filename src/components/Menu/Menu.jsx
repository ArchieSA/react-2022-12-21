import {Dish} from "../Dish/Dish";

export const Menu = ({ menu }) => {
    return (<ul>
            {
                menu.map(({name, price, ingredients}) => <li>
                    {name}, {price.toFixed(0)}
                    <Dish ingredients = {ingredients}/>
                    </li>)
            }
            </ul>)
}