import { Menu } from '../Menu/Menu';
import { ReviewList } from '../ReviewList/ReviewList';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>

      {menu?.length > 0 ? <Menu menu={menu}/> : 'No menu'}
      
      {reviews?.length > 0 ? <ReviewList reviews={reviews}/> : 'No reviews'}
    </div>
  );
}
