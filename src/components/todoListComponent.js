import React from 'react'
import { connect } from 'react-redux'
import { ToDoComponent } from './todoComponent'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import { addToDoItem, toggleToDoItem, fetchToDoListSucceded, fetchToDoListFailed, fetchToDoList } from '../actions/todoActions'
import { ToDoEditComponent } from './todoAddEditComponent';

class ToDoListComponent extends React.Component {
    componentDidMount() {
        this.props.fetchAll()
    }

    render() {     
        const { todos, add, toggle } = this.props;
        if(todos === null)
        {
            return <div>Loading ...</div>
        }
        return (
            <div>                
                <ul>{ todos.map(t => 
                <ToDoComponent 
                    todo = {t} 
                    key = {t.id} 
                    toggleItem = { toggle }
                />) }
                </ul>
                <div>
                    <Button floated='right' icon labelPosition='left' primary size='small' onClick = {() => add}>
                        <Icon name='user' /> Add Item
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(`todoListComponent: ${state}`)
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(fetchToDoList()
                .then(response => response.json)
                .then(todos => fetchToDoListSucceded(todos))
                .catch(error => fetchToDoListFailed(error))
        )
    }
}
const mapDispatchToProps11 = dispatch => {
    return {
        fetchAll: () => dispatch(fetchToDoList())
                        .then(response => 
                            {
                                console.log(response)
                                //dispatch(fetchToDoListSucceded(response.payload.data))
                            }
                        )
        /*,
        add: (header, detail) => dispatch(addToDoItem(header, detail)),
        toggle: (id) => dispatch(toggleToDoItem(id))
        */
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent)