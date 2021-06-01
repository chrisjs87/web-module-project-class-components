import React from "react";

class TodoForm extends React.Component {

	render(){
		return(
			<form>
				<input onChange={this.props.handleChange} value={this.props.formValue} />
				{/* {console.log(this.props.formValue)} */}
				<button>Add Todo</button>
				<button>Clear Completed</button>
			</form>
		)
	}
}

export default TodoForm;