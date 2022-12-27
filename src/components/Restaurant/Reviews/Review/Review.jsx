import React from 'react';
import ReactDOM from 'react-dom/client';

export const Review = (props) => {

    return (
        <>
        <p>{`author:${props.author}`}</p>
        <p>{`content:${props.text}`}</p>
        <p>{`rating:${props.rating}`}</p>
        </>
    )
}
