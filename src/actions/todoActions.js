import { constants } from "../constans/constants"
import axios from 'axios'

export const fetchToDoList = () =>
{
    const request = axios.get('http://localhost:5000/')
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