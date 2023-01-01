import {Review} from "../Review/Review";

export const SocialInfo = ({ reviews }) => {
    return (<ul>
        {
            reviews.map((item) => <li>
                <Review review={item}/>
                </li>)
        }
        </ul>)
}