import { RestaurantList } from '../RestaurantList/RestaurantList';

export const Main = ({ restaurants }) => {
  return (
    <div>
      <RestaurantList restaurants={restaurants}/>
    </div>
  );
}
