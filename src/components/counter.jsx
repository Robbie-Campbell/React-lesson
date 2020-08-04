import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component
{
	render()
	{
		return(
		<React.Fragment>
			<h4>Order #{this.props.counter.id}</h4>
			<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
			<button onClick={() =>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
			<button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Remove</button>
		</React.Fragment>
		)
	}

	getBadgeClasses()
	{
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};

	renderTags()
	{
		return <ul>{ this.props.counter.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
	};

	formatValue()
	{
		return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
	};
}

export default Counter;