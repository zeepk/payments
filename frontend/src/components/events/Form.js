import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addEvent } from '../../actions/events';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class Form extends Component {
	state = {
		name: '',
		start_date: '',
		type: 'Monthly',
		display_date: ''
	};

	componentDidMount() {
		const today = new Date();
		this.setState({
			start_date:
				today.getFullYear() +
				'-' +
				(today.getMonth() + 1) +
				'-' +
				today.getDate(),
			display_date: today
		});
	}

	static propTypes = {
		addEvent: PropTypes.func.isRequired
	};

	onChange = e => {
		console.log(e);
		console.log('Event: ' + e.target.name + ', ' + e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};

	handleChange = e => {
		console.log(e);
		const dateString =
			e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
		console.log(dateString);
		this.setState({ start_date: dateString, display_date: e });
	};
	onSubmit = e => {
		e.preventDefault();
		const { name, start_date, type, display_date } = this.state;
		const event = { name, start_date, type };
		this.props.addEvent(event);
		this.setState({
			name: '',
			type: type,
			start_date: start_date,
			display_date: display_date
		});
	};

	render() {
		const { name, start_date } = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
				<h2>Add Event</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name</label>
						<input
							className="form-control"
							type="text"
							name="name"
							onChange={this.onChange}
							value={name}
						/>
						<br />
						<br />
						<label>Start Date</label>
						<br />

						<DatePicker
							onChange={this.handleChange}
							name="start_date"
							selected={this.state.display_date}
						/>
						<br />
						<br />
						<label>Event Type</label>
						<br />
						<select
							defaultValue={this.state.value}
							onChange={this.onChange}
							name="type"
						>
							<option value="Monthly">Monthly</option>
							<option value="Weekly">Weekly</option>
							<option value="Biweekly">Biweekly</option>
						</select>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, { addEvent })(Form);
