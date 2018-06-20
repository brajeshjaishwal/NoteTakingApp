import {constants} from "../constans/constants"
import uuid4 from 'uuid/v4'

const initialState = []

export default (state = initialState, action) =>
{
    switch(action.type)
    {
        case constants.FETCH_TODO_LIST:
            return [...state]
        case constants.FETCH_TODO_LIST_SUCCESS:
            //console.log(`todoReducer: ${action.payload}`)
            return [...state, action.payload.todos]
        case constants.FETCH_TODO_LIST_FAILURE:
            return [...state]
        case constants.ADD_TODO:
            return [...state, {...action.payload}];
        case constants.TOGGLE_TODO:
            return state.map(td => (td.id === action.payload) ? 
            //keep all properties but reverse done property
            {...td, done: !td.done} :
            //return item as it is, if this was not intended to toggle
            {...td});
        case constants.EDIT_TODO:
            return state.map(td => (td.id === action.payload) ? 
            //keep everything from payload but keep done from the current item because it is not recieved
            //from there (actually not sending)
            {...action.payload.title, done: td.done} :
            //return item as it is, if this was not intended to update
            {...td});
        default:
            return [...state];
    }
}