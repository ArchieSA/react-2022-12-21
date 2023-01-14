import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// root.render(React.createElement('div', {
//     children: [
//         React.createElement('h1', { children: restaurant.name }),
//         React.createElement('ul', {children: restaurant.menu.map(
//             ({ name}) => React.createElement('li', {children: name}))
//         })
//         React.createElement(Restaurant, {name: 'Name', menu: []})
//     ]
// }));