import React from 'react';
import projects from '../projects';
import Project from './Project';

const Projects = () => {
	return (
		<div className="projects blue-gradient">
			<h1 className='section-title'>Projects</h1>
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
