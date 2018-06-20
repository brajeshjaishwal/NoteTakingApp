import React from 'react'
import { Card, Button, Checkbox, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { ToDoEditComponent } from './todoAddEditComponent';

export class ToDoComponent extends React.Component{    
    
    render() {
        const { todo, toggleItem, editItem } = this.props;
        console.log(`todoComponent: ${todo}`)
        return (
            <div>
            <Card key={todo.id} centered color = { todo.done ? 'red' : 'orange' }>
            <Card.Content>
                <Card.Header>{todo.title}</Card.Header>
                <Card.Description>
                    {todo.detail}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div >
                    <Checkbox label='Mark' 
                        checked = { todo.done } 
                        onClick = {() => toggleItem(todo.id)} 
                        style={{padding: 8}} />
                    <Button onClick = {editItem} color='green' >Edit</Button>
                </div>
            </Card.Content>
        </Card>
        </div>
    )}
}