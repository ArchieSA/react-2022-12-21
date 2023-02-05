import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';

export const Tabs = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map(({ path, name }) => (
        <Tab path={path} name={name} className={styles.tab} />
      ))}
    </div>
  );
};
