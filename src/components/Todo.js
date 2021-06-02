import React from "react";

class Todo extends React.Component {
	render(){
		return(
			<h3 onClick={this.props.completedHandler} >{this.props.toDoInfo.task}</h3>
		)
	}
}

export default Todo;