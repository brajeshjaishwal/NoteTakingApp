import React from 'react'
import redux from 'redux'
import 'semantic-ui-css/semantic.min.css'
import { Button, ButtonGroup } from 'semantic-ui-react';
import uuid4 from 'uuid/v4'

export class ToDoEditComponent extends React.Component {

    constructor(props) {
        super(props);        
        const { todo } = this.props
        if(todo)
        {
            //edit
            this.state = {...todo}
        }
        else
        {
            //create new
            this.state = {
                create: true,
                id: uuid4(),
                title: '',
                detail: '',
                done: false
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }    

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value })
        console.log(this.state)
    }

    handleSubit = () => {
        this.props.onSubmit({

        })
    }
    onSubmit = () => {
    }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input name="title" placeholder="Title" type="text" 
                        onChange={ event => this.onChangeHandler(event) }
                        defaultValue = {this.state.title}/>
                </div>
                <div className="field">
                    <label>Detail</label>
                    <input name="detail" placeholder="Detail" type="text" 
                        onChange={ event => this.onChangeHandler(event) }
                        defaultValue = {this.state.detail}/>
                </div>
                <div>
                    <ButtonGroup>
                        <Button color = 'green'>{this.state.create ? 'Create' : 'Update'}</Button>
                        <Button.Or/>
                        <Button color = 'red'>Cancel</Button>
                    </ButtonGroup>
                </div>
          </form>
        )
    }
}