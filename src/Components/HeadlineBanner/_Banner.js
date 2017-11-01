import React from 'react';
import RightHeadlineBanner from './RightHeadlineBanner';
import LeftVideoBanner from './LeftVideoBanner';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="headline-banner">
        <div className="headline-container">
        <LeftVideoBanner />
        <RightHeadlineBanner />
        </div>
      </div>
    )
  }
}
