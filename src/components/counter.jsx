import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
	state ={
		value: this.props.value,
		tags: []
	};

	constructor(props)
	{
		super (props);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	render(){
		console.log(this.props)
		return(
		<React.Fragment>
			{this.props.children}
			<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
			<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
			<button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button>
			{this.state.tags.length === 0 && "There are no tags!"}
			{this.renderTags()}
		</React.Fragment>
		)
	}

	getBadgeClasses()
	{
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	};

	renderTags()
	{
		return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
	};

	formatValue()
	{
		return this.state.value === 0 ? "zero" : this.state.value;
	};

	handleIncrement = () =>
	{
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () =>
	{
		this.setState({ value: this.state.value - 1 });
	};
}

export default Counter;