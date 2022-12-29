import { RestaurantList } from '../RestaurantList/RestaurantList';

export const MainContent = ({ restaurants }) => {
  return (
    <div>
      <RestaurantList restaurants={restaurants}/>
    </div>
  );
}
