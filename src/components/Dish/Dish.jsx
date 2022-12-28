export const Dish = ({id, price, ingredients}) => {

    return(
        <div id={id}>
            <span>Ingredients: {ingredients}</span> 
            <span>, </span> 
            <span>price: {price}</span>  
        </div>
    )


}