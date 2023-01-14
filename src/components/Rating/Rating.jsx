import styles from './styles.module.css';
import { Size } from '../../constants/ui';
// import Star from './img/star.svg';
import { ReactComponent as Star } from './img/star.svg';
import classnames from 'classnames';

export const Rating = ({ onChange, value, size = Size.m, className }) => {
  let starsArray = [];
  for (let i = 0; i < 5; i++) {
    starsArray.push(
      <Star
        fill={i < value ? 'gold' : '#231F20'}
        onClick={onChange ? () => onChange(i + 1) : null}
        className={classnames(styles[size], styles.star)}
      />
    );
  }
  return <div className={className}>{starsArray}</div>;
};
