import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation_LC from './Navigation_LC';
import HeadlineBanner_LC from './HeadlineBanner_LC';

export default class LCApp extends React.Component {
  render() {
    return (

        <div>
          <Navigation_LC />
          <HeadlineBanner_LC />
        </div>

    )
  }
}
