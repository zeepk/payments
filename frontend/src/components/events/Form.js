import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addEvent } from "../../actions/events";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export class Form extends Component {
  state = {
    name: "",
    start_date: null
  };

  static propTypes = {
    addEvent: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { name, start_date } = this.state;
    const event = { name, start_date };
    this.props.addEvent(event);
    this.setState({
      name: "",
      start_date: null
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
            <label>Start Date</label>
            {/* TODO: fix change function */}
            <DatePicker onChange={this.onChange} name="start_date" />
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
