import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './Navigation_LC';

export default class LCApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navigation} />
        </div>
      </Router>
    )
  }
}
