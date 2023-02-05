import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurantEntitiesFilteredByName } from '../../store/modules/restaurant/selectors';
import styles from '../../containers/RestaurantTabs/styles.module.css';
import { Tabs } from '../../components/Tabs/Tabs';

export const RestaurantTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const restaurantEntitiesFilteredByName = useSelector((state) =>
    selectRestaurantEntitiesFilteredByName(state, {
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
        <Tabs
          items={restaurantEntitiesFilteredByName.map(({ id, name }) => ({
            path: id,
            name,
          }))}
        />
      </div>
    </div>
  );
};
