import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export const DishesPage = () => {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};
