import React from 'react';
import moment from 'moment';
import UIDatePicker from 'zs-react/UIDatePicker';
/** Datepicker Example */
export default class ExampleUIDatePicker extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          startDate: moment()
      }
  }
  handleChange = (date) => {
    console.log(date);
    this.setState({
        startDate: date
    })
  }

  render() {
     return <UIDatePicker selected={this.state.startDate} onChange = {this.handleChange} />
  }
}
