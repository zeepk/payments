import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEvents, deleteEvent } from '../../actions/events';

export class Events extends Component {
	static propTypes = {
		events: PropTypes.array.isRequired,
		getEvents: PropTypes.func.isRequired,
		deleteEvent: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getEvents();
	}

	render() {
		return (
			<div>
				<Fragment>
					<h2>Events</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Type</th>
								<th>Start Date</th>
							</tr>
						</thead>
						<tbody>
							{this.props.events.map(event => (
								<tr key={event.id}>
									<td>{event.id}</td>
									<td>{event.name}</td>
									<td>{event.type}</td>
									<td>
										{event.start_date.substring(5, 7) +
											'/' +
											event.start_date.substring(8, 10) +
											'/' +
											event.start_date.substring(0, 4)}
									</td>
									<td>
										<button
											onClick={this.props.deleteEvent.bind(this, event.id)}
											className="btn btn-danger btn-sm"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Fragment>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	events: state.events.events
});

export default connect(mapStateToProps, { getEvents, deleteEvent })(Events);
