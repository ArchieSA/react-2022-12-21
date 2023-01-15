import styles from './styles.module.css';

import classNames from 'classnames';

export const Rating = ({ value, size = 'm', ratingSize = 5 }) => {
  const stars = new Array(ratingSize).fill(0);
  return (
    <div className={styles.root}>
      {stars.map((e, i) =>
        i < value ? (
          <div className={classNames(styles[size], styles.gold)} />
        ) : (
          <div
            className={classNames(styles.root, styles[size], styles.black)}
          />
        )
      )}
    </div>
  );
};
