import {Dish} from "../Dish/Dish";

export const Menu = ({menu}) => {

    return (
        <div>
            {                 
                menu?.map(v => (
                    <li key={v.id} >
                      <h4>{v.name}</h4>
                        <Dish id={v.id} price={v.price} ingredients={v.ingredients} />                                               
                    </li>
                ))                 
            }            
        </div>
    )
}