// For every icon I want to add, I should have a function in place that takes the each item I want, and populate the navigation bar with it.
import React from 'react';

export default class IconNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationLinks : [],
      navigationIcons : []
    };
  }

  render() {
    return (
      <div className="icon-navigation">
      *****
      </div>
    )
  }
}
