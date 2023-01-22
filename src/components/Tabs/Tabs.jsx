import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/modules/restaurant/selectors';

export const Tabs = ({ onTabClick, activeId }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab
          key={id}
          restaurantId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeId}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
