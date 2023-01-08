export const Review = ({reviews}) => {

    return(
        <ol>
            {
                reviews?.map(({id, user, text, rating}) => <li key={id}>
                <p>Username <strong>{user}</strong> commented: </p>
                {text} 
                <br />
                Rate: {rating}
                </li>)
            }
        </ol>
    )


}