
import {ReviewUserName} from "../ReviewUser/ReviewUserName";
import {ReviewUserText} from "../ReviewUser/ReviewUserText";
import {ReviewUserRating} from "../ReviewUser/ReviewUserRating";
export const Review = ({user,text,rating}) => {
    return (
        <div>
            <ul>
                <li><ReviewUserName user={user}></ReviewUserName></li>
                <li><ReviewUserText text={text}></ReviewUserText></li>
                <li><ReviewUserRating rating={rating}></ReviewUserRating></li>
            </ul>
        </div>
    );
};
