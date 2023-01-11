import { Dish } from "../Dish/Dish";

export function Menu({ menu }) {
    return (
        <div>
            <h2>Menu</h2>
            { 
                <ul>
                    {menu.map(({ name, price, ingredients}) => (
                        <li>
                            <Dish name={name} price={price} ingredients={ingredients}/>
                        </li>)
                    )}
                </ul>
            }
        </div>
    );
};