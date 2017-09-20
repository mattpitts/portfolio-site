import React from 'react';

const Contact = () => {
	return (
		<div className="contact blue-gradient">
			<h6 className="section-header">Reach Out</h6>
			<div className='contact-container'>
				<div className='icon-text-container'>
					<i className="fa fa-linkedin" aria-hidden="true"></i>
					<a href="https://www.linkedin.com/in/matt-pitts/"><p>/matt-pitts</p></a>
				</div>
				<div className='icon-text-container'>
					<i className="fa fa-github" aria-hidden="true"></i>
					<a href="https://github.com/mattpitts/"><p>/mattpitts</p></a>
				</div>
				<div className='icon-text-container'>
					<i className="fa fa-envelope" aria-hidden="true"></i>
					<p>mattpittsmusic@gmail.com</p>
				</div>
			</div>
		</div>
	)
}

export default Contact;
