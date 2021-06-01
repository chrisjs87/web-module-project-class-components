import React from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {};
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Write Change handlers

  render() {
    return (
      <div>
        <h2>To Do</h2>
        <TodoList>
            {/* Todo will be mapped through here */}
        </TodoList>
        <TodoForm/>
      </div> 
    );
  }
}

export default App;
