export const Dish  = ({name, price, ingredients}) => {
    return(
        <div className="dish">
            <ul>
                <li>name - {name}</li>
                <li>price - {price}</li>
                <li>
                    <div>
                        <p>ingredients:</p>
                        <ol>
                            {ingredients.map((ingredient) => <li>{ingredient}</li>)}
                        </ol>
                    </div>

                </li>
            </ul>
            <hr></hr>
        </div>
    )
}

