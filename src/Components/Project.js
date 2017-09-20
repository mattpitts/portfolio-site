import React from 'react';

const Project = (props) => {
	let left;
	let right;
	if(props.id === 0 || props.id % 2 === 0) {
		left = (
			<div className="project-division">
				<img className="project-icon"src={props.project.iconUrl}/>
				<p className="project-description">{props.project.description}</p>
				<div className="project-links">
					<a href={props.gitURL}><i className="fa fa-github" aria-hidden="true"></i></a>
					<a href={props.deployedURL}><i className="fa fa-globe" aria-hidden="true"></i></a>
				</div>
			</div>
		)
		right = (
			<div className="project-division">
				<img className="project-screenshot" src={props.project.screenshotUrl}/>
			</div>
		)
	} else {
		left = (
			<div className="project-division">
				<img className="project-screenshot" src={props.project.screenshotUrl}/>
			</div>
		)
		right = (
			<div className="project-division">
				<img className="project-icon"src={props.project.iconUrl}/>
				<p className="project-description">{props.project.description}</p>
				<div className="project-links">
					<a href={props.gitURL}><i className="fa fa-github" aria-hidden="true"></i></a>
					<a href={props.deployedURL}><i className="fa fa-globe" aria-hidden="true"></i></a>
				</div>
			</div>
		)
	}
	return (
		<div className="project-container">
			<div>
				<h1 className="project-name">{props.project.name}</h1>
			</div>
			<div className="project-details-container">
				{left}
				{right}
			</div>
			<div className="project-divider"></div>
		</div>
	)
}


export default Project;
