import {Menu} from "../Menu/Menu";
import {SocialInfo} from "../SocialInfo/SocialInfo";

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h2>Menu</h2>
                <Menu menu={menu}/> 
            </div>
            <div>
                <h2>People say ...</h2>
                <SocialInfo reviews={reviews}/> 
            </div>            
        </div>
    )
}