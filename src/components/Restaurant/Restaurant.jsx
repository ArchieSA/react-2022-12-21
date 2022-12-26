import { Menu } from "../Menu/Menu";
import { Dish } from "../Dish/Dish";
import { Reviews } from "../Reviews/Reviews";
import { Review } from "../Review/Review";
export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div>
            <h1>{name}</h1>
            <Menu>
                { 
                    <ul>
                        {menu.map(({ name, price, ingredients}) => (
                            <li>
                                <Dish name={name} price={price} ingredients={ingredients}/>
                            </li>)
                        )}
                    </ul>
                }
            </Menu>
            <Reviews>
                {
                    reviews.map(({ user, text, rating }) => (
                        <Review user={user} text={text} rating={rating} />
                    ))
                }
            </Reviews>
        </div>
    )
}