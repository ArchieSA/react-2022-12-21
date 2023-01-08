import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ingredient}) => {
    const [count, setCount] = useState(1);
    function preCount(){
        if(count < 1){
            setCount(0)
        }else{
            setCount(count - 1)
        } 
    }
    function nextCount(){
        if(count > 4){
            setCount(5)
        }else{
            setCount(count + 1)
        }  
    }
    return (
        <div>
            {ingredient}
            <div>
                <Button onClick={preCount}>-</Button>
                    {count}
                <Button onClick={nextCount}>+</Button>
            </div> 
        </div>
    );
};
