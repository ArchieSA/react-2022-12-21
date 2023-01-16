import styles from './styles.module.css';

import Star from './img/star.svg';
import StarGold from './img/star-gold.svg';
import classnames from 'classnames';
import { MAX_RATING } from '../../constants/ui';

export const Rating = ({ onChange, value, size, className }) => {
  const positions = Array(MAX_RATING)
    .fill()
    .map((e, i) => i + 1);

  return positions.map((position) => {
    return position <= value ? (
      <img
        src={StarGold}
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(position),
                })
            : null
        }
        className={classnames(styles.root, styles[className], styles[size])}
        alt="gold star"
      />
    ) : (
      <img
        src={Star}
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(position),
                })
            : null
        }
        className={classnames(styles.root, styles[className], styles[size])}
        alt="black star"
      />
    );
  });
};
