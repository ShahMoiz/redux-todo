import React, { Component } from 'react';
import './App.css';
import Posts  from "./components/post";
import AddPost  from "./components/addPost";
// import { MDBBtn } from 'mdbreact'
import InputChange from './components/inputChange';
import Todos from './components/todos';
// import store from "./index";
class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Todos />
      <InputChange />
        <AddPost />
        <Posts />
      </div>
    );
  }
}

export default App;
