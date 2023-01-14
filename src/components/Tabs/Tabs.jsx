import { Tab } from '../Tab/Tab';
import classnames from 'classnames';
import styles from './styles.module.css';

export const Tabs = ({ items, onTabClick, activeIndex }) => {
  return (
    <div className={classnames(styles.root)}>
      {items.map((item, index) => (
        <Tab
          title={item}
          onClick={() => onTabClick(index)}
          isActive={index === activeIndex}
          className={classnames(styles.tab)}
        />
      ))}
    </div>
  );
};
