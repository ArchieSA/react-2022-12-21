import styles from './styles.module.css';

import StarImage, { ReactComponent as Star } from './img/star.svg';
import StarGoldImage, { ReactComponent as StarGold } from './img/star-gold.svg';

import { Size } from '../../constants/ui';

const MAX_RATING = 5;

export const Rating = ({ onChange, value, size = Size.l, className }) => {
  // return <div className={classnames(styles.root, className)} />;
  // return <img src={Star} loading="lazy" />;
  const stars = [];
  for (let i = 0; i < MAX_RATING; i++) {
    if (onChange) {
      i < value
        ? stars.push(
            <StarGold
              className={styles[size]}
              onClick={(e) => onChange(i + 1)}
            />
          )
        : stars.push(
            <Star className={styles[size]} onClick={(e) => onChange(i + 1)} />
          );
    } else {
      i < value
        ? stars.push(
            <img className={styles[size]} src={StarGoldImage} loading="lazy" />
          )
        : stars.push(
            <img className={styles[size]} src={StarImage} loading="lazy" />
          );
    }
  }

  return <div>{stars}</div>;
};
