import { useReducer } from 'react';
import { RatingButton } from '../RatingButton/RatingButton';
import styles from './styles.module.css';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 5,
};

const FORM_ACTIONS = {
  changeName: 'changeName',
  changeText: 'changeText',
  changeRating: 'changeRating',
};

const reducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.changeName: {
      return {
        ...DEFAULT_FORM_VALUE,
        name: action.payload,
      };
    }
    case FORM_ACTIONS.changeText: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case FORM_ACTIONS.changeRating: {
      return {
        ...state,
        rating: action.payload,
      };
    }
    default:
      return state;
  }
};

export const NewReviewForm = (props) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <h3>New review</h3>
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeName,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Text</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeText,
              payload: event.target.value,
            })
          }
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Rating</label>
        <RatingButton
          size="m"
          value={formValue.rating}
          onChange={(e) => {
            if (e.target.checked) {
              dispatch({
                type: FORM_ACTIONS.changeRating,
                payload: e.target.value,
              });
            }
          }}
        />
      </div>
    </div>
  );
};
