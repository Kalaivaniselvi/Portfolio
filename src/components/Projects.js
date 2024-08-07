import React from 'react';

const projects = [
  {
    name: 'Project One',
    description: 'Description of project one.',
    link: '#'
  },
  {
    name: 'Project Two',
    description: 'Description of project two.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
