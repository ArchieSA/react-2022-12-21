import styles from './styles.module.css';

// import Star from './img/star.svg';
import { ReactComponent as Star } from './img/star.svg';
import { ReactComponent as StarGold } from './img/star-gold.svg';
import classnames from 'classnames';
import { Size } from '../../constants/ui';

const MAX_RAITING = 5;

export const Rating = ({
  onChange, value = 0, size = Size.m, className='' }) => {
  // return <div className={classnames(styles.root, className)} />;
  // return <img src={Star} loading="lazy" />;
  //return <Star />;
  const raited = Math.min(value, MAX_RAITING);
  const unraited = MAX_RAITING - raited;
  const content = [];
  let returnValue = 0;
  for (let index = 1; index <= raited; index++) {
    ++returnValue;
    content.push(<StarGold className={
      classnames(styles[size])
    }
    onClick={onChange} 
    data-rating={returnValue}
    />);    
  }
  for (let index = 1; index <= unraited; index++) {
    ++returnValue;
    content.push(<Star className={
      classnames(styles[size])
    }
    onClick={onChange} 
    data-rating={returnValue}
    />);    
  }
  const gridKey = size+'grid';
  return (<div className={classnames(styles.root, styles[gridKey], className)}>
    { content }</div>);
};
