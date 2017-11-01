// This is for the navigation bar with title in direct middle.
import React from 'react';
import LCButton from './LCButton';
import IconNavigation from './IconNavigation';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="navigation-bar">
      <IconNavigation />
      <div className="navigation-title">
      <h1> Leadership Conference 2018 </h1>
      </div>
      <LCButton buttonText="Sign Up Now"/>
      </div>
    )
  }
}
