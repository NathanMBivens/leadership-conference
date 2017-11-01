// Will need an array of objects with properties: day #. I will need to make a session component that handles: time, speaker, and session topic. For every single one of the items in the array, I will need to populate the Day component with these properties and then I'll need to populate the ScheduleSection component with the day components.

import React from 'react';
import Session from './Session';
import Day from './Day';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSessionDay: false,
      sessions: [
        {
          day: '1',
          time: '9:30AM',
          speaker: 'Dr. Eric Thomas',
          topic: 'Rise and Grind'
        },
        {
          day: '1',
          time: '11:00AM',
          speaker: 'Simon Sinek',
          topic: 'Why Your Why is Invaluable'
        },
        {
          day: '1',
          time: '1:30PM',
          speaker: 'Tony Robbins',
          topic: 'Playing on Your Terms'
        },
        {
          day: '1',
          time: '3:00PM',
          speaker: 'Craig Groeschel',
          topic: 'Authenticated Leadership'
        },
        {
          day: '2',
          time: '9:30AM',
          speaker: 'Gary Vaynerchuk',
          topic: 'You Are Going to Die'
        },
        {
          day: '2',
          time: '11:00AM',
          speaker: 'Mel Robbins',
          topic: '5 Seconds to Change Your Life'
        },
        {
          day: '2',
          time: '1:30PM',
          speaker: 'Waldo Waldman',
          topic: 'Above All Else'
        },
        {
          day: '2',
          time: '3:00PM',
          speaker: 'John Maxwell',
          topic: 'The Importance of Passionate Purpose'
        },
        {
          day: '3',
          time: '9:30AM',
          speaker: 'Dave Ramsey',
          topic: 'Against All Odds'
        },
        {
          day: '3',
          time: '11:00AM',
          speaker: 'Andy Stanley',
          topic: 'Getting the Most Out of Your Team'
        },
        {
          day: '3',
          time: '1:30PM',
          speaker: 'Chris Gardener',
          topic: 'Smarter than You Think'
        },
        {
          day: '3',
          time: '3:00PM',
          speaker: 'Sheryl Sandberg',
          topic: 'What to Do Now'
        },
      ]
    };
    this.sessionDay = this.sessionDay.bind(this);
  };

  sessionDay(number, dayArray) {
  this.state.sessions.map((item, index) =>
    item.day == number ?
    dayArray.push(item) : null
  )
  }



  render() {

    var day1 = [];
    var day2 = [];
    var day3 = [];
    var day4 = [];

    return (
      <div className="schedule-container">

          <div className="schedule-day">
          <div className="day-number">Day 1</div>
            {this.sessionDay(1, day1)}
            {console.log(day1)}
            {day1.map((item, index) =>
               <Session key={index} day={item.day} time={item.time} speaker={item.speaker} topic={item.topic} />
          )}
          </div>
          <div className="schedule-day">
          <div className="day-number">Day 2</div>
            {this.sessionDay(2, day2)}
            {console.log(day2)}
            {day2.map((item, index) =>
               <Session key={index} day={item.day} time={item.time} speaker={item.speaker} topic={item.topic} />
          )}
          </div>
          <div className="schedule-day">
          <div className="day-number">Day 3</div>
            {this.sessionDay(3, day3)}
            {console.log(day3)}
            {day3.map((item, index) =>
               <Session key={index} day={item.day} time={item.time} speaker={item.speaker} topic={item.topic} />
          )}
          </div>
      </div>
    )
  }
  }
