import { MAX_RATING } from './constants';
import Star from './img/star.svg';
import GoldStar from './img/star-gold.svg';

import styles from './styles.module.css';
import classnames from 'classnames';
import { Size } from '../../constants/ui';

export const Rating = ({
  value,
  size = Size.m,
  onChange,
  maxRating = MAX_RATING,
  className,
}) => {
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <img
              src={index >= value ? Star : GoldStar}
              key={index}
              className={classnames(styles.star, styles[size])}
              loading="lazy"
              onClick={() => onChange?.(index + 1)}
              alt={index >= value ? 'black' : 'gold'}
            />
          ))}
    </div>
  );
};
