import React from 'react';
import Schedule from './Schedule';
import LCButton from '../Navigation/LCButton';

export default class ScheduleSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [1,2,3]
    }
  };
  render() {

    return (
      <div className="schedule-section">
        <div className="schedule-header">
          2018 Schedule
        </div>
        <div className="schedule-component">
          <Schedule />
        </div>
        <div className="sign-up-big">
          Sign Up Now
        </div>
      </div>
    )
  }
}
