import { Button } from "../Button/Button"
import {useState} from "react";

export const Ingredient = ({ingredient})=>{
  const [count, setCount] = useState(1);

  return <div>
    <div>{ingredient}</div>
    <div>
      {count !== 0?<Button onClick={() => setCount(count - 1)}>-</Button>:null}
      {count}
      {count !==5?<Button onClick={() => setCount(count + 1)}>+</Button>:null}
    </div>
  </div>
}

