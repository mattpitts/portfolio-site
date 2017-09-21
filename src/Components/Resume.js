import React from 'react';

const Resume = () => {
	return (
		<div className="resume blue-gradient">
			<h6 className="section-header">Resume</h6>
			<div className="resume-container">
				<img className="resume-image" src={require('../images/resume-v2.png')}/>
			</div>
		</div>
	)
}

export default Resume;
