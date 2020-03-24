import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents, deleteEvent } from "../../actions/events";

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
    const event_list = this.props.events.map(event => {
      const next_date = new Date(event.start_date);
      next_date.setDate(next_date.getDate() + 1);
      const start_date = new Date(next_date);

      // ADD MONTH
      console.log(next_date);
      next_date.setMonth(next_date.getMonth() + 1);
      console.log(next_date);
      //

      if (event.type === "Monthly") {
      } else if (event.type === "Weekly") {
      } else if (event.type === "Biweekly") {
      } else {
      }
      return (
        <tr key={event.id}>
          <td>{event.name}</td>
          <td>{event.type}</td>
          <td>{new Date(start_date).toDateString()}</td>
          <td>{next_date.toDateString()}</td>
          <td>
            <button
              onClick={this.props.deleteEvent.bind(this, event.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Fragment>
          <h3>Events</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>Next Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{event_list}</tbody>
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
