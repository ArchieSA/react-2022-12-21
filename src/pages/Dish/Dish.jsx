import { useParams } from 'react-router-dom';
import { Dish } from '../../components/Dish/Dish';

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div>
      <div>
        <label>Информация о выбранном блюде</label>
        <Dish dishId={dishId} />
      </div>
      <div>
        <label>Список ресторанов для выбранного блюда</label>
      </div>
    </div>
  );
};
