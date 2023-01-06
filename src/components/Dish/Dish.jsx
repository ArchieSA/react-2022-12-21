import {Button} from "../Button/Button";
import { Ingredients } from "../Ingredients/Ingredients";
import {useState} from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
          {count !== 0?<Button onClick={() => setCount(count - 1)}>-</Button>:null}
          {count}
          {count !==5?<Button onClick={() => setCount(count + 1)}>+</Button>:null}
        </div>
        <div>
          {
            count>0 ? <Ingredients ingredients={dish.ingredients}/>:null
          }
        </div>
    </div>
}