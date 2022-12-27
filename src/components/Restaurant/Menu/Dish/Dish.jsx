import React from 'react';
import ReactDOM from 'react-dom/client';

export const Dish = ({ingredients, price}) => {


    return (
       <>
       {`composition: ${ingredients.map(ingredient => <span>{ingredient}</span>)}`}
       <p>{`price:${price}`}</p>
       </>
    )
}