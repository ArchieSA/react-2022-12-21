import { Tab } from "../Tab/Tab";
import { restaurants } from '../../constants/fixtures';
export const Tabs = ({onClick}) => {
    return (
        <div>
            {restaurants.map((restaurant,index) =>
                <Tab name={restaurant.name} onClick={onClick} index={index}/>
            )}
        </div>
    );
};