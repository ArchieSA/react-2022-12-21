import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export const Tabs = ({
  tabName,
  selectorTabIds,
  selectorTabIdsFieldName,
  selectorTabId,
  selectorTabIdFieldName,
  fixedTabIds,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabIds = useSelector((state) =>
    selectorTabIds
      ? selectorTabIds(state, {
          [`${selectorTabIdsFieldName}`]:
            searchParams.get(`${selectorTabIdsFieldName}`) || '',
        })
      : {}
  );

  return (
    <div className={styles.root}>
      {selectorTabIds ? (
        <input
          value={searchParams.get(`${selectorTabIdsFieldName}`) || ''}
          onChange={(event) =>
            setSearchParams({
              [`${selectorTabIdsFieldName}`]: event.target.value || '',
            })
          }
          className={styles.searchInput}
          placeholder="Search..."
        />
      ) : null}
      <div>
        {selectorTabIds
          ? tabIds.map((id) => (
              <Tab
                tabPath={id}
                selectorTabId={selectorTabId}
                selectorTabIdObj={{ [`${selectorTabIdFieldName}`]: id }}
                tabName={tabName}
                className={styles.tab}
              />
            ))
          : fixedTabIds.map(({ tabPath, tabName }) => (
              <Tab tabPath={tabPath} tabName={tabName} className={styles.tab} />
            ))}
      </div>
    </div>
  );
};
