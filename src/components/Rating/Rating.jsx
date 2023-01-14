import styles from './styles.module.css';

// import Star from './img/star.svg';
import { ReactComponent as Star } from './img/star.svg';
import classnames from 'classnames';

export const Rating = ({ onChange, value, size, className }) => {
  // return <div className={classnames(styles.root, className)} />;
  // return <img src={Star} loading="lazy" />;
  return <Star />;
};
