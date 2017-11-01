import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation_LC from './Navigation_LC';
import HeadlineBanner_LC from './HeadlineBanner_LC';
import AboutSection_LC from './AboutSection_LC';
import SpeakersSection_LC from './SpeakersSection_LC';
import DatesSection_LC from './DatesSection_LC';
import ScheduleSection_LC from './ScheduleSection_LC';


export default class LCApp extends React.Component {
  render() {
    return (

        <div>
          <Navigation_LC />
          <HeadlineBanner_LC />
          <AboutSection_LC />
          <SpeakersSection_LC />
          <DatesSection_LC />
          <ScheduleSection_LC />

        </div>

    )
  }
}
