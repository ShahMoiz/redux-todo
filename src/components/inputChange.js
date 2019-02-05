import React, {Component} from 'react';
import { MDBInput } from 'mdbreact';
import { connect } from 'react-redux';
// import InputChange from './inputChange';
class InputChange extends Component {
    render(){
        return (
            <div>
                <MDBInput type="text" label="Input Here" value={this.props.inputText} onChange={this.props.inputChange}/>
                <p>{this.props.inputText}</p>
            </div>
        )
    }
}

function mapStatetoProps(state){
    // console.log("State function works")
    return {
        inputText: state.inputText
    }
}

function mapDispatchtoProps(dispatch){
    // console.log("Dispatch function works")
    return {
        inputChange: (e) => {
            const action = {type: "INPUT_CHANGE", value:e.target.value}
            dispatch(action)
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)( InputChange)