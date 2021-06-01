import React from "react";

class Todo extends React.Component {

	render(){
		return(
			<h3>{this.props.toDoText}</h3>
		)
	}
}

export default Todo;