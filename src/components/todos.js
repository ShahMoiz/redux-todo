import React, {Component} from 'react'
import AddTodo from './addTodo';
import TodoList from './todoList'
class Todos extends Component {
    render(){
        return(
            <div>
                <AddTodo/>
                <TodoList />
            </div>
        )
    }
}

export default Todos