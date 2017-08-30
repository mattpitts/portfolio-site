import React from 'react';

const About = () => {
	return (
		<div className="about">
			<img className="headshot" src={require('../images/headshot.jpg')}/>
			<div className="about-bio">
				<h6 className="section-header">About Me</h6>
				<p>
					I am a full stack developer currently in Denver, Colorado.
					I enjoy writing challenging code to solve interesting problems. I am also a professional saxophone player,
					and I believe the creative aspects of music synergize with the technical and creative aspects of writing code.
				</p>
				<p>
					When I'm not writing code or playing music, I enjoy hiking, camping, running, craft beer, history and the playing the occasional game on my PC.
				</p>
			</div>
		</div>
	)
}

export default About;
