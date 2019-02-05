import React, {Component} from 'react'
import { connect } from 'react-redux';
import { MDBInput,MDBBtn } from 'mdbreact';
// import { MDBBtn } from '/mdbreact';
class AddTodo extends Component {
    render(){
        return(
            <div>
                <h1>Add Todo Here</h1>
                <form onSubmit={this.props.submitTodo}>
                <MDBInput type="text" label="Add Todo Here" value={this.props.inputText} onChange={this.props.inputChange}/>
                <MDBBtn color="primary" type="submit">Add Todo</MDBBtn>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputText: state.inputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            const action = {type:"INPUT_CHANGE", value: e.target.value, variable: 'inputText'};
            dispatch(action)
        },
        submitTodo: (e) => {
            e.preventDefault();
            // console.log("Submit Works")
            const action = {type: "ADD_TODO"}
            dispatch(action)
        }
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)