import React from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';

export default class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <ModernDatepicker
          date={this.state.startDate}
          format={'DD-MM-YYYY'}
          showBorder
          onChange={(date) => this.handleChange(date)}
          placeholder={'Select a date'}
        />
  }
}

