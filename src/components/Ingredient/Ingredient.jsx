import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ingredient}) => {

    const [counts, setCounts] = useState(0);

    const incCount = () => {
        if (counts < 5)
            setCounts(counts + 1);
    }

    const decCount = () => {
        if (counts > 0)
            setCounts(counts - 1);
    }

    return (
        <div> 
            {ingredient} &nbsp;
            <span>{`${counts}`}</span>
            &nbsp;
            <Button onClick={incCount}>+</Button> &nbsp;
            <Button onClick={decCount}>-</Button> &nbsp;
        </div>  
    ) 

}