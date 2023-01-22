import styles from './styles.module.css';
import {Rating} from '../Rating/Rating';
import {Size} from '../../constants/ui';
import {selectReviewById} from "../../store/modules/review/selectors";
import {useSelector} from "react-redux";
import {User} from "../User/User";

export const Review = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, {reviewId}))
    return (
        <div className={styles.root}>
            <User userId={review.userId}/>
            <div>{review.text}</div>
            <Rating value={review.rating} size={Size.s}/>
        </div>
    );
};
