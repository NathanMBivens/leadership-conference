import React from 'react';

export default class Session extends React.Component {
  render() {
    return (
      <div className="session">
        <div className="session-day" value={this.props.day}></div>
        <div className="session-time">
        {this.props.time}
        </div>
        <div className="session-speaker">
        {this.props.speaker}
        </div>
        <div className="session-topic">
        {this.props.topic}
        </div>
      </div>
    )
  }
}
