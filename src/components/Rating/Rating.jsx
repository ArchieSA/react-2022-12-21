import styles from './styles.module.css';

import Star from './img/star.svg';
import GoldStar from './img/star-gold.svg';
// import { ReactComponent as Star } from './img/star.svg';
import classnames from 'classnames';
import { NUMBER_OF_STARS } from '../../constants/ui';

export const Rating = ({ onChange, value, size, className }) => {
  // return <div className={classnames(styles.root, className)} />;
  // return <img src={Star} loading="lazy" />;

  const stars = Array(NUMBER_OF_STARS)
    .fill()
    .map((val, index) => index + 1);

  return stars.map((star) => {
    return star <= value ? (
      <img
        src={GoldStar}
        loading="lazy"
        alt="black star"
        className={classnames(styles.root, styles[size])}
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(star),
                })
            : null
        }
      />
    ) : (
      <img
        src={Star}
        loading="lazy"
        alt="black star"
        className={classnames(styles.root, styles[size])}
        onClick={
          onChange
            ? () =>
                onChange({
                  type: 'changeRating',
                  payload: Number(star),
                })
            : null
        }
      />
    );
  });
};
