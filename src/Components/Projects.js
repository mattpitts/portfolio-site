import React from 'react';
import projects from '../projects';
import Project from './Project';

const Projects = () => {
	return (
		<div className="projects blue-gradient">
			{projects.map((project, i)=>
					<Project
						key={i}
						project={project}
					/>
			)}
		</div>
	)
}

export default Projects;
