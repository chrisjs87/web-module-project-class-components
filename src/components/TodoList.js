// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo'

class TodoList extends React.Component {

	render(){
		return(
			<div>
				{
					this.props.storedToDos.map(toDo => {
						return <Todo key={toDo.id} toDoText={toDo} />
					})
				}
			</div>
		)
	}
}

export default TodoList;