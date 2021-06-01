import React from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    storedToDos: [],
    formValue: ''
  };
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Write Change handlers
  handleChange = (e) => {
    this.setState({
      formValue: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newArray = this.state.storedToDos;
    newArray.push(this.state.formValue)
    this.setState({
      storedToDos: newArray
    })
    console.log(this.state.formValue)
    console.log(this.state.storedToDos)
    this.setState({
      formValue: ''
    })
  }

  render() {
    return (
      <div>
        <h2>To Do</h2>
        <TodoList storedToDos={this.state.storedToDos} />
        <TodoForm formValue={this.state.formValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div> 
    );
  }
}

export default App;
