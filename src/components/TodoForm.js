import React from "react";

class TodoForm extends React.Component {

	render(){
		return(
			<form onSubmit={this.props.handleSubmit}>
				<input onChange={this.props.handleChange} value={this.props.formValue} />
				<button>Add Todo</button>
				<button onClick={this.props.handleClear}>Clear Completed</button>
			</form>
		)
	}
}

export default TodoForm;