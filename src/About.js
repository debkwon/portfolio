import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <p>I'm <a href="https://www.linkedin.com/in/deborah-kwon" target="_blank" title="Deb Kwon LinkedIn">Deborah</a>, a developer based in NYC 👩🏻‍💻<br /><br />
        This is my portfolio sharing some of the stuff I've built individually and as part of a group because <br /><br />
        <figure>
          <img src="https://media.giphy.com/media/l3q2Wl7Wpz09Z5hfi/giphy.gif" alt="team work" />
          <figcaption>~team work makes the dream work~</figcaption>
        </figure><br />
        If you're interested in reaching out, you can send me a message on <a href="https://www.linkedin.com/in/deborah-kwon" target="_blank" title="Deb Kwon LinkedIn">LinkedIn</a> or follow my progress on <a href="https://github.com/debkwon/" target="_blank" title="Deb Kwon GitHub">GitHub</a>.<br />
        </p>
      </div>
    );
  }
}

export default About;
