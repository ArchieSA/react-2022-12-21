import { Button } from '../Button/Button';

export const Tab = ({ setActiveRestaurantId, restaurant }) => {
  return (
    <Button
      {...restaurant}
      onClick={() => setActiveRestaurantId(restaurant['id'])}
    >
      {restaurant.name}
    </Button>
  )
}
