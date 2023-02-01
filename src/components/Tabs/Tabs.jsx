import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantIdsFilteredByName } from '../../store/modules/restaurant/selectors';
import { useSearchParams } from 'react-router-dom';

export const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      restaurantName: searchParams.get('restaurantName') || '',
    })
  );

  return (
    <div className={styles.root}>
      <input
        value={searchParams.get('restaurantName') || ''}
        onChange={(event) =>
          setSearchParams({ restaurantName: event.target.value || '' })
        }
        className={styles.searchInput}
        placeholder="Search..."
      />
      <div>
        {restaurantIds.map((id) => (
          <Tab restaurantId={id} className={styles.tab} />
        ))}
      </div>
    </div>
  );
};
