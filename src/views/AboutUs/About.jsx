import React from 'react';
import { Link } from 'react-router-dom';
import mark from './pfps/mark.jpg';
import andrew from './pfps/andrew.jpg';
import chase from './pfps/chase.jpg';
import brett from './pfps/brett.jpg';
import linkedin from './pfps/linkedin.png';
import './AboutUs.css';

export default function About() {
  return (
    <div className="aboutus">
      <br></br>
      <h1>About the Creators</h1>
      <br></br>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/andrewjoy12/' }}
        target="_blank"
      >
        <div className="us">
          <img src={andrew} className="pfp"></img>
          <img src={linkedin} className="linkedin"></img>
        </div>
        <h2>Andrew</h2>
      </Link>
      <p>
        From Amatuer Pro Triathlete to a Fullstack Developer base in Portland,
        OR, Andrew was instrumental in the team sucessefully completeing the
        project on time, and above expectation. Core design principles and a
        tailwind styler, Andrew helped create the overall style of the App.
        Switching from being an Amatuer Pro Triathlete to a Fullstack Developer
        in Beaverton, OR.
      </p>
      <br></br>
      <Link
        to={{
          pathname: 'https://www.linkedin.com/in/mark-voltaire-4907091bb/',
        }}
        target="_blank"
      >
        <div className="us">
          <img src={mark} className="pfp"></img>
          <img src={linkedin} className="linkedin"></img>
        </div>
        <h2>Mark</h2>
      </Link>
      <p>
        THE up and coming Software Developer from Miami, Florida. Mark built out
        functional buttons that communicated with the database and handled
        profile information and style. Mark’s mind is designed to understand
        development at a fundamental level and is a solid and reliable member of
        the team.
      </p>
      <br></br>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/gregory-crowder/' }}
        target="_blank"
      >
        <div className="us">
          <img src={chase} className="pfp"></img>
          <img src={linkedin} className="linkedin"></img>
        </div>
        <h2>Chase</h2>
      </Link>
      <p>
        Based in Portland, Chase’s big dreams become reality to his attention to
        detail and making sure no corners are cut. Chase was the team member
        that had everyone's back. He provided the final piece of the puzzle to
        solve many coding barriers.
      </p>
      <br></br>
      <br></br>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/brett-seifried/' }}
        target="_blank"
      >
        <div className="us">
          <img src={brett} className="pfp"></img>
          <img src={linkedin} className="linkedin"></img>
        </div>
        <h2>Brettford</h2>
      </Link>
      <p>
        The other PNW developer who worked on Routing, communication with the
        Data base, and this page you’re reading right now! As a father, veteran,
        and Full-Stack developer, Brettford couldn’t ask for more.
      </p>
    </div>
  );
}
