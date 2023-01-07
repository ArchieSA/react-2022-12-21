import {Dish} from "../Dish/Dish";

export const Menu = ({menu}) => {

    return (
        <div>
            {                 
                menu?.map(v => (
                    <li key={v.id}>                      
                        <Dish id={v.id} price={v.price} ingredients={v.ingredients} name={v.name} />                                               
                    </li>
                ))                 
            }            
        </div>
    )
}