import {Review} from "../Review/Review";

export const Reviews = ({reviews, name}) => {

    return(
        <>
            <p> - Reviews of <strong>{name}</strong>: </p>
            <Review reviews={reviews} />
        </>
    )

}