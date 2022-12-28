import { Dish } from "../Dish/Dish";
import './Menu.css';

export const Menu = ({ menu }) => {

    if(!menu || (menu?.length > 0 && menu.filter(({name, price}) => name && price).length == 0)) {
        return (
            <div className="menu">
                <h2>Menu</h2>
                <em>No menu available</em>
            </div>
        )
    }

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
