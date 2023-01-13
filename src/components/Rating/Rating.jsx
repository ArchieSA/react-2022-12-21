import styles from './styles.module.css';

import { ReactComponent as Star } from './img/star.svg';
import { ReactComponent as StarGold } from './img/star-gold.svg';
import classnames from 'classnames';
import { MAX_RATING } from '../../constants/ui';

export const Rating = ({ onChange, value, size, className }) => {
  const positions = Array(MAX_RATING)
    .fill()
    .map((e, i) => i + 1);

  return positions.map((position) => {
    return position <= value ? (
      <StarGold
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(position),
                })
            : null
        }
        className={classnames(styles.root, className, styles[size])}
      />
    ) : (
      <Star
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(position),
                })
            : null
        }
        className={classnames(styles.root, className, styles[size])}
      />
    );
  });
};
