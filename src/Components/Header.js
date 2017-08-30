import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


	return (
		<div className = 'header'>
			<Link to='/'><img className='header-logo' src={require('../images/mp-logo-light.png')}/></Link>
		{/*	<h1 className='header-title'>All About Matt Pitts</h1> */}
			<ul className = 'header-nav'>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/projects'>Projects</Link></li>
				<li><Link to='/contact'>Contact</Link></li>
				<li><Link to='/resume'>Resume</Link></li>
			</ul>
		</div>
	)
}


export default Header;
