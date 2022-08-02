import React, { Component } from 'react';
import classes from './UI/styles.css';
import MyButton from './UI/MyButton/MyButton';

export default class Ccomponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	increment() {
		this.setState(state => ({
			count: state.count + 1
		}))
	}
	decrement() {
		this.setState(state => ({
			count: state.count - 1
		}))
	}
	reset() {
		this.setState({
			count: 0
		})
	}

	render() {
		return (
			<div >
				<h1
					style={{ margin: '15px 0' }}
				>Current: {this.state.count}
				</h1>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<MyButton style={{ marginRight: '10px' }} onClick={this.increment}>
						increment
					</MyButton>
					<MyButton onClick={this.decrement}>
						decrement
					</MyButton>
				</div >

				<MyButton style={{ display: 'flex', margin: '15px auto 0' }} onClick={this.reset}>
					reset
				</MyButton>
			</div >
		)
	}
}
