import React from 'react';

const Project = (props) => {
	return (
		<div className="project-container">
			<div>
				<h1 className="project-name">{props.project.name}</h1>
			</div>
			<div className="project-details-container">
				<div className="project-division">
					<img className="project-icon"src={props.project.iconUrl}/>
					<p className="project-description">{props.project.description}</p>
				</div>
				<div className="project-division">
					<img className="project-screenshot" src={props.project.screenshotUrl}/>
				</div>
			</div>
			<div className="project-divider"></div>
		</div>
	)
}


export default Project;
