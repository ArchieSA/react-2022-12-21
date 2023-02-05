import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContextSetter } from '../../contexts/ThemeContext';
import { Button } from '../Button/Button';

import styles from './styles.module.css';

export const Layout = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContextSetter);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/restaurants" className={styles.link}>
          Restaurants
        </Link>
        <Link to="/dishes" className={styles.link}>
          Dishes
        </Link>
        <Link to="/cart" className={styles.link}>
          Cart
        </Link>
        <Button onClick={toggleTheme} className={styles.button}>
          Switch Theme
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};
