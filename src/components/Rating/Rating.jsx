import styles from './styles.module.css';

import Star from './img/star.svg';
import GoldStar from './img/star-gold.svg';
// import { ReactComponent as Star } from './img/star.svg';
import classnames from 'classnames';
import { NUMBER_OF_STARS } from '../../constants/ui';

export const Rating = ({ onChange, value, size, className }) => {
  // return <div className={classnames(styles.root, className)} />;
  // return <img src={Star} loading="lazy" />;

  return (
    <div>
      {NUMBER_OF_STARS > 0 &&
        new Array(NUMBER_OF_STARS)
          .fill(null)
          .map((_, index) => (
            <img
              src={index >= value ? Star : GoldStar}
              key={index}
              className={classnames(styles.root, styles[size])}
              loading="lazy"
              alt="star"
              onClick={() => onChange?.(index + 1)}
            />
          ))}
    </div>
  );
};
