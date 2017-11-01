// Will need an array of names and titles. For every single one of the items in the array, I will need to populate the page with their picture, name, and title.

import React from 'react';

export default class Speaker extends React.Component {

    render() {
      return (
        <div className="speaker">
          <div className="speaker-image" style={{backgroundImage: this.props.image}}></div>
          <div className="speaker-name">{this.props.name}</div>
          <div className="speaker-description">{this.props.description}</div>
        </div>
      )
    }
  }
