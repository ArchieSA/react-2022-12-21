import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const Layout = ({ children }) => {
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
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};
