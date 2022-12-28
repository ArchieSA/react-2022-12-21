import {Button} from "../Button/Button";
import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({ id, name, menu, reviews }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h2>Menu</h2>
                <ul>
                    {      
                    <div>
                        <Menu menu={menu} />
                        <br /> 
                        <Reviews name={name} reviews={reviews} />
                        <br />  
                        <Button>-</Button> <Button>+</Button>    
                        <hr />                   
                    </div>
                    }
                </ul>
            </div>
        </div>
    )
}



