import {Button} from "../Button/Button";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews"

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <Menu menu={menu}></Menu>
                <Reviews reviews={reviews}></Reviews>
            </div>
        </div>
    )
}