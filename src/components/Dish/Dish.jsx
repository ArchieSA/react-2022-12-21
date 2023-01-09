import {Button} from "../Button/Button";
import { Ingredients } from "../Ingredients/Ingredients";
import {useState} from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);
    function preCount(){
        if(count < 2){
            setCount(0)
        }else{
            setCount(count => count - 1)
        }
        
    }
    function nextCount(){
        if(count > 4){
            setCount(5)
        }else{
            setCount(count => count + 1)
        }   
    }
    return <div>
        {dish.name}
        <div>
            <Button onClick={preCount}>-</Button>
            {count}
            <Button onClick={nextCount}>+</Button>
        </div>
        {count > 0 ? <Ingredients ingredients={dish.ingredients}/> : null}
    </div>
}