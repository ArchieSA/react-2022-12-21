import classnames from 'classnames';

import { ReactComponent as Star } from './img/star.svg';

import styles from './styles.module.css';

export const Rating = ({ rating, size, onChange }) => {
  const starsAmount = 5;

  let stars = [];

  for (let i = 0; i < starsAmount; i++) {
    stars.push(
      <Star
        key={i}
        className={classnames({
          [styles.yellow]: i < rating,
          [styles[size]]: true,
        })}
        onClick={() => onChange && onChange(i + 1)}
      />
    );
  }

  return <div className={styles.root}>{stars}</div>;
};
