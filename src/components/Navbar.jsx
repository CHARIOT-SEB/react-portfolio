import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [linkSelected, setLinkSelected] = useState(false);
	const [navLinkStyle, setNavLinkStyle] = useState('nav-link');

	// const handleNavSelect = () => {
	// 	setLinkSelected(true);
	// };

	// if (linkSelected === true) {
	// 	setNavLinkStyle('nav-link-bold');
	// } else setNavLinkStyle('nav-link');

	return (
		<div>
			<header className='header' id='header'>
				<nav className='nav-bar' id='nav-bar'>
					<div className='final-logo'>
						<h1 className='sebastian'>Sebastian</h1>
						<h2 className='boyse'>Boyse</h2>
						<div className='yellow-logo-block'></div>
						<h3 className='logo-tagline'>RESPONSIVE WEB & SOFTWARE DEVELOPMENT</h3>
					</div>

					<div className='yellow-nav-block'></div>

					<ul className='nav-links'>
						<li>
							<Link to='/' className='nav-link' id='nav-home'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/projects/' className='nav-link' id='nav-portfolio'>
								Projects
							</Link>
						</li>
						<li>
							<Link to='/work/' className='nav-link' id='nav-work'>
								Work
							</Link>
						</li>
						<li>
							<Link to='/contact/' className='nav-link' id='nav-contact'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
