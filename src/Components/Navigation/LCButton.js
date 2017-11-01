import React from 'react';

export default class LCButton extends React.Component {

  render() {
    return (
      <button className="lc-button" onClick={this.props.onClick}>
      {this.props.buttonText}
      </button>
    )
  }
}
