import { Dish } from "../Dish/Dish";
export const Menu = ({menu}) => {
    return (
        <div>
            <h2>Menu</h2>
                <ul>
                    {menu.map(({name}) => 
                        <li><Dish name={name}></Dish></li>
                    )}
                </ul>
                
        </div>
    );
};
