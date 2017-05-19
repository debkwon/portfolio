import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
  render() {
    const project = this.props.project
    return (
      <div className="Project">
        <Link to='/work'><i className='fa fa-chevron-left' id='back-arrow'></i>Back to Work</Link>
        { project.desc.map( (d, idx) =>
           <div className="Project-main" key={idx}>
              <figure>
                <a href={project.link[idx]} target="_blank">
                  <img src={project.img[idx]} alt={project.alt[idx]} />
                  <figcaption>{project.alt[idx]}</figcaption>
                </a>
              </figure>
              <span id="Project-title">{project.name[idx]} <br />
                <p id="Project-desc">{project.desc[idx]}<br /><br />
                Code:<a href={project.github[idx]} target="_blank"> {project.github[idx]}</a><br /><br />
                Built with: {project.tools}
                </p>
              </span>
              <br /><br />
          </div>
        )}
      </div>
    );
  }
}

export default Project;
