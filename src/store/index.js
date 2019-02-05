
import { createStore } from 'redux';
import actions from './action'

const initialState = {
    inputText: '',
    editToggle: false,
    editTodoValue: '',
    todos: [{title: 'Test', editToggle: false}, {title: 'Test 1', editToggle: false}] 
}

const reducer = (state = initialState, action) => {
    console.log("Action called", action);

    switch (action.type) {
        case actions.INPUT_CHANGE:
            return Object.assign({}, state, {[action.variable]: action.value});

        case actions.ADD_TODO:
        console.log("Input Text Value", state.inputText)
        return Object.assign({}, state, {
            todos: state.todos.concat({title: state.inputText, editToggle: false}),
            inputText: ''
        });

        case actions.DLT_TODO:
        const todos = state.todos.filter((todo, index) => index !== action.index)
        return Object.assign({}, state, {
            todos,
        })

        case actions.EDIT_TODO: 
        state.todos[action.index].editToggle = true;
        console.log("editTodo", state.todos)
        return Object.assign({}, state, {todos: state.todos,
            editTodoValue: state.todos[action.index].title})

        case actions.EDIT_SUBMIT_TODO:
        console.log("Edit Todo Value",state.editTodoValue)
        
        // state.todos[action.index].title = state.editTodoValue;
        // state.todos[action.index].editToggle = false;
        state.todos[action.index] = {title: state.editTodoValue, editToggle: false}
        console.log("What State Says", state.todos)
        return Object.assign({}, state, {
            todos: state.todos,
            editTodoValue: ''
        })
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;