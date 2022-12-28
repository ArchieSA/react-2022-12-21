import React from 'react';
import ReactDOM from 'react-dom/client';

import { restaurants } from './constants/fixtures'

import './index.css';
import {Restaurant} from "./components/Restaurant/Restaurant";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
        {restaurants.map(({name, menu, reviews}) =>
            <Restaurant name={name} menu={menu} reviews={reviews}/>
        )}
    </div>
);

