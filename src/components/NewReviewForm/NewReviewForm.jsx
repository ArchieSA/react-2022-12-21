import { useReducer } from 'react';
import { Size } from '../../constants/ui';
import { Rating } from '../Rating/Rating';
import styles from './styles.module.css';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 1,
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

export const NewReviewForm = ({}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <h2>Add Review</h2>
      <div>
        <label>Name</label>
        <br />
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeName,
              payload: event.target.value,
            })
          }
          className={styles.input}
        />
      </div>
      <div>
        <label>Text</label>
        <br />
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeText,
              payload: event.target.value,
            })
          }
          className={styles.input}
        />
      </div>
      <div>
        <label>Rating</label>
        <br />
        <Rating value={formValue.rating} size={Size.m} onChange={dispatch} />
      </div>
    </div>
  );
};
