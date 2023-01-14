import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';

export const Tabs = ({ items, onTabClick, activeIndex }) => {
  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <Tab
          title={item}
          onClick={() => onTabClick(index)}
          isActive={index === activeIndex}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
