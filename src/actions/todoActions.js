import { constants } from "../constans/constants"
import axios from 'axios'

export const fetchToDoList = () =>
{
    const request = axios.get('http://localhost:5000/')
        /*.then((response) => {
            console.log(response.data.todos)
            fetchToDoListSucceded(response.data)
        })
        .catch(error => {
            dispatchEvent(fetchToDoListFailed(error))
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            }
            console.log(error.config);
      });
      */
    return {
        type: constants.FETCH_TODO_LIST,
        payload: request
    }
}

export const fetchToDoListSucceded = (todolist) =>
{
    return {
        type: constants.FETCH_TODO_LIST_SUCCESS,
        payload: todolist
    }
}

export const fetchToDoListFailed = (error) =>
{
    return {
        type: constants.FETCH_TODO_LIST_FAILURE,
        payload: error
    }
}

export const addToDoItem = (id, title, detail) =>
{
    return {
        type: constants.ADD_TODO,
        payload: {id, title, detail}
    }
}

export const toggleToDoItem = (id) =>
{
    return {
        type: constants.TOGGLE_TODO,
        payload: id
    }
}

export const editToDoItem = (id, title, detail) =>
{
    return {
        type: constants.EDIT_TODO,
        payload: { id, title, detail }
    }
}