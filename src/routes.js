import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import todoListComponent from './components/todoListComponent';
import { ToDoEditComponent } from './components/todoAddEditComponent';
import ToDoComponent from './components/todoComponent';
import App from './App';

export default (
    <BrowserRouter >
        <Route path='/' component={App} />
        <Route path='/posts' component={todoListComponent} />
        <Route path='/posts/new' component={ToDoEditComponent} />
        <Route path='/posts/edit' component={ToDoEditComponent} />
    </BrowserRouter>
)