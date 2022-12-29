import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from "./components/App/App";

import './index.css';

import { restaurants } from './constants/fixtures';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App restaurants={restaurants}/>
);

/* root.render(React.createElement('div', {
  children: [
      React.createElement('h1', { children: restaurant.name }),
      React.createElement('ul', {children: restaurant.menu.map(
        ({ name}) => React.createElement('li', {children: name}))
      })
  ]
})); */

