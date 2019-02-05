import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MDBBtn,MDBInput } from 'mdbreact';
import actions from './../store/action';
class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>Todo List Here</h1>
                {this.props.todos.map((todo, index) =>
                    (!todo.editToggle) ?
                        <div key={index}>
                            <h3>{todo.title}</h3>
                            <MDBBtn color="danger" onClick={() => this.props.dltTodo(index)}>Delete Todo</MDBBtn>
                            <MDBBtn color="info" onClick={() => this.props.editTodo(index)}>Edit Todo</MDBBtn>
                        </div> :
                        <div key={index}>
                            <MDBInput type="text" label="Add Todo Here" value={this.props.editTodoValue} onChange={this.props.inputChange} />
                            <MDBBtn color="info" onClick={() => this.props.editSubmitTodo(index)}>Edit Todo</MDBBtn>
                        </div>
                )}

            </div>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        todos: state.todos,
        editTodoValue: state.editTodoValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            const action = {type: actions.INPUT_CHANGE, value: e.target.value, variable: 'editTodoValue'}
            dispatch(action)
        },
        dltTodo: (i) => {
            const action = { type: actions.DLT_TODO, index: i }
            dispatch(action)
        },
        editTodo: (i) => {
            const action = { type: actions.EDIT_TODO, index: i }
            dispatch(action)
        },
        editSubmitTodo: (i) => {
            const action = { type: actions.EDIT_SUBMIT_TODO, index: i }
            dispatch(action)
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(TodoList)