import React from 'react';

export default class DatesSection extends React.Component {

  render() {
    var style = {
      backgroundImage: 'url(' + require('../../images/texas-outline.png') + ')',

      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',

    }
    return (
      <div className="dates-section">
        <div className="dates-grid texas-icon" style={style}>
          <div className="date">
            March 21-26, 2018
          </div>
          <div className="location">
            Austin, Texas
          </div>
          <div className="location-hub">
            @ The Austin Convention Center
          </div>
        </div>

      </div>
    )
  }
}
