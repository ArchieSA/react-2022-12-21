import styles from './styles.module.css';
import classnames from 'classnames';

export const RatingButton = ({
  onChange,
  value,
  size = 's',
  ratingSize = 5,
}) => {
  const stars = new Array(ratingSize).fill(0);
  return (
    <div className={styles.root}>
      {stars.map((e, i) => (
        <label
          className={classnames(
            styles.container,
            i < value ? styles.gold : styles.black,
            styles[size]
          )}
        >
          <input
            type="radio"
            name="rating"
            value={i + 1}
            onChange={onChange}
            className={styles.input}
          />
          <span />
        </label>
      ))}
    </div>
  );
};
