import { Restaurant } from '../Restaurant/Restaurant';

export const RestaurantList = ({ restaurants }) => {
  return (
    <section>
      <h1>Restaurant List</h1>
      
      <ul>
        {
          restaurants?.length > 0
          ? 
          restaurants.map(restaurant => 
            <li key={restaurant['id']}>
              <Restaurant {...restaurant}/>
            </li>
          )
          : 'No restaurants found'
        }
      </ul>
    </section>
  );
}
