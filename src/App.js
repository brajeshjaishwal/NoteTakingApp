import React, { Component } from 'react';
//import './App.css';
//import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ToDoListComponent from "./components/todoListComponent";
import { connect } from 'net';
import { ToDoEditComponent } from './components/todoAddEditComponent';
import { ToDoComponent } from './components/todoComponent';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={ToDoListComponent}/>
              <Route exact path="/posts" component={ToDoListComponent} />
              <Route exact path="/posts/new" component={ToDoEditComponent} />
              <Route exact path="/posts/edit" component={ToDoComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
