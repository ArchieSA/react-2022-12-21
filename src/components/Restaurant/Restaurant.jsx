import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    return (
        <div Style={'margin-left: 30px;'}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    )
}