import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';
import todoListComponent from './components/todoListComponent';
import { ToDoEditComponent } from './components/todoAddEditComponent';
import ToDoComponent from './components/todoComponent';
import store from './store/store'

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
