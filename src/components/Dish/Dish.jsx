import { Button } from '../Button/Button';

export function Dish({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <Button>-</Button>
      <Button>+</Button>
    </div>
  );
}
