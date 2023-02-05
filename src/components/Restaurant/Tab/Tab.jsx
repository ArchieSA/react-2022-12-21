import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.css';
export const Tab = ({ name, className }) => {
    const { restaurantId } = useParams();
    const path = name === 'menu' ? `/restaurants/${restaurantId}` : 'review';
    return (
        <NavLink to={path} className={({ isActive }) => classNames(styles.root, className, {[styles.isActive]: isActive,})}>
            {name}
        </NavLink>
    );
};