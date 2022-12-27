import React from 'react';
import ReactDom from 'react-dom/client';
import {Review} from './Review/Review'
export const Reviews = ({reviews}) => {
  
    return (
        <>
        <h2>Reviews</h2>
        {reviews.map(({user, text, rating}) => (
            <>
            <ul>
            <li>{<Review author={user} text={text} rating={rating}/>}</li>
            </ul>
            </>
        ))}
       
        </>
    )
}