import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './store';
import './index.css';

const ROOT_NODE = document.getElementById('root');
const { store } = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    ROOT_NODE
);
