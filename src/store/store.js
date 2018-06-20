import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../reducers/rootReducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import todoReducer from '../reducers/todoReducer';

const logger = createLogger();

const store = createStore(
    todoReducer, 
    applyMiddleware(
        thunk,
        logger
    )
)

export default store