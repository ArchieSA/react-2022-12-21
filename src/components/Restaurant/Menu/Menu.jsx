import React from 'react';
import ReactDom from 'react-dom/client';
import { Dish } from './Dish/Dish';

export const Menu = ({menu}) => {

    return (
        
   <>
   <h2>Menu</h2>
   {menu.map(({name, price, ingredients}) => (
    <>
    <h2>{name}</h2>
    <ul>
        <li>{<Dish ingredients={ingredients} price={price}/>}</li>
    </ul>
    </>
   ))}
   </>
    

    )

}