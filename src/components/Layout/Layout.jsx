import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          Home
        </Link>

        <Link to="/restaurants" className={styles.link}>
          Restaurants
        </Link>

        <Link to="/cart" className={styles.link}>
          Cart
        </Link>
      </header>

      <section className={styles.content}>{children}</section>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
