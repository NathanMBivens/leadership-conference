import React from 'react';
import Speaker from './Speaker';

export default class SpeakersSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          image: 'url(' + require('../../images/sheryl-sandberg.jpg') + ')',
          name: "Sheryl Sandberg",
          description: "COO / Facebook"
        },
        {
          image: 'url(' + require('../../images/gary-vaynerchuk.jpg') + ')',
          name: "Gary Vaynerchuk",
          description: "Co-founder & CEO / Vaynermedia"
        },
        {
          image: 'url(' + require('../../images/craig-groeschel.jpg') + ')',
          name: "Craig Groeschel",
          description: "Pastor of Life Church"
        },
        {
          image: 'url(' + require('../../images/eric-thomas.jpg') + ')',
          name: "Dr. Eric Thomas",
          description: "Life Coach & Motivational Speaker"
        },

        {
          image: 'url(' + require('../../images/simon-sinek.jpg') + ')',
          name: "Simon Sinek",
          description: "Bestselling Author"
        },
        {
          image: 'url(' + require('../../images/chris-gardner.jpg') + ')',
          name: "Chris Gardner",
          description: "Philanthropist / Investor"
        },
        {
          image: 'url(' + require('../../images/john-maxwell.jpg') + ')',
          name: "John Maxwell",
          description: "Bestselling Author"
        },
        {
          image: 'url(' + require('../../images/dave-ramsey.jpg') + ')',
          name: "Dave Ramsey",
          description: "Founder & CEO / Ramsey Solutions"
        },

        {
          image: 'url(' + require('../../images/tony-robbins.jpg') + ')',
          name: "Tony Robbins",
          description: "Motivational Speaker"
        },
        {
          image: 'url(' + require('../../images/mel-robbins.jpg') + ')',
          name: "Mel Robbins",
          description: "Bestselling Author"
        },
        {
          image: 'url(' + require('../../images/andy-stanley.jpg') + ')',
          name: "Andy Stanley",
          description: "Pastor of North Point Church"
        },
        {
          image: 'url(' + require('../../images/waldo-waldman.jpg') + ')',
          name: "Lt. Waldo Waldman",
          description: "Retired Air Force Pilot"
        }

      ]
    };
  }

  render() {
    return (
      <div className="speakers-section-container">
      <div className="speaker-section-title">
      2018 Speaker Lineup
      </div>
        <div className="speakers-section">

          {this.state.speakers.map((item, index) => <Speaker key={index} image={item.image} name={item.name}
          description={item.description} />

          )}
        </div>
        <div className="closing-title">
        Yeah, we're excited too.
        </div>
      </div>
    )
  }
}
