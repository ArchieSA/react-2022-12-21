import { useReducer } from 'react';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
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

export const NewReviewForm = ({}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  console.log(formValue);

  return (
    <div className={styles.root}>
      <div>
        <label>Name</label>
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
      <div>
        <label>Text</label>
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
      <div>
        <label>Rating</label>
        <input
          value={formValue.rating}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTIONS.changeRating,
              payload: Number(event.target.value),
            })
          }
          type="number"
        />
      </div>
      <Rating size={Size.m} value={formValue.rating} onChange={dispatch} />
    </div>
  );
};
