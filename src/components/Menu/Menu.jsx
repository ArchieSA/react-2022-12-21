import { Dish } from "../Dish/Dish";
import './Menu.css';

export const Menu = ({ menu }) => {
    return (
        <div className="menu">
            <h2>Menu</h2>
            <ul className="menu-list">
                {
                    menu && menu.map( ({ name, price, ingredients }) => <li>
                        <Dish name={name} price={price} ingredients={ingredients} />
                    </li>)
                }
            </ul>
        </div>
    )
}
