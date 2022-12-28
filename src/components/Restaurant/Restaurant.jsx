// import {Button} from "../Button/Button";
import Menu from './Menu';
import Reviews from './Reviews';

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div className="restaraunt">
            <h1>{name}</h1>
            <div>
                <h2>Menu</h2>
                <Menu menu={menu}/>
                <h2>Reviews</h2>
                <Reviews reviews={reviews}/>
            </div>
        </div>
    )
}