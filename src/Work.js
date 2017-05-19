import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <figure>
          <Link to='/pioneers-of-mars'>
            <img src="pioneer.jpg" alt="Pioneers of Mars"/>
            <figcaption>PIONEERS OF MARS</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to='/selleb'>
            <img src="lipstick.jpg" alt="Selleb"/>
            <figcaption>$ELLEB</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to='/occuther'>
            <img src="butterfly.jpg" alt="OccuTher"/>
            <figcaption>OCCUTHER</figcaption>
          </Link>
        </figure>
        <figure>
          <Link to='/rando'>
            <img src="confetti.jpg" alt="rando"/>
            <figcaption>RANDO</figcaption>
          </Link>
        </figure>
        <div className="Work-links">
          <p>Deborah Kwon, Developer</p>
          <span>
            <a href="https://www.linkedin.com/in/deborah-kwon" title="Deb Kwon LinkedIn" target="_blank"><i className="fa fa-linkedin-square fa-lg animatedpulse"></i></a>
            <a href="https://github.com/debkwon/" title="Deb Kwon GitHub" target="_blank"><i className="fa fa-github-alt fa-lg animatedpulse"></i></a>
            <a href="https://codepen.io/debkwon/" title="Deb Kwon CodePen" target="_blank"><i className="fa fa-codepen fa-lg animatedpulse"></i></a>
          </span>
        </div>
        <figure>
          <Link to='/upcoming'>
            <img src="upcoming.jpg" alt="In The Works"/>
            <figcaption>IN THE WORKS</figcaption>
          </Link>
        </figure>
      </div>
    );
  }
}

export default Work;
