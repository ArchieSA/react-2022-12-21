import { useReducer } from 'react';
import classnames from 'classnames';

import { Rating } from '../Rating/Rating';

import styles from './styles.module.css';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 0,
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

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <fieldset className={styles.root}>
      <label>
        <span className={styles.label}>Name</span>
        <input
          className={styles.input}
          value={formValue.name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeName,
              payload: event.target.value,
            })
          }
        />
      </label>
      <label>
        <span className={styles.label}>Your review</span>
        <textarea
          className={classnames(styles.input, styles.input_text)}
          value={formValue.text}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeText,
              payload: event.target.value,
            })
          }
        />
      </label>
      <label>
        <span className={styles.label}>Rating</span>
        <Rating
          size={'l'}
          rating={formValue.rating}
          onChange={(rate) =>
            dispatch({
              type: FORM_ACTIONS.changeRating,
              payload: rate,
            })
          }
        />
      </label>
    </fieldset>
  );
};
