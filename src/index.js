import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./redux/reducer";
import {Provider} from "react-redux";


const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
